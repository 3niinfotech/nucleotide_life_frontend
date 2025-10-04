#!/usr/bin/env node

/**
 * Script to automatically update React Native components to use responsive fonts
 * This script scans for fontSize and fontWeight usage and suggests replacements
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const SRC_DIR = 'src';
const EXCLUDE_PATTERNS = [
  '**/node_modules/**',
  '**/dist/**',
  '**/*.test.*',
  '**/*.spec.*',
  '**/utils/fonts.ts',
  '**/utils/responsiveFonts.ts',
  '**/hooks/useFonts.ts',
  '**/ResponsiveFontDemo.tsx',
  '**/FontExample.tsx',
  '**/*.md'
];

// Font size mappings for common patterns
const FONT_SIZE_MAPPINGS = {
  // Headings
  48: { weight: 'semiBold', description: 'H1 - Hero titles' },
  36: { weight: 'bold', description: 'H2 - Section titles' },
  30: { weight: 'semiBold', description: 'H3 - Card titles' },
  24: { weight: 'semiBold', description: 'H4 - Subsection titles' },
  20: { weight: 'medium', description: 'H5 - Small headings' },
  18: { weight: 'medium', description: 'H6 - Small headings' },
  
  // Body text
  16: { weight: 'regular', description: 'Body text' },
  14: { weight: 'regular', description: 'Small body text' },
  12: { weight: 'regular', description: 'Caption text' },
  10: { weight: 'regular', description: 'Very small text' },
  
  // UI elements
  15: { weight: 'medium', description: 'Button text' },
  13: { weight: 'medium', description: 'Label text' },
};

// Font weight mappings
const FONT_WEIGHT_MAPPINGS = {
  '100': 'thin',
  '200': 'extraLight',
  '300': 'light',
  '400': 'regular',
  '500': 'medium',
  '600': 'semiBold',
  '700': 'bold',
  '800': 'extraBold',
  '900': 'black',
  'normal': 'regular',
  'bold': 'bold',
};

function findFiles() {
  const pattern = `${SRC_DIR}/**/*.{ts,tsx}`;
  return glob.sync(pattern, { ignore: EXCLUDE_PATTERNS });
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const issues = [];
  
  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    
    // Check for fontSize patterns
    const fontSizeMatch = line.match(/fontSize:\s*(\d+)/);
    if (fontSizeMatch) {
      const fontSize = parseInt(fontSizeMatch[1]);
      const mapping = FONT_SIZE_MAPPINGS[fontSize];
      issues.push({
        type: 'fontSize',
        line: lineNumber,
        content: line.trim(),
        fontSize,
        suggestion: mapping ? `getResponsiveStyle("${mapping.weight}", ${fontSize})` : `getResponsiveStyle("regular", ${fontSize})`,
        description: mapping ? mapping.description : 'Custom font size'
      });
    }
    
    // Check for fontWeight patterns
    const fontWeightMatch = line.match(/fontWeight:\s*['"`]?(\w+)['"`]?/);
    if (fontWeightMatch) {
      const fontWeight = fontWeightMatch[1];
      const mapping = FONT_WEIGHT_MAPPINGS[fontWeight];
      issues.push({
        type: 'fontWeight',
        line: lineNumber,
        content: line.trim(),
        fontWeight,
        suggestion: mapping ? `getResponsiveStyle("${mapping}")` : `getResponsiveStyle("regular")`,
        description: 'Font weight'
      });
    }
    
    // Check for fontFamily patterns
    const fontFamilyMatch = line.match(/fontFamily:\s*poppinsWeights\.(\w+)/);
    if (fontFamilyMatch) {
      const fontFamily = fontFamilyMatch[1];
      issues.push({
        type: 'fontFamily',
        line: lineNumber,
        content: line.trim(),
        fontFamily,
        suggestion: `getResponsiveStyle("${fontFamily}")`,
        description: 'Font family'
      });
    }
  });
  
  return issues;
}

