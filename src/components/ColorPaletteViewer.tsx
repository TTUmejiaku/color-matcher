
import React, { useState } from 'react';
import { designSystemColors, colorGroups, DesignSystemColor } from '@/data/designSystemColors';
import { getTextColorForBackground } from '@/utils/colorUtils';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ColorPaletteViewer = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: `${text} has been copied to clipboard`,
      });
    });
  };

  const filteredColors = selectedGroup 
    ? designSystemColors.filter(color => color.group === selectedGroup)
    : designSystemColors;

  // Group colors by name
  const groupedColors: Record<string, DesignSystemColor[]> = {};
  filteredColors.forEach(color => {
    if (!groupedColors[color.name]) {
      groupedColors[color.name] = [];
    }
    groupedColors[color.name].push(color);
  });

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span className="text-sm font-medium">Filter by color group:</span>
          <Select
            onValueChange={(value) => setSelectedGroup(value === 'all' ? null : value)}
          >
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="All Colors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Colors</SelectItem>
              {colorGroups.map((group) => (
                <SelectItem key={group} value={group}>
                  {group.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedColors).map(([name, colors]) => (
          <div key={name} className="bg-white rounded-lg shadow-sm p-4 border">
            <h3 className="text-lg font-medium mb-3">{name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {colors.map((color) => (
                <div
                  key={`${color.name}-${color.shade}`}
                  className="border rounded-md overflow-hidden"
                >
                  <div
                    className="h-16 flex items-center justify-center"
                    style={{
                      backgroundColor: color.hex,
                      color: getTextColorForBackground(color.hex),
                    }}
                  >
                    {color.hex}
                  </div>
                  <div className="p-2 text-sm bg-gray-50">
                    <div className="font-medium">{`${color.shade}${color.state ? ' (' + color.state + ')' : ''}`}</div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-gray-600 text-xs">{color.hex}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 text-xs"
                        onClick={() => copyToClipboard(color.hex)}
                      >
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPaletteViewer;
