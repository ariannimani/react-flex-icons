export const sizeMap = {
  "extra-extra-small": 12, // XXS
  "extra-small": 16, // XS
  small: 20, // S
  medium: 24, // M
  large: 32, // L
  "extra-large": 40, // XL
  "double-extra-large": 48, // XXL
  "triple-extra-large": 56, // XXXL
  huge: 64, // Huge
  gigantic: 72, // Gigantic
  massive: 80, // Massive
  colossal: 88, // Colossal
  enormous: 96, // Enormous
} as const;

export const colorMap = {
  black: "#231f20",
  white: "#ffffff",
  red: "#fe4c4a",
  green: "#71cf48",
  blue: "#1264a3",
  gray: "#acacac",
  yellow: "#f9da53",
  inherit: "inherit",
} as const;
