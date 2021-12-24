const {app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences:{}
  });

  win.loadURL("http://localhost:3000")
  win.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if(process.platform !== 'darwin'){
    app.quit()
  }
})

app.on('activate', function () {
  if(BrowserWindow.getAllWindows().length===0) createWindow();
})


