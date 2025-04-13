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
        margin: var(--ddd-spacing-0);
        padding: var(--ddd-spacing-0);
        background-color: var(--ddd-theme-default-white);
        flex-direction: row;
        align-items:flex-start;
        gap: var(--ddd-spacing-9);
        display: flex;
        align-self: flex-start;
        
       

        
      }
      h3 span {
        font-size: var(--ddd-steps-list-label-font-size, var(--ddd-font-size-s));
      }

      ::slotted(img) {
        max-width: 100%
      }

      
     

  
   
    


      .stepLabel {
  width: var(--ddd-spacing-8);
  height: var(--ddd-spacing-8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--ddd-font-weight-bold);
  font-size: var(--ddd-font-size-m);
  margin-bottom: var(--ddd-spacing-0);
  background-color: var(--ddd-theme-primary);
  color: var(--ddd-theme-default-white);
  z-index: 1;
  position: relative;
  
}

.line {
 
  border-left: 1px dashed var(--ddd-theme-default-beaverBlue);
  position: absolute;
  top: var(--ddd-spacing-0);
  bottom: var(--ddd-spacing-0);
  height: 100%;
  left: 50%;
  width: var(--ddd-spacing-0);
  z-index: 0;

}

.line-container {
  position: relative;
  width: var(--ddd-spacing-8);
  min-height: 400px;
  align-self: stretch;
  
}


.step-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: var(--ddd-spacing-0);


}


.step-content h1 {
  margin: var(--ddd-spacing-0);
  padding: var(--ddd-spacing-0);
}

  ::slotted(*) {
    margin-bottom: var(--ddd-spacing-0);
  }

  @media (max-width: 480px) {
    
    .stepLabel {
      width: var(--ddd-spacing-6);
      height: var(--ddd-spacing-6);
      font-size: var(--ddd-font-size-xl);

    }


    .step-content {
      font-size: var(--ddd-font-size-m);

    }

    

  }


      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
    <div class="line-container">
    <div class="line"></div>
    <div class="stepLabel"> ${this.step}</div>
    </div>
    <div class="step-content">
    <h1>${this.title}</h1>
    <slot></slot>
    </div>
</div>
`;
  }

  /**
   * haxProperties integration via file reference
   */
  
}

globalThis.customElements.define(DddStepsListItem.tag, DddStepsListItem);
