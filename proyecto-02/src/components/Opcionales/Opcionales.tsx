import React, { ChangeEvent } from "react";
import './Opcionales.css';

interface OpcionalesProps{
    nombre?:string; //propiedad opcional
}

export class Opcional extends React.Component<OpcionalesProps,any>{
    constructor(props:OpcionalesProps){
        super(props);
        this.state={
            nombre: ''
        }
    }

    handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
        this.setState({nombre:event.target.value});
    }

    render(){
        return(
            <div>
                <h1>Componente de Saludo</h1>
                <input 
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={this.state.nombre}
                    onChange={this.handleChange}
                />
                <p>Hola, Bienvenido {this.state.nombre||'visitante'}</p>
            </div>
        );
    }
}