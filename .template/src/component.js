import { LitElement, html, css, unsafeCSS } from 'lit-element';
import style from './{{componentName}}.css';

class {{titleCase(componentName)}} extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      ${unsafeCSS(style)}
    `;
  }

  render() {
    return html``;
  }
}

window.customElements.define('{{componentName}}', {{titleCase(componentName)}});
