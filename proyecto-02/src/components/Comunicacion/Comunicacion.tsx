interface ComunicacionProps{
    nombre: string;
    apellido1:string;
    apellido2:string;
    edad: number;
    getDatos:(nombreCompleto:String)=>void;
}

export function Comunicacion(props:ComunicacionProps):JSX.Element{
    const devolverDatos=()=>{
        let datos=props.nombre+' '+props.apellido1+' '+props.apellido2;
        props.getDatos(datos);
    }
    return<>
        Bievenido, {props.nombre+' '+props.apellido1+' '+props.apellido2} <br/>
        Edad: {props.edad} anios
        <br />
        <button onClick={()=>{
            devolverDatos();
        }}>
            Devolver Datos
        </button>
    </>
}