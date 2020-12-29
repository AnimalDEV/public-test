"use strict";

export default class AnimalImage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const h1 = document.createElement('h1');
        h1.innerText = "Image";
        this.appendChild(h1);
    }
}