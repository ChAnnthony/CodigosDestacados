import React from 'react';

interface CicloVidaProps{
    name: string;
}


export class CicloVida extends React.Component<CicloVidaProps,CicloVidaState> {
    constructor(props: CicloVidaProps) {
        super(props);
        this.state = {
             name: this.props.name }
             console.log('Estoy en el constructor');
        }
        

        render() {
            console.log('Estoy en el render');
            return (
                <>
                    <h1>hola {this.state.name}</h1>
                    <br />
                    <button onClick={() => this.setState({ name: 'Annthony' })}>Cambiar nombre</button>
                </>
            )
        }
        componentDidMount() {
            console.log('Estoy en el componentDidMount');
        }
        componentDidUpdate() {
            console.log('Estoy en el componentDidUpdate');
        }
        componentWillUnmount() {
            console.log('Estoy en el componentWillUnmount');
        }

}

interface CicloVidaState {
    name: string;
}