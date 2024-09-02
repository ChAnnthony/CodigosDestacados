import React, { ChangeEvent, FormEvent } from "react";

interface Row { // props
    id: number;
    nombre: string;
    edad: number;
}

interface TablaDinamicaState {
    rows: Row[];
    newNombre: string;
    newEdad: string;
}

export class TablaDinamica extends React.Component<{}, TablaDinamicaState> {
    state: TablaDinamicaState = {
        rows: [],
        newNombre: '',
        newEdad: ''
    }

    handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ newNombre: event.target.value });
    }

    handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ newEdad: event.target.value });
    }

    handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const newRow: Row = {
            id: this.state.rows.length + 1, // Contar el número de filas existentes
            nombre: this.state.newNombre,
            edad: parseInt(this.state.newEdad)
        }
        this.setState((prevState) => ({
            rows: [...prevState.rows, newRow],
            newNombre: '',
            newEdad: ''
        }));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.newNombre}
                        onChange={this.handleNameChange}
                        placeholder="Nombre"
                    />
                    <input
                        type="number"
                        value={this.state.newEdad}
                        onChange={this.handleAgeChange}
                        placeholder="Edad"
                    />
                    <button type="submit">Agregar</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rows.map(row => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.nombre}</td>
                                <td>{row.edad}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}