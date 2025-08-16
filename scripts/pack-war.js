const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

/**
 * Pack WAR file after build completion
 */
async function packWar() {
  const distPath = path.join(process.cwd(), 'dist', 'awa-public-website');
  const warDir = path.join(process.cwd(), 'dist', 'application-war');
  
  // Determine WAR filename based on environment
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const lastScript = process.env.npm_lifecycle_event || '';
  
  let warFileName = 'awa-public-website.war';
  
  // Check if it's production build
  if (lastScript.includes('prod') || lastScript.includes('production')) {
    warFileName = 'ROOT.war';
    console.log('🎯 Production build detected - creating ROOT.war');
  } else {
    console.log('🎯 Development build detected - creating awa-public-website.war');
  }
  
  const warFilePath = path.join(warDir, warFileName);

  // Check if dist directory exists
  if (!fs.existsSync(distPath)) {
    console.log('❌ Build output directory not found!');
    console.log(`   Expected: ${distPath}`);
    console.log('   Please run build first!');
    return;
  }

  // Show current dist contents
  console.log('\n📦 Build completed successfully!');
  console.log(`📁 Build output: ${distPath}`);
  
  try {
    const files = fs.readdirSync(distPath);
    console.log(`📄 Files count: ${files.length}`);
  } catch (error) {
    console.log('⚠️  Could not read build directory');
  }

  // Prompt user for WAR packaging
  const answer = await promptUser('\n🤔 Do you want to pack WAR file? (y/N): ');
  
  if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
    console.log('\n🚀 Packing WAR file...');
    
    try {
      // Create application-war directory if it doesn't exist
      if (!fs.existsSync(warDir)) {
        console.log('📁 Creating application-war directory...');
        fs.mkdirSync(warDir, { recursive: true });
      }

      // Remove existing WAR file if exists
      if (fs.existsSync(warFilePath)) {
        console.log('🗑️  Removing existing WAR file...');
        fs.unlinkSync(warFilePath);
      }

      // Store original directory
      const originalDir = process.cwd();
      
      // Change to dist directory and create WAR
      process.chdir(distPath);
      
      console.log('📦 Creating WAR file...');
      console.log(`🎯 Target: ${warFilePath}`);
      
      execSync(`jar -cvf "${warFilePath}" *`, { stdio: 'pipe' });
      
      // Go back to original directory
      process.chdir(originalDir);
      
      // Check if WAR file was created successfully
      if (fs.existsSync(warFilePath)) {
        const stats = fs.statSync(warFilePath);
        const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        
        console.log('✅ WAR file created successfully!');
        console.log(`📁 Directory: ${warDir}`);
        console.log(`📁 Location: ${warFilePath}`);
        console.log(`📏 Size: ${fileSizeMB} MB`);
        console.log(`🏷️  File: ${warFileName}`);
        
        if (warFileName === 'ROOT.war') {
          console.log('🚀 Production WAR ready for Tomcat deployment!');
          console.log('💡 Deploy to Tomcat webapps/ directory');
        } else {
          console.log('🧪 Development WAR ready for testing!');
        }
        
        // Additional verification
        console.log('\n🔍 Verification:');
        console.log(`   📂 ls -la ${path.relative(process.cwd(), warDir)}/`);
        try {
          const lsOutput = execSync(`ls -la "${warDir}"`, { encoding: 'utf8' });
          console.log(`${lsOutput}`);
        } catch (e) {
          console.log(`   Directory listing failed: ${e.message}`);
        }
        
        console.log(`\n💡 WAR file ready for deployment!`);
        console.log(`   📋 Path: dist/application-war/${warFileName}`);
        
      } else {
        console.log('❌ WAR file creation failed!');
        console.log(`   Expected location: ${warFilePath}`);
        
        // List files in war directory to debug
        console.log('\n🔍 Files in application-war directory:');
        try {
          if (fs.existsSync(warDir)) {
            const files = fs.readdirSync(warDir);
            if (files.length === 0) {
              console.log('   📂 Directory is empty');
            } else {
              files.forEach(file => {
                console.log(`   📄 ${file}`);
              });
            }
          } else {
            console.log('   📂 Directory does not exist');
          }
        } catch (e) {
          console.log(`   Could not list files: ${e.message}`);
        }
      }
      
    } catch (error) {
      console.error('❌ Error creating WAR file:', error.message);
      
      if (error.message.includes('jar')) {
        console.log('\n💡 Make sure Java JDK is installed and jar command is available');
        console.log('   You can install Java JDK from: https://openjdk.org/');
      }
    }
  } else {
    console.log('⏭️  WAR packaging skipped.');
  }
}

/**
 * Prompt user for input
 */
function promptUser(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

// Run the pack function
packWar().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});