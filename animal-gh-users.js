"use strict";

export default class AnimalGhUsers extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const table = document.createElement('table');
        fetch("https://api.github.com/users").then((res) => res.json()).then((res) => {
            console.log(res);
            let html = `${res.forEach(({id, login, avatar_url}) => `<tr><td>${id}</td><td>${login}</td><td><img src="${avatar_url}"></td></tr>`)}`;
            table.insertAdjacentHTML("afterbegin", html);
        });
        this.appendChild(table);
    }
}