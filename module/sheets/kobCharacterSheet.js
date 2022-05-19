export default class kobCharacterSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/kob/templates/sheets/character-sheet.hbs",
            classes: ["kob", "sheet", "character"]
        });
    }
}