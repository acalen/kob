export default class kobItemSheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 500,
            height: 350,
            classes: ["kob", "sheet", "item"]
        });
    }

    get template() {
        return `systems/kob/templates/sheets/${this.item.data.type}-sheet.hbs`;
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