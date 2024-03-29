export function validateAsciiDocTable(fileContent) {
    // Split the content into lines
    const lines = fileContent.split('\n');
  
    // Find the table header line and determine the number of columns
    const headerRegex = /^\|===.*$/;
    const cellRegex = /(\*\w+|a\|\w+)/g; // Modify as needed to accurately capture your cell contents
    let expectedColumns = 0;
    let inTable = false;
  
    for (const line of lines) {
      // Start of table
      if (headerRegex.test(line)) {
        inTable = true;
        continue;
      }

      // End of table
      if (inTable && line.trim() === '|===') {
        break;
      }

      if (inTable && expectedColumns === 0) {
        // Assuming the first row after table header starts defines the columns
        const matches = line.match(cellRegex) || [];
        expectedColumns = matches.length;
      } else if (inTable) {
        // Validate each row after the header has been found
        const matches = line.match(cellRegex) || [];
        if (matches.length !== expectedColumns) {
          return false; // Invalid table structure
        }
      }
    }
  
    return true; // Valid table structure
  }
  