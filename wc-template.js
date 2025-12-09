class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                input { color: blue; }
            </style>
            <input value="Hello World" />
        `;
    }
}

customElements.define('hello-world', HelloWorld);
