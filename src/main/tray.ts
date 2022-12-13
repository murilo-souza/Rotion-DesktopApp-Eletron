import {app, BrowserWindow, Menu, nativeImage, Tray} from "electron";
import path from "node:path";

export function createTray(window: BrowserWindow) {
  const tray = new Tray(path.resolve(__dirname, "rotionTemplate.png"));

  const menu = Menu.buildFromTemplate([
    {label: "Rotion", enabled: false},
    {type: "separator"},
    {
      label: "Criar novo documento",
      click: () => {
        window.webContents.send("new-document");
      },
    },
    {type: "separator"},
    {label: "Documentos recentes", enabled: false},
    {
      label: "Ignite",
      accelerator: "CommandOrControl+1",
      acceleratorWorksWhenHidden: false,
    },
    {
      label: "Rocketseat",
      accelerator: "CommandOrControl+2",
      acceleratorWorksWhenHidden: false,
    },
    {
      label: "Discover",
      accelerator: "CommandOrControl+3",
      acceleratorWorksWhenHidden: false,
    },
    {type: "separator"},
    {label: "Sair do rotion", role: "quit"},
  ]);

  tray.setContextMenu(menu);
}
