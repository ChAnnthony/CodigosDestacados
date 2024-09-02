import React from 'react';

interface ComponentClaseProps {
    nombre: string;
    apellido: string;
    edad:number;
    ciudad:string;
}

export class ComponenteClase extends React.Component<ComponentClaseProps,any> {
    constructor(props: ComponentClaseProps) {
        super(props);
    }
    render() {
        return (
            <>
                Bienvenido {this.props.nombre} {this.props.apellido} con {this.props.edad} años desde {this.props.edad}
            </>
        )
    }
}