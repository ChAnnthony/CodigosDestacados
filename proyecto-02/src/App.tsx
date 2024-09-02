import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Opcional } from './components/Opcionales/Opcionales';
import { Comunicacion } from './components/Comunicacion/Comunicacion';
import { TablaDinamica } from './components/TablaDinamica/TablaDinamica';
import { UserTable } from './components/UserTable/UserTable';

function App() {
  return (
    <div>
      <Opcional />

      <Comunicacion
        nombre='Juanito'
        apellido1='Perez'
        apellido2='Lopez'
        edad={50}
        getDatos={(nombreCompleto) => {
          alert('Hola ' + nombreCompleto);
        }}
      />

      <TablaDinamica />
      <br/>
      <hr/>
      <UserTable/>
    </div>
  );
}
export default App;