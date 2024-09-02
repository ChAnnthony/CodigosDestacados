import { Component, Prop, h } from "@stencil/core";
@Component({
    tag: 'custom-button',
    styleUrl: 'button.css',
    shadow: true
})

export class CustomButton {

    @Prop({ reflect: true, mutable: true })
    color: string = 'info';

    render() {
        return <button class={this.color}><slot></slot></button>
    }
}