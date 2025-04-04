/**
 * Copyright 2025 gabriellawagner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


/**
 * `ddd-steps-list-item`
 * 
 * @demo index.html
 * @element ddd-steps-list-item
 */
export class DddStepsListItem extends DDDSuper(I18NMixin(LitElement)) {


  static get tag() {
    return "ddd-steps-list-item";
  }

  constructor() {
    super();
    this.title = "";
    

    


    this.registerLocalization({
      context: this,
     
        
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      step: { type: Number},
    

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


      .stepLabel {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: var(--ddd-spacing-2);
  background-color: var(--ddd-theme-primary);
  color: black;
}



      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
    <div class="stepLabel"> ${this.step}</div>
    <h1>${this.title}</h1>
    <slot> </slot>
  
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  
}

globalThis.customElements.define(DddStepsListItem.tag, DddStepsListItem);
