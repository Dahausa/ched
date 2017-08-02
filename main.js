// ./main.js

/**
 * Main class as entry point for electron
 */

const {app, BrowserWindow} = require('electron')

const path = require('path');
const url = require('url');

require('dotenv').config();

require('electron-reload')(__dirname);

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});

  // Specify entry point
  // If we have a packaged application do not listen to a specified url, take a local file
  if (process.env.PACKAGE === 'true'){
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    //else load app-content via an url
    win.loadURL(process.env.HOST);
    win.webContents.openDevTools();
  }

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
