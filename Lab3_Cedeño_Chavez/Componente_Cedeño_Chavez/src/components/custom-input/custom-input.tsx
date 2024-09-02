import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'custom-input',
  styleUrl: 'custom-input.css',
  shadow: true,
})
export class CustomInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
