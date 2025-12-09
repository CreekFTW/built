export const colors = {
  // Primary brand colors
  primary: "#3B82F6", // Blue
  primaryDark: "#2563EB",
  primaryLight: "#60A5FA",

  // Neutral/Grey palette for tech aesthetic
  neutral: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0A0A0A",
  },

  // Accent colors
  accent: {
    blue: "#3B82F6",
    cyan: "#06B6D4",
    teal: "#14B8A6",
    green: "#10B981",
    purple: "#8B5CF6",
    pink: "#EC4899",
  },

  // Semantic colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",

  // Background colors (dark theme)
  background: {
    primary: "#0A0A0A",
    secondary: "#171717",
    tertiary: "#262626",
    elevated: "#404040",
  },

  // Text colors (dark theme)
  text: {
    primary: "#FAFAFA",
    secondary: "#D4D4D4",
    tertiary: "#A3A3A3",
    muted: "#737373",
  },

  // Border colors
  border: {
    default: "rgba(255, 255, 255, 0.1)",
    subtle: "rgba(255, 255, 255, 0.05)",
    emphasis: "rgba(255, 255, 255, 0.2)",
  }
} as const;

export type Colors = typeof colors;
