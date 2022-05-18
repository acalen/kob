// Import Modules
import { kob } from "./module/config.js";
import kobItemSheet from "./module/sheets/kobItemSheet.js";

//Import Documents

//Import Applications

//Import Helpers

/*------------------------------------------- */
/* Foundry VTT Initiialization                */
/*------------------------------------------- */

Hooks.once("init", function () {
    console.log("KoB | Initializing the Kids on Brooms Game System");

    CONFIG.kob = kob;

    // Register sheet application classes
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("kob", kobItemSheet, { makeDefault: true });
});