// Import Modules
import { kob } from "./module/config.js";
import kobItemSheet from "./module/sheets/kobItemSheet.js";
import kobCharacterSheet from "./module/sheets/kobCharacterSheet.js";

//Import Documents

//Import Applications

//Import Helpers

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/kob/templates/partials/stat-block.hbs",
        "systems/kob/templates/partials/adversity-tokens.hbs"
    ];

    return loadTemplates(templatePaths);
};

/*------------------------------------------- */
/* Foundry VTT Initiialization                */
/*------------------------------------------- */

Hooks.once("init", function () {
    console.log("KoB | Initializing the Kids on Brooms Game System");

    CONFIG.kob = kob;

    // Register sheet application classes
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("kob", kobItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("kob", kobCharacterSheet, { makeDefault: true });

    preloadHandlebarsTemplates();
});