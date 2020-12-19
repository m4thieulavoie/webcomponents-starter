import { FASTElement, customElement } from '@microsoft/fast-element';
import { html } from '@microsoft/fast-element';

const template = html`whatsup2`;

@customElement({
    name: 'name-tag',
    template,
})
export class NameTag extends FASTElement {

}