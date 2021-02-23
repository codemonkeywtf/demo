import { LitElement, html, css } from 'lit-element'

export class CounterElement extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    }
  }

  static get styles() {
    return css`
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    `
  }

  constructor() {
    super()
    this.count = 0
  }

  inc() {
    this.count++
  }

  dec() {
    this.count--
  }

  render() {
    return html`
      <slot>
        <button @click="${this.dec}">-</button>
        <span>${this.count}</span>
        <button @click="${this.inc}">+</button>
      </slot>
    `
  }
}

window.customElements.define('counter-element', CounterElement)
