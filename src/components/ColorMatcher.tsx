import React, { useState, useEffect, useRef } from "react";
import {
  designSystemColors,
  DesignSystemColor,
} from "@/data/designSystemColors";
import {
  isValidHexColor,
  getColorDistance,
  formatHexColor,
  getTextColorForBackground,
  getSimilarityPercentage,
} from "@/utils/colorUtils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface MatchResult {
  exact: DesignSystemColor | null;
  similar: Array<{ color: DesignSystemColor; similarity: number }>;
}

const ColorMatcher = () => {
  const [inputColor, setInputColor] = useState("");
  const [formattedColor, setFormattedColor] = useState("");
  const [matchResult, setMatchResult] = useState<MatchResult>({
    exact: null,
    similar: [],
  });
  const [isValidInput, setIsValidInput] = useState(false);
  const lastProcessedClipboard = useRef<string | null>(null);
  const { toast } = useToast();

  // Function to find exact and similar colors
  const findMatches = (hexColor: string) => {
    // Format to standard format
    const standardHex = formatHexColor(hexColor);
    if (!standardHex || !isValidHexColor(standardHex)) {
      setIsValidInput(false);
      return;
    }

    setIsValidInput(true);
    setFormattedColor(standardHex);

    // 1. Look for exact match
    const exactMatch = designSystemColors.find(
      (color) => color.hex.toLowerCase() === standardHex.toLowerCase()
    );

    // 2. If no exact match, find similar colors
    const similarColors = designSystemColors
      .map((color) => ({
        color,
        distance: getColorDistance(standardHex, color.hex),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3) // Get top 3 closest colors
      .map((item) => ({
        color: item.color,
        similarity: getSimilarityPercentage(item.distance),
      }));

    setMatchResult({
      exact: exactMatch || null,
      similar: exactMatch ? [] : similarColors,
    });
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputColor(value);

    // Validate the input as user types
    if (isValidHexColor(value)) {
      findMatches(value);
    } else {
      setIsValidInput(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidHexColor(inputColor)) {
      findMatches(inputColor);
    } else {
      toast({
        title: "Invalid Color Format",
        description: "Please enter a valid hex color (e.g., #FF5500 or FF5500)",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: `${text} has been copied to clipboard`,
      });
    });
  };

  // Add clipboard paste event listener
  useEffect(() => {
    const handleClipboardChange = async () => {
      try {
        const text = await navigator.clipboard.readText();
        // Clean up the text and check if it's a valid hex code
        const cleanedText = text.trim();

        if (
          isValidHexColor(cleanedText) &&
          cleanedText !== lastProcessedClipboard.current
        ) {
          setInputColor(cleanedText);
          findMatches(cleanedText);

          // Update the last processed clipboard reference
          lastProcessedClipboard.current = cleanedText;

          toast({
            title: "Color Detected",
            description: `Valid color ${formatHexColor(
              cleanedText
            )} pasted from clipboard`,
          });
        }
      } catch (err) {
        console.error("Failed to read clipboard:", err);
      }
    };

    // We can't directly listen to clipboard changes due to security restrictions
    // Instead we'll listen for focus events and check the clipboard when the app regains focus
    window.addEventListener("focus", handleClipboardChange);

    // Also listen for paste events on the document
    const handlePaste = (e: ClipboardEvent) => {
      const pastedText = e.clipboardData?.getData("text");
      if (
        pastedText &&
        isValidHexColor(pastedText) &&
        pastedText !== lastProcessedClipboard.current
      ) {
        setInputColor(pastedText);
        findMatches(pastedText);
        lastProcessedClipboard.current = pastedText;
      }
    };

    document.addEventListener("paste", handlePaste);

    return () => {
      window.removeEventListener("focus", handleClipboardChange);
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col md:flex-row gap-2">
          <Input
            type="text"
            value={inputColor}
            onChange={handleColorChange}
            placeholder="Enter hex color (e.g., #20C997 or 20C997)"
            className="flex-grow"
          />
          <Button
            type="submit"
            disabled={!inputColor}
            className="bg-teal-500 hover:bg-teal-600"
          >
            Match Color
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Pro tip: Copy any hex color to clipboard and it will be automatically
          detected when you return to this page
        </p>
      </form>

      {isValidInput && formattedColor && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div
              className="w-24 h-24 rounded-lg shadow-md border"
              style={{
                backgroundColor: formattedColor,
                color: getTextColorForBackground(formattedColor),
              }}
            >
              <div className="h-full flex items-center justify-center">
                {formattedColor}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">Your Color</h3>
              <p className="text-gray-600">{formattedColor}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(formattedColor)}
                className="mt-2"
              >
                Copy Hex
              </Button>
            </div>
          </div>

          {matchResult.exact ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-green-800 mb-2">
                Exact Match Found!
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div
                  className="w-24 h-24 rounded-lg shadow-md border"
                  style={{
                    backgroundColor: matchResult.exact.hex,
                    color: getTextColorForBackground(matchResult.exact.hex),
                  }}
                >
                  <div className="h-full flex items-center justify-center">
                    {matchResult.exact.hex}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">{matchResult.exact.name}</h4>
                  <p>Shade: {matchResult.exact.shade}</p>
                  {matchResult.exact.state && (
                    <p>State: {matchResult.exact.state}</p>
                  )}
                  <p className="text-gray-600">{matchResult.exact.hex}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(matchResult.exact?.hex || "")
                    }
                    className="mt-2"
                  >
                    Copy Hex
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-amber-800 mb-2">
                No Exact Match Found
              </h3>
              <p className="text-amber-700 mb-4">
                Here are the 3 closest colors from the design system:
              </p>

              <div className="space-y-4">
                {matchResult.similar.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-4 items-center bg-white p-3 rounded-md"
                  >
                    <div
                      className="w-20 h-20 rounded-lg shadow-md border"
                      style={{
                        backgroundColor: item.color.hex,
                        color: getTextColorForBackground(item.color.hex),
                      }}
                    >
                      <div className="h-full flex items-center justify-center">
                        {item.color.hex}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{item.color.name}</h4>
                        <span className="text-sm bg-teal-100 text-teal-800 py-1 px-2 rounded-full">
                          {item.similarity}% similar
                        </span>
                      </div>
                      <p>Shade: {item.color.shade}</p>
                      {item.color.state && <p>State: {item.color.state}</p>}
                      <p className="text-gray-600">{item.color.hex}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(item.color.hex)}
                        className="mt-1"
                      >
                        Copy Hex
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ColorMatcher;
