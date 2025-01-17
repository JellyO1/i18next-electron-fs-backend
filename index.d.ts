import { BackendModule } from "i18next";

export declare const readFileRequest = "ReadFile-Request";
export declare const writeFileRequest = "WriteFile-Request";
export declare const readFileResponse = "ReadFile-Response";
export declare const changeLanguageRequest = "ChangeLanguage-Request";
export function mainBindings(ipcMain: Electron.IpcMain, browserWindow: Electron.BrowserWindow, fs: any): any;
export function clearMainBindings(ipcMain: Electron.IpcMain): any;
export function preloadBindings(ipcRenderer: Electron.IpcRenderer, process: NodeJS.Process): any;

export default {} as BackendModule;
