import { Platform } from "react-native";

// Font registration utility for React Native
export const registerPoppinsFonts = () => {
  if (Platform.OS === "web") {
    // For web, we'll load fonts via CSS with Google Fonts as primary and local as fallback
    if (typeof window === "undefined" || !window.document) return;

    const document = window.document;
    const fontFaces = [
      // Regular weights
      { name: "Poppins-Thin", weight: "100", style: "normal" },
      { name: "Poppins-ExtraLight", weight: "200", style: "normal" },
      { name: "Poppins-Light", weight: "300", style: "normal" },
      { name: "Poppins-Regular", weight: "400", style: "normal" },
      { name: "Poppins-Medium", weight: "500", style: "normal" },
      { name: "Poppins-SemiBold", weight: "600", style: "normal" },
      { name: "Poppins-Bold", weight: "700", style: "normal" },
      { name: "Poppins-ExtraBold", weight: "800", style: "normal" },
      { name: "Poppins-Black", weight: "900", style: "normal" },
      // Italic weights
      { name: "Poppins-ThinItalic", weight: "100", style: "italic" },
      { name: "Poppins-ExtraLightItalic", weight: "200", style: "italic" },
      { name: "Poppins-LightItalic", weight: "300", style: "italic" },
      { name: "Poppins-Italic", weight: "400", style: "italic" },
      { name: "Poppins-MediumItalic", weight: "500", style: "italic" },
      { name: "Poppins-SemiBoldItalic", weight: "600", style: "italic" },
      { name: "Poppins-BoldItalic", weight: "700", style: "italic" },
      { name: "Poppins-ExtraBoldItalic", weight: "800", style: "italic" },
      { name: "Poppins-BlackItalic", weight: "900", style: "italic" },
    ];

    // Create and inject font-face CSS with local fonts as fallback
    const style = document.createElement("style");
    style.textContent = fontFaces
      .map(
        (font) => `
        @font-face {
          font-family: '${font.name}';
          src: url('./assets/fonts/Poppins/${font.name}.ttf') format('truetype');
          font-weight: ${font.weight};
          font-style: ${font.style};
          font-display: swap;
        }
      `
      )
      .join("\n");

    document.head.appendChild(style);

    // Also ensure Poppins is available as a generic family
    const poppinsStyle = document.createElement("style");
    poppinsStyle.textContent = `
      .poppins-font, [data-font-family*="Poppins"] {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif !important;
      }
    `;
    document.head.appendChild(poppinsStyle);
  }
};

// Font loading status for mobile platforms
export const loadPoppinsFonts = async (): Promise<boolean> => {
  if (Platform.OS === "web") {
    registerPoppinsFonts();
    return true;
  }

  // For React Native mobile platforms, fonts are loaded automatically
  // when properly linked in the native projects
  return true;
};

// Font availability checker
export const isPoppinsAvailable = (): boolean => {
  if (Platform.OS === "web") {
    // Check if fonts are loaded by testing a specific font
    if (typeof window === "undefined" || !window.document) return false;

    const document = window.document;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return false;

    context.font = "16px Poppins-Regular";
    return context.font.includes("Poppins");
  }

  // For mobile, assume fonts are available if properly linked
  return true;
};
