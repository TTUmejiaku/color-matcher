
export interface DesignSystemColor {
  name: string;
  shade: string;
  state?: string;
  hex: string;
  group: string;
}

// Create our design system colors based on the provided palette
export const designSystemColors: DesignSystemColor[] = [
  // Corn Blue
  { name: "Corn Blue", shade: "Base", state: "Default", hex: "#173EB7", group: "corn-blue" },
  { name: "Corn Blue", shade: "Active", state: "Active", hex: "#2E5193", group: "corn-blue" },
  { name: "Corn Blue", shade: "Disabled", state: "Disabled", hex: "#C5CFE1", group: "corn-blue" },
  { name: "Corn Blue", shade: "Hover", state: "Hover", hex: "#F6F7FA", group: "corn-blue" },
  
  // Gray
  { name: "Gray", shade: "Base", state: "Default", hex: "#4B5563", group: "gray" },
  { name: "Gray", shade: "Active", state: "Active", hex: "#666E7A", group: "gray" },
  { name: "Gray", shade: "Disabled", state: "Disabled", hex: "#DBBDD0", group: "gray" },
  { name: "Gray", shade: "Hover", state: "Hover", hex: "#F8F8F9", group: "gray" },
  
  // Teal
  { name: "Teal", shade: "25", hex: "#F6FDFB", group: "teal" },
  { name: "Teal", shade: "50", hex: "#DEFF7EF", group: "teal" },
  { name: "Teal", shade: "75", hex: "#C7F2E5", group: "teal" },
  { name: "Teal", shade: "100", hex: "#A6E9D5", group: "teal" },
  { name: "Teal", shade: "200", hex: "#63D9B6", group: "teal" },
  { name: "Teal", shade: "300", hex: "#36CEA1", group: "teal" },
  { name: "Teal", shade: "400", hex: "#20C997", group: "teal" },
  { name: "Teal", shade: "500", hex: "#1AA179", group: "teal" },
  { name: "Teal", shade: "600", hex: "#158362", group: "teal" },
  { name: "Teal", shade: "700", hex: "#10654B", group: "teal" },
  { name: "Teal", shade: "800", hex: "#0A3C2D", group: "teal" },
  { name: "Teal", shade: "900", hex: "#051E17", group: "teal" },
  
  // Light Blue
  { name: "Light Blue", shade: "25", hex: "#F9FBFE", group: "light-blue" },
  { name: "Light Blue", shade: "50", hex: "#DCE2ED", group: "light-blue" },
  { name: "Light Blue", shade: "75", hex: "#C5CFE1", group: "light-blue" },
  { name: "Light Blue", shade: "100", hex: "#A2B2CF", group: "light-blue" },
  { name: "Light Blue", shade: "200", hex: "#5D78AB", group: "light-blue" },
  { name: "Light Blue", shade: "300", hex: "#2E5193", group: "light-blue" },
  { name: "Light Blue", shade: "400", hex: "#173EB7", group: "light-blue" },
  { name: "Light Blue", shade: "500", hex: "#0E2856", group: "light-blue" },
  { name: "Light Blue", shade: "600", hex: "#0F2858", group: "light-blue" },
  { name: "Light Blue", shade: "700", hex: "#0B1F43", group: "light-blue" },
  { name: "Light Blue", shade: "800", hex: "#071329", group: "light-blue" },
  { name: "Light Blue", shade: "900", hex: "#030914", group: "light-blue" },
  
  // Green
  { name: "Green", shade: "Base", state: "Default", hex: "#28A745", group: "green" },
  { name: "Green", shade: "Active", state: "Active", hex: "#3EB058", group: "green" },
  { name: "Green", shade: "Disabled", state: "Disabled", hex: "#C9E9D1", group: "green" },
  { name: "Green", shade: "Hover", state: "Hover", hex: "#DFF2E3", group: "green" },
  
  // Amber
  { name: "Amber", shade: "50", hex: "#FFF6DA", group: "amber" },
  { name: "Amber", shade: "75", hex: "#FFEFC1", group: "amber" },
  { name: "Amber", shade: "100", hex: "#FFE69C", group: "amber" },
  { name: "Amber", shade: "200", hex: "#FFD451", group: "amber" },
  { name: "Amber", shade: "300", hex: "#FFC720", group: "amber" },
  { name: "Amber", shade: "400", hex: "#FFC107", group: "amber" },
  { name: "Amber", shade: "500", hex: "#CC9A06", group: "amber" },
  { name: "Amber", shade: "600", hex: "#A67D05", group: "amber" },
  { name: "Amber", shade: "700", hex: "#806103", group: "amber" },
  { name: "Amber", shade: "800", hex: "#4D3A02", group: "amber" },
  { name: "Amber", shade: "900", hex: "#261D01", group: "amber" },
  
  // Red
  { name: "Red", shade: "Base", state: "Default", hex: "#DC3545", group: "red" },
  { name: "Red", shade: "Active", state: "Active", hex: "#E04958", group: "red" },
  { name: "Red", shade: "Disabled", state: "Disabled", hex: "#F6CDD1", group: "red" },
  { name: "Red", shade: "Hover", state: "Hover", hex: "#FAE1E3", group: "red" },
  
  // Soft Green
  { name: "Soft Green", shade: "50", hex: "#DFF2E3", group: "soft-green" },
  { name: "Soft Green", shade: "75", hex: "#C9E9D1", group: "soft-green" },
  { name: "Soft Green", shade: "100", hex: "#C9E9D1", group: "soft-green" },
  { name: "Soft Green", shade: "200", hex: "#68C17D", group: "soft-green" },
  { name: "Soft Green", shade: "300", hex: "#3EB058", group: "soft-green" },
  { name: "Soft Green", shade: "400", hex: "#28A745", group: "soft-green" },
  { name: "Soft Green", shade: "500", hex: "#208637", group: "soft-green" },
  { name: "Soft Green", shade: "600", hex: "#1A6D2D", group: "soft-green" },
  { name: "Soft Green", shade: "700", hex: "#145322", group: "soft-green" },
  { name: "Soft Green", shade: "800", hex: "#0C3215", group: "soft-green" },
  { name: "Soft Green", shade: "900", hex: "#06190A", group: "soft-green" },
  
  // Soft Red
  { name: "Soft Red", shade: "50", hex: "#FAE1E3", group: "soft-red" },
  { name: "Soft Red", shade: "75", hex: "#F6CDD1", group: "soft-red" },
  { name: "Soft Red", shade: "100", hex: "#F1AEB5", group: "soft-red" },
  { name: "Soft Red", shade: "200", hex: "#E7727D", group: "soft-red" },
  { name: "Soft Red", shade: "300", hex: "#E04958", group: "soft-red" },
  { name: "Soft Red", shade: "400", hex: "#DC3545", group: "soft-red" },
  { name: "Soft Red", shade: "500", hex: "#B02A37", group: "soft-red" },
  { name: "Soft Red", shade: "600", hex: "#8F222D", group: "soft-red" },
  { name: "Soft Red", shade: "700", hex: "#6E1A22", group: "soft-red" },
  { name: "Soft Red", shade: "800", hex: "#421015", group: "soft-red" },
  { name: "Soft Red", shade: "900", hex: "#21080A", group: "soft-red" },
  
  // Neutral White
  { name: "Neutral White", shade: "50", hex: "#F8F9FA", group: "neutral-white" },
  { name: "Neutral White", shade: "75", hex: "#F0F0F1", group: "neutral-white" },
  { name: "Neutral White", shade: "100", hex: "#D9D9D9", group: "neutral-white" },
  { name: "Neutral White", shade: "200", hex: "#CCCCCC", group: "neutral-white" },
  
  // Neutral Black
  { name: "Neutral Black", shade: "300", hex: "#CCCCCC", group: "neutral-black" },
  { name: "Neutral Black", shade: "400", hex: "#B3B3B3", group: "neutral-black" },
  { name: "Neutral Black", shade: "500", hex: "#999999", group: "neutral-black" },
  
  // Dark Cornflower Blue
  { name: "Dark Cornflower Blue", shade: "25", hex: "#F6F7FA", group: "dark-cornflower-blue" },
  { name: "Dark Cornflower Blue", shade: "50", hex: "#DCE2ED", group: "dark-cornflower-blue" },
  { name: "Dark Cornflower Blue", shade: "75", hex: "#C5CFE1", group: "dark-cornflower-blue" },
  { name: "Dark Cornflower Blue", shade: "100", hex: "#A2B2CF", group: "dark-cornflower-blue" },
  { name: "Dark Cornflower Blue", shade: "200", hex: "#5D78AB", group: "dark-cornflower-blue" },
  { name: "Dark Cornflower Blue", shade: "300", hex: "#2E5193", group: "dark-cornflower-blue" },
  { name: "Dark Cornflower Blue", shade: "400", hex: "#173EB7", group: "dark-cornflower-blue" },
  { name: "Dark Cornflower Blue", shade: "500", hex: "#0E2856", group: "dark-cornflower-blue" },
  { name: "Dark Cornflower Blue", shade: "600", hex: "#0F2858", group: "dark-cornflower-blue" },
  { name: "Dark Cornflower Blue", shade: "700", hex: "#0B1F43", group: "dark-cornflower-blue" },
  { name: "Dark Cornflower Blue", shade: "800", hex: "#071329", group: "dark-cornflower-blue" },
  
  // Steel Gray
  { name: "Steel Gray", shade: "25", hex: "#F8F8F9", group: "steel-gray" },
  { name: "Steel Gray", shade: "50", hex: "#E4E5E8", group: "steel-gray" },
  { name: "Steel Gray", shade: "75", hex: "#DBBDD0", group: "steel-gray" },
  { name: "Steel Gray", shade: "100", hex: "#C0C3C8", group: "steel-gray" },
  { name: "Steel Gray", shade: "200", hex: "#9CA1A9", group: "steel-gray" },
  { name: "Steel Gray", shade: "300", hex: "#666E7A", group: "steel-gray" },
  { name: "Steel Gray", shade: "400", hex: "#4B5563", group: "steel-gray" },
  { name: "Steel Gray", shade: "500", hex: "#404B54", group: "steel-gray" },
  { name: "Steel Gray", shade: "600", hex: "#343C45", group: "steel-gray" },
  { name: "Steel Gray", shade: "700", hex: "#252A31", group: "steel-gray" },
  { name: "Steel Gray", shade: "800", hex: "#161A1E", group: "steel-gray" },
  
  // Black and White
  { name: "Black", shade: "400", hex: "#010611", group: "black" },
  { name: "White", shade: "400", hex: "#FFFFFF", group: "white" },
];

export const colorGroups = [...new Set(designSystemColors.map(color => color.group))];
