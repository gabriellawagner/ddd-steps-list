/**
 * Copyright 2025 gabriellawagner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-steps-list`
 * 
 * @demo index.html
 * @element ddd-steps-list
 */
export class DddStepsList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-steps-list";
  }

  constructor() {
    super();
    this.circle=0;
    
    

    
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-steps-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      circle: { type: Number },
      dddPrimary: { type: String, attribute: 'ddd-primary' },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--ddd-steps-list-label-font-size, var(--ddd-font-size-s));
      }

      .circle {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1rem;
        margin-right: var(--ddd-spacing-4, 16px);
        background-color: #ddd;
        color: #000;
      }

      
    `];
  }



  updated(changedProperties) 
  {
    super.updated(changedProperties);


    if (this.dddPrimary) {
      this.style.setProperty(
        '--ddd-theme-primary',
        `var(--ddd-primary-${this.dddPrimary})`
      );
    }
    


    const children = Array.from(this.children);
    let step = 1;

    children.forEach(child => 
    {
      if (child.tagName.toLowerCase() !== "ddd-steps-list-item") 
      {
        this.removeChild(child);
      }
      else 
      {
          child.step = step;
          step++;
      }
    });

    
    
  }
  





  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
    <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddStepsList.tag, DddStepsList);