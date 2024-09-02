import React from 'react';


interface ComponenteClaseProps {
    nombre: string;
    apellido: string;
}

export class ComponenteClase extends React.Component<ComponenteClaseProps,any> {
    constructor(props: ComponenteClaseProps) {
        super(props);
    }
    render() {
        return (
            <>
                hola {this.props.nombre} {this.props.apellido} desde el componente
            </>
        )
    }
}