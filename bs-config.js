module.exports = {
  server: true,
  files: ["*.html", "*.css", "*.js"],
  notify: false, // Disable the "BrowserSync connected" notification
};

// dependancies: npm and browserSync
// I used browserSync to watch for specified file types in the working directory and reflect the changes in browsers. 
// I used this package as it is easy to use with NeoVim - and since I'm a NeoVim enthusiast.
// to start the server run: npm run br-server
