import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

export const getAppsListing = () => new Promise((resolve, reject) => {
  const listingPath = path.join(process.cwd(), 'config', 'apps');

  readdir(listingPath)
    .then(files => {
      const allFiles = files.map(fileName => {
        const id = fileName.replace(/\.json$/, '')
    
        const fullPath = path.join(listingPath, fileName)
        
        return readFile(fullPath, { encoding: 'utf8' })
          .then(fileContents => ({ id, fileContents: JSON.parse(fileContents) }))
      })

      return Promise.all(allFiles);
    })
    .then(combined => {
      const categories = combined.find(c => c.id === 'categories').fileContents;

      const appsListing = combined.filter(c => c.id !== 'categories').reduce((memo, c) => {
        return { ...memo, [c.id]: c.fileContents };
      }, {});

      resolve({ categories, appsListing })
    })
    .catch(reject)
})