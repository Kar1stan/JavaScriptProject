const electron = require("electron");
const path = require("path");
const createWindow = () => {
    const win = new electron.BrowserWindow({
        title:"15 JavaScript/Python channels",
        height: 600,
        width: 800,
        show:false,
    });
    win.on("ready-to-show", () => {
        win.show();
    });
    win.loadFile(path.join(__dirname ,'./Sourse/JsYoutube'));
};
electron.app.on('ready', createWindow);