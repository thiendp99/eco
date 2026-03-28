/*eslint-disable @typescript-eslint/no-var-requires:*/
/*eslint-env node */

const fs = require('fs');
const path = require('path');

const removeDir = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Deleted directory: ${dirPath}`);
    } catch (err) {
      console.error(`❌ Error deleting ${dirPath}: ${err.message}`);
    }
  }
};

const removeFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Deleted file: ${filePath}`);
    } catch (err) {
      console.error(`❌ Error deleting ${filePath}: ${err.message}`);
    }
  }
};

const rootDir = path.resolve(__dirname, '.');

console.log('/ ✨ Cleaning project...');

//-1. Delete node_modules at root
removeDir(path.join(rootDir, 'node_modules'));

//-2. Cleanup packages
const packagesDir = path.join(rootDir, 'packages');
if (fs.existsSync(packagesDir)) {
  const packages = fs.readdirSync(packagesDir);

  packages.forEach((pkg) => {
    const pkgPath = path.join(packagesDir, pkg);
    if (fs.lstatSync(pkgPath).isDirectory()) {
      // Xóa dist, node_modules, .turbo
      removeDir(path.join(pkgPath, 'dist'));
      removeDir(path.join(pkgPath, 'node_modules'));
      removeDir(path.join(pkgPath, '.turbo'));

      //- QUAN TRỌNG: Xóa file cache build của Typescript
      removeFile(path.join(pkgPath, 'tsconfig.tsbuildinfo'));
    }
  });
}

console.log('✨ Clean completed!');
