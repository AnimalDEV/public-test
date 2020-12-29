"use strict";

export default class AnimalFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const h1 = document.createElement('h1');
        h1.innerText = "Footer";
        this.appendChild(h1);
    }
}