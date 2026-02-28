#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 FitnessGuide Deployment Script');
console.log('==================================\n');

// Check if dist folder exists
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.log('❌ Build folder not found. Please run "npm run build" first.');
  process.exit(1);
}

console.log('✅ Build folder found');
console.log('📁 Contents ready for deployment:');
console.log('   - Upload the contents of the "dist" folder to your Hostinger public_html directory');
console.log('   - Make sure to include the .htaccess file for proper routing');
console.log('\n📋 Deployment Checklist:');
console.log('   □ Build the project: npm run build');
console.log('   □ Upload dist/ contents to Hostinger');
console.log('   □ Upload .htaccess file');
console.log('   □ Test the website on your domain');
console.log('   □ Verify all pages load correctly');
console.log('   □ Test mobile responsiveness');
console.log('   □ Check contact form functionality');
console.log('   □ Test authentication flow');

console.log('\n🎉 Ready for deployment!');
console.log('For support, visit: https://github.com/your-repo/fitness-guide');

