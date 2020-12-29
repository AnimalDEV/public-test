"use strict";

export default class AnimalImage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const image = document.createElement('image');
        image.setAttribute("href", "https://picsum.photos/200/300");
        this.appendChild(image);
    }
}