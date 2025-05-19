
// Function to calculate perceptual distance between two colors
// Based on CIEDE2000 color difference formula (simplified)
export function getColorDistance(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  
  if (!rgb1 || !rgb2) return Infinity;
  
  // Simple RGB Euclidean distance (not perceptually accurate but works for MVP)
  const rDiff = rgb1.r - rgb2.r;
  const gDiff = rgb1.g - rgb2.g;
  const bDiff = rgb1.b - rgb2.b;
  
  return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
}

// Convert hex color to RGB
export function hexToRgb(hex: string) {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Handle 3-digit hex
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  
  // Check if valid hex
  if (hex.length !== 6) {
    return null;
  }
  
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  
  return { r, g, b };
}

// Convert RGB to hex
export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// Format hex color to standard format (uppercase with #)
export function formatHexColor(hex: string): string {
  if (!hex) return '';
  
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Handle 3-digit hex
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  
  if (hex.length !== 6) {
    return '';
  }
  
  return '#' + hex.toUpperCase();
}

// Validate hex color
export function isValidHexColor(hex: string): boolean {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex);
}

// Calculate perceived brightness (for determining text color)
export function getPerceivedBrightness(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  
  // Formula: (R * 299 + G * 587 + B * 114) / 1000
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

// Get appropriate text color based on background color
export function getTextColorForBackground(bgHex: string): string {
  const brightness = getPerceivedBrightness(bgHex);
  return brightness > 125 ? '#000000' : '#FFFFFF';
}

// Calculate similarity percentage between two colors
export function getSimilarityPercentage(distance: number): number {
  // Max possible RGB distance is sqrt(3 * 255^2) = ~441.67
  const maxDistance = Math.sqrt(3 * 255 * 255);
  const similarity = 100 - (distance / maxDistance) * 100;
  return Math.round(similarity * 10) / 10; // Round to 1 decimal place
}