function generateReport() {
  console.log('🔍 Scanning for font usage patterns...\n');
  
  const files = findFiles();
  const allIssues = [];
  
  files.forEach(file => {
    const issues = analyzeFile(file);
    if (issues.length > 0) {
      allIssues.push({ file, issues });
    }
  });
  
  console.log(`📊 Found ${allIssues.length} files with font usage patterns:\n`);
  
  allIssues.forEach(({ file, issues }) => {
    console.log(`📁 ${file}`);
    console.log(`   Found ${issues.length} font usage patterns:`);
    
    issues.forEach(issue => {
      console.log(`   Line ${issue.line}: ${issue.type}`);
      console.log(`   Current: ${issue.content}`);
      console.log(`   Suggested: ${issue.suggestion}`);
      console.log(`   Description: ${issue.description}\n`);
    });
  });
  
  // Generate summary
  const totalIssues = allIssues.reduce((sum, { issues }) => sum + issues.length, 0);
  console.log(`\n📈 Summary:`);
  console.log(`   Files scanned: ${files.length}`);
  console.log(`   Files with issues: ${allIssues.length}`);
  console.log(`   Total issues: ${totalIssues}`);
  
  // Generate migration guide
  console.log(`\n📝 Migration Guide:`);
  console.log(`   1. Import useResponsiveFontUtils hook:`);
  console.log(`      import { useResponsiveFontUtils } from '../../hooks';`);
  console.log(`   2. Add hook to component:`);
  console.log(`      const { getResponsiveStyle } = useResponsiveFontUtils();`);
  console.log(`   3. Replace fontSize/fontWeight with responsive styles:`);
  console.log(`      style={[styles.text, getResponsiveStyle("regular", 16)]}`);
  console.log(`   4. Remove fontSize and fontFamily from StyleSheet`);
  
  return allIssues;
}

function generateMigrationScript(issues) {
  const script = `
// Auto-generated migration script
// Run this to automatically update files with responsive fonts

const fs = require('fs');
const path = require('path');

const filesToUpdate = ${JSON.stringify(issues, null, 2)};

function updateFile(filePath, issues) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add import if not present
  if (!content.includes('useResponsiveFontUtils')) {
    const importMatch = content.match(/import.*from ['"][^'"]+['"];?\s*\n/);
    if (importMatch) {
      const importLine = importMatch[0];
      const newImport = importLine.replace(
        /from ['"][^'"]+['"];?/,
        "from '../../hooks';\nimport { useResponsiveFontUtils } from '../../hooks';"
      );
      content = content.replace(importLine, newImport);
    }
  }
  
  // Add hook usage
  if (!content.includes('getResponsiveStyle')) {
    const componentMatch = content.match(/(const|function)\\s+\\w+\\s*[=:]\\s*\\([^)]*\\)\\s*=>\\s*{/);
    if (componentMatch) {
      const hookLine = '  const { getResponsiveStyle } = useResponsiveFontUtils();\n';
      content = content.replace(componentMatch[0], componentMatch[0] + hookLine);
    }
  }
  
  // Update styles
  issues.forEach(issue => {
    if (issue.type === 'fontSize') {
      // Remove fontSize from styles
      const fontSizePattern = new RegExp('fontSize:\\s*' + issue.fontSize + ',?\\s*', 'g');
      content = content.replace(fontSizePattern, '');
    }
    if (issue.type === 'fontWeight') {
      // Remove fontWeight from styles
      const fontWeightPattern = new RegExp('fontWeight:\\s*[\'"`]?' + issue.fontWeight + '[\'"`]?,?\\s*', 'g');
      content = content.replace(fontWeightPattern, '');
    }
    if (issue.type === 'fontFamily') {
      // Remove fontFamily from styles
      const fontFamilyPattern = new RegExp('fontFamily:\\s*poppinsWeights\\.' + issue.fontFamily + ',?\\s*', 'g');
      content = content.replace(fontFamilyPattern, '');
    }
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

// Run updates
filesToUpdate.forEach(({ file, issues }) => {
  try {
    updateFile(file, issues);
  } catch (error) {
    console.error(`Error updating ${file}:`, error.message);
  }
});

console.log('Migration completed!');
`;

  fs.writeFileSync('migrate-fonts.js', script);
  console.log('\n💾 Generated migration script: migrate-fonts.js');
  console.log('   Run: node migrate-fonts.js');
}

// Main execution
if (require.main === module) {
  const issues = generateReport();
  generateMigrationScript(issues);
}

module.exports = { generateReport, generateMigrationScript };
