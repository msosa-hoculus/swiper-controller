class customDiv extends HTMLElement {
    constructor() {
        super();
        this._customVariable = "Default value"
    }

    get customVariable() {
        return this._customVariable;
    }
}

customElements.define("custom-div",customDiv);