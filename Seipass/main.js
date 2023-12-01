const { app, BrowserWindow } = require('electron');

function creatWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(creatWindow);

app.on('window-all-closed', () => {
    if (process.platforme !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        creatWindow();
    }
});