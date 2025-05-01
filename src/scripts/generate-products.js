const fs = require('fs');
const path = require('path');

const productsDir = path.join(process.cwd(), 'public', 'products');
const outputFile = path.join(process.cwd(), 'src', 'data', 'products.js');

try {
  // Read all files in the products directory
  const files = fs.readdirSync(productsDir)
    .filter(file => file.startsWith('product-') && file.endsWith('.jpg'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
    });

  // Generate product data
  const products = files.map(file => {
    const id = file.match(/\d+/)[0];
    return {
      id,
      image: `/products/${file}`,
      category: 'all' // You can add categories later
    };
  });

  // Create the output directory if it doesn't exist
  if (!fs.existsSync(path.dirname(outputFile))) {
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  }

  // Write the products data to a file
  fs.writeFileSync(
    outputFile,
    `export const products = ${JSON.stringify(products, null, 2)};`
  );

  console.log(`Generated product data for ${products.length} products`);
} catch (error) {
  console.error('Error generating product data:', error);
  process.exit(1);
} 