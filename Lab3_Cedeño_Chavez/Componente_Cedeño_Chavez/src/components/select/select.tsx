import { Component,Prop,h } from "@stencil/core";

export interface OptionInterface{
    id: string;
    value: string;
}
@Component({
    tag:'custom-select',
    styleUrl: 'select.css',
    shadow:true
})
export class CustomSelect{

    @Prop({reflect:true,mutable:true}) label: string;
    @Prop({reflect:true,mutable:true}) options:Array<OptionInterface>=[];

    render(){
        return(
            <div>
                <label>{this.label}</label>
                <select name="select">
                    {
                        this.options.map(el=>{
                            return <option value={el.id}>{el.value}</option>
                        })
                    }
                </select> 
            </div>
        )
    }
}