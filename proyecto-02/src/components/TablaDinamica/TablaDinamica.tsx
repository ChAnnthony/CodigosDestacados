import React, { ChangeEvent, FormEvent } from "react";
import'./TablaDinamica.css';

interface Row{//props
    id:number;
    nombre:string;
    edad:number;
}

interface TablaDinamicaState{
    rows:Row[];
    newNombre: string;
    newEdad: string;
}

export class TablaDinamica extends React.Component<{},TablaDinamicaState>{
    state:TablaDinamicaState={
        rows:[],
        newNombre:'',
        newEdad:''
    }
    handleNameChange=(event: ChangeEvent<HTMLInputElement>)=>{
        this.setState({newNombre: event.target.value});
    }
    handleAgeChange=(event: ChangeEvent<HTMLInputElement>)=>{
        this.setState({newEdad: event.target.value});
    }
    handleSubmit=(event:FormEvent)=>{
        event.preventDefault();
        const newRow: Row={
            id:Date.now(),//deber que cuente los id
            nombre:this.state.newNombre,
            edad:parseInt(this.state.newEdad)
        }
        this.setState((prevState)=>({
            rows:[...prevState.rows,newRow],
            newNombre:'',
            newEdad:''
        }));
    }

    handleDelete=(id:number)=>{
        this.setState((prevState)=>({
            rows:prevState.rows.filter((row)=>row.id!==id)
        }));
    }

    render(){
        const{rows,newNombre,newEdad}=this.state;
        return(
            <div>
                <h2>Tabla Dinamica</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={newNombre}
                        placeholder="Ingrese el nombre"
                        required
                        onChange={this.handleNameChange}
                    />
                    <input 
                        type="number"
                        value={newEdad}
                        placeholder="Ingrese la edad"
                        required
                        onChange={this.handleAgeChange}
                    />
                    <button type="submit">Agregar</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row)=>(
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.nombre}</td>
                                <td>{row.edad}</td>
                                <td>
                                    <button onClick={()=>this.handleDelete(row.id)}>Eliminar</button>
                                    <button>Actualizar</button>//deber
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}