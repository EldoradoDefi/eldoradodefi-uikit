import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#7D6A2E",
  primaryBright: "#625425",
  primaryDark: "#625425",
  secondary: "#625425",
  success: "#e1aff7",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F2E9C7",
  backgroundDisabled: "#7D6A2E",
  contrast: "#FFFFFF",
  invertedContrast: "#625425",
  input: "#F2E9C7",
  tertiary: "#625425",
  text: "#625425",
  textDisabled: "#D9BA53",
  textSubtle: "#B29742",
  borderColor: "#B29742",
  card: "#E5D6A8",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #F2E9C7 0%, #B29742 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#B29742",
  background: "#F2E9C7",
  backgroundDisabled: "#B29742",
  contrast: "#FFFFFF",
  invertedContrast: "#625425",
  input: "#F2E9C7",
  primaryDark: "#D8B953",
  tertiary: "#625425",
  text: "#625425",
  textDisabled: "#D9BA53",
  textSubtle: "#B29742",
  borderColor: "#B29742",
  card: "#E5D6A8",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #F2E9C7 0%, #B29742 100%)",
  },
};

