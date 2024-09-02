import React from "react";

interface HolamundoProps {
    nombre: string;
    apellido: string;

    }

    export const HolaMundo: React.FC<HolamundoProps> = ({ nombre,apellido }) => {
        return (
        <>
    hola {nombre} {apellido} componente
        </>
        )
        }