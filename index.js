const fs = require('fs');
  
fs.readdir('.', (err, filenames) => {
  // EITHER
  // err === an error object, wich means something went wrong 
  // OR
  // err === null, wich means everything is OK

  if (err) {
    // error handling code here
    console.log(err);
  }

  console.log(filenames);
});