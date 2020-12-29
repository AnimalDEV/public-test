"use strict";

export default class AnimalImage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const image = document.createElement('img');
        image.setAttribute("src", "https://picsum.photos/200/300");
        this.appendChild(image);
    }
}