class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {

        this.shadowRoot.innerHTML = `
            <style>
                .message {
                  font-size: 1.5rem;
                  color: #2c3e50;
                  padding: 1rem;
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  background-clip: text;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  font-weight: bold;
                  margin: 1rem 0;
                }            
            </style>
            <div class="message">Hello World</div>        
        `;
    }
}

customElements.define('hello-world', HelloWorld);
