import { defineCustomElement, defineComponent } from 'vue'
import UInputComponent from './components/UInput.ce.vue'
import ULabelComponent from './components/ULabel.ce.vue'
import USearchBoxComponent from './components/USearchBox.ce.vue' 
import UButtonComponent from './components/UButton.ce.vue'


const UInput = defineCustomElement(UInputComponent);
const ULabel = defineCustomElement(ULabelComponent);
const UButton = defineCustomElement(UButtonComponent);
const USearchBox = defineCustomElement(USearchBoxComponent);

export default { UInput, ULabel, USearchBox, UButton }

customElements.define('u-input', UInput);
customElements.define('u-label', ULabel);
customElements.define('u-button', UButton);
customElements.define('u-search-box', USearchBox);
