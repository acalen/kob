import kobItemSheet from "./module/sheets/kobItemSheet.js";
Hooks.once("init", function () {
    console.log("KoB | Initializing Kids on Brooms");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("kob", kobItemSheet, { makeDefault: true });
});