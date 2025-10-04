#!/usr/bin/env node

/**
 * Simple script to analyze font usage patterns in React Native components
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Configuration
const SRC_DIR = "src";
const EXCLUDE_PATTERNS = [
  "**/node_modules/**",
  "**/dist/**",
  "**/*.test.*",
  "**/*.spec.*",
  "**/utils/fonts.ts",
  "**/utils/responsiveFonts.ts",
  "**/hooks/useFonts.ts",
  "**/ResponsiveFontDemo.tsx",
  "**/FontExample.tsx",
  "**/*.md",
];

function findFiles() {
  const pattern = `${SRC_DIR}/**/*.{ts,tsx}`;
  return glob.sync(pattern, { ignore: EXCLUDE_PATTERNS });
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  const issues = [];

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    // Check for fontSize patterns
    if (line.includes("fontSize:")) {
      const fontSizeMatch = line.match(/fontSize:\s*(\d+)/);
      if (fontSizeMatch) {
        const fontSize = parseInt(fontSizeMatch[1]);
        issues.push({
          type: "fontSize",
          line: lineNumber,
          content: line.trim(),
          fontSize,
          suggestion: `getResponsiveStyle("regular", ${fontSize})`,
        });
      }
    }

    // Check for fontWeight patterns
    if (line.includes("fontWeight:")) {
      const fontWeightMatch = line.match(/fontWeight:\s*['"`]?(\w+)['"`]?/);
      if (fontWeightMatch) {
        const fontWeight = fontWeightMatch[1];
        issues.push({
          type: "fontWeight",
          line: lineNumber,
          content: line.trim(),
          fontWeight,
          suggestion: `getResponsiveStyle("${fontWeight}")`,
        });
      }
    }

    // Check for fontFamily patterns
    if (line.includes("fontFamily:") && line.includes("poppinsWeights")) {
      const fontFamilyMatch = line.match(/fontFamily:\s*poppinsWeights\.(\w+)/);
      if (fontFamilyMatch) {
        const fontFamily = fontFamilyMatch[1];
        issues.push({
          type: "fontFamily",
          line: lineNumber,
          content: line.trim(),
          fontFamily,
          suggestion: `getResponsiveStyle("${fontFamily}")`,
        });
      }
    }
  });

  return issues;
}

function generateReport() {
  console.log("🔍 Scanning for font usage patterns...\n");

  const files = findFiles();
  const allIssues = [];

  files.forEach((file) => {
    const issues = analyzeFile(file);
    if (issues.length > 0) {
      allIssues.push({ file, issues });
    }
  });

  console.log(`📊 Found ${allIssues.length} files with font usage patterns:\n`);

  allIssues.forEach(({ file, issues }) => {
    console.log(`📁 ${file}`);
    console.log(`   Found ${issues.length} font usage patterns:`);

    issues.forEach((issue) => {
      console.log(`   Line ${issue.line}: ${issue.type}`);
      console.log(`   Current: ${issue.content}`);
      console.log(`   Suggested: ${issue.suggestion}\n`);
    });
  });

  // Generate summary
  const totalIssues = allIssues.reduce(
    (sum, { issues }) => sum + issues.length,
    0
  );
  console.log(`\n📈 Summary:`);
  console.log(`   Files scanned: ${files.length}`);
  console.log(`   Files with issues: ${allIssues.length}`);
  console.log(`   Total issues: ${totalIssues}`);

  return allIssues;
}

// Main execution
if (require.main === module) {
  generateReport();
}

module.exports = { generateReport };
