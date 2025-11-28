class Banner extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    // bind para métodos
    this.handleClose = this.handleClose.bind(this);
  }

  async connectedCallback() {
    const type = this.getAttribute('type') || 'alert';
    const API_URL = this.getAttribute('url') || 'https://jsonplaceholder.typicode.com/posts/1';

    try {
      const response = await fetch(API_URL);
      const data = await response.json(); // text to show
      this.root.innerHTML = this.getRenderedData(data, type);

    } catch (error) {
      this.root.innerHTML = this.getRenderedError(type);
      console.error('Error:', error);
    }

    const btn = this.root.querySelector(".close-btn");
    btn.addEventListener("click", () => this.handleClose());
  }
  
  handleClose() {
    this.remove();
  }

  getStyles() {
    const layoutSettings = this.getLayoutSettings();
    return `
      <link rel="stylesheet" href="./styles.css">
      <style>
        .banner {
          top: ${layoutSettings.top};
          bottom: ${layoutSettings.bottom};
          left: ${layoutSettings.left};
          right: ${layoutSettings.right};
          position: ${layoutSettings.position};
          z-index: ${layoutSettings.zIndex};
        }
      </style>`;
  }

  getRenderedData(data, type) {
    return `
      ${this.getStyles()}
      <div class="banner ${type}">
        <button class="close-btn float-right" aria-label="Fechar aviso">
          <i class="df-icon-l df-icon-close"></i>
        </button>
        <h2>${this.getAttribute('title') || 'Aviso'}</h2>
        <p>${this.getAttribute('message') || 'Serviços indisponíveis'}</p>
        <p>Example API data: ${data.title}</p>
      </div>
    `;    
  }

  getRenderedError(type) {
    const errorMsg = 'Erro ao carregar dados da API';
    return `
      ${this.getStyles()}
      <div class="banner error ${type}" >
        <button class="close-btn float-right" aria-label="Fechar aviso">
          <i class="df-icon-l df-icon-close"></i>
        </button>
        ${ errorMsg }
      </div>`;
    }

  getLayoutSettings() {
    return {
      top: this.getAttribute('top') ?? 'auto',
      left: this.getAttribute('left') ?? 'auto',
      right: this.getAttribute('right') ?? 'auto',
      bottom: this.getAttribute('bottom') ?? 'auto',
      position: this.getAttribute('position') ?? 'absolute',
      zIndex: this.getAttribute('zIndex') ?? '1'
    };
  }
}

if (!customElements.get('warning-banner')) {
  customElements.define('warning-banner', Banner);
}
