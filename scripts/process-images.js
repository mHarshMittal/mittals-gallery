const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, '../public/temp-uploads');
const targetDir = path.join(__dirname, '../public/products');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Process images
async function processImages() {
  try {
    const files = fs.readdirSync(sourceDir);
    let counter = 1;
    
    for (const file of files) {
      if (file.endsWith('.webp')) {
        const sourcePath = path.join(sourceDir, file);
        const newFileName = `product-${counter}.jpg`;
        const targetPath = path.join(targetDir, newFileName);
        
        // Convert and optimize image
        await sharp(sourcePath)
          .resize(800, 800, {
            fit: 'cover',
            position: 'center'
          })
          .jpeg({ quality: 80 })
          .toFile(targetPath);
          
        counter++;
        console.log(`Processed: ${file} -> ${newFileName}`);
      }
    }
    
    console.log(`Image processing completed! Processed ${counter - 1} images.`);
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages(); 