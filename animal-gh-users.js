"use strict";

export default class AnimalGhUsers extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const table = document.createElement('table');
        fetch("https://api.github.com/users").then((res) => res.json()).then((res) => {
            console.log(res);
        });
        this.appendChild(table);
    }
}