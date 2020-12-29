"use strict";

export default class AnimalHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const h1 = document.createElement('h1');
        h1.innerText = "Header";
        this.appendChild(h1);
    }
}