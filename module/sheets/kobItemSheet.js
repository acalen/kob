export default class kobItemSheet extends ItemSheet {
    get template() {
        return `systems/kob/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}