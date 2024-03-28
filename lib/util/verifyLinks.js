import fs from 'fs';
import path from 'path';

export  function verifyLinks(asciiDocFiles, directoryPath) {
    asciiDocFiles.map(async (filePath) => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const links = await extractLinksFromDocument(fileContent);
        links.map(async (link) => {
            const linkExists = verifyLinkInFilesystem(link.url, directoryPath);
            if (!linkExists) {
                const fileName = path.basename(filePath);

                
                
                const terminalWidth = process.stdout.columns;
                const headerText = " FILE DOES NOT EXIST ";
                const headerPadding = Math.floor((terminalWidth - headerText.length) / 2);

                console.log(headerText.bgGrey.black.padStart(headerPadding + headerText.length, '=').padEnd(terminalWidth, '='));
                console.log("In directory:".underline.cyan, directoryPath.blue);
                console.log("File name:".underline.cyan, fileName.bgBlue.white);
                console.log("Line number:".underline.cyan, String(link.lineNumber).yellow.black);
                console.log("Link defined as:".underline.cyan, link.url.italic);
                console.log("Closest valid file:".underline.cyan, "todo".bgMagenta.white);
            }
        });
    });   
}

function extractLinksFromDocument(fileContent) {
    const lines = fileContent.split('\n');
    const regex = /(?:^\s*|\|\s*)link:(?!https?:\/\/)(.+?)\[(.+?)\]/g;
    const links = [];
  
    lines.forEach((line, index) => {
      let match;
      while ((match = regex.exec(line)) !== null) {
        links.push({ lineNumber: index + 1, url: match[1], text: match[2] });
      }
    });
  
    return links;
}
  

function verifyLinkInFilesystem(link, directoryPath) {
    const filePath = path.resolve(directoryPath, link);
    return fs.existsSync(filePath);
}