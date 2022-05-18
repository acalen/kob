export default class kobItemSheet extends ItemSheet {

    get template() {
        return `systems/kob/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const baseData = super.getData();
        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.kob
        };

        return sheetData;
    }
}