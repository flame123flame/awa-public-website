const fs = require('fs');
const path = require('path');

/**
 * Copy WEB-INF folder to dist directory after build
 * Works on Windows, macOS, and Linux without additional dependencies
 */
function copyWebInf() {
  const sourceDir = path.join(process.cwd(), 'WEB-INF');
  const targetDir = path.join(
    process.cwd(),
    'dist',
    'awa-public-website',
    'WEB-INF'
  );

  console.log('🔄 Starting WEB-INF copy process...');

  // Check if source directory exists
  if (!fs.existsSync(sourceDir)) {
    console.log('⚠️  WEB-INF directory not found at:', sourceDir);
    console.log('   Skipping copy process...');
    return;
  }

  // Check if dist directory exists
  const distDir = path.join(
    process.cwd(),
    'dist',
    'awa-public-website'
  );
  if (!fs.existsSync(distDir)) {
    console.log('⚠️  Build output directory not found at:', distDir);
    console.log('   Please run build first!');
    process.exit(1);
  }

  try {
    // Remove existing WEB-INF if it exists
    if (fs.existsSync(targetDir)) {
      console.log('🗑️  Removing existing WEB-INF...');
      removeDirectorySync(targetDir);
    }

    // Copy directory recursively
    console.log('📁 Copying WEB-INF...');
    copyDirectorySync(sourceDir, targetDir);

    console.log('✅ WEB-INF copied successfully!');
    console.log(`   📂 From: ${sourceDir}`);
    console.log(`   📂 To:   ${targetDir}`);

    // Show copied files count
    const fileCount = countFiles(targetDir);
    console.log(`   📄 Files copied: ${fileCount}`);
  } catch (error) {
    console.error('❌ Error copying WEB-INF:', error.message);
    process.exit(1);
  }
}

/**
 * Recursively copy directory
 */
function copyDirectorySync(src, dest) {
  // Create destination directory
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read source directory
  const items = fs.readdirSync(src);

  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      // Recursively copy subdirectory
      copyDirectorySync(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

/**
 * Recursively remove directory
 */
function removeDirectorySync(dir) {
  if (fs.existsSync(dir)) {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        removeDirectorySync(itemPath);
      } else {
        fs.unlinkSync(itemPath);
      }
    });

    fs.rmdirSync(dir);
  }
}

/**
 * Count files in directory recursively
 */
function countFiles(dir) {
  let count = 0;
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      count += countFiles(itemPath);
    } else {
      count++;
    }
  });

  return count;
}

// Run the copy function
copyWebInf();
