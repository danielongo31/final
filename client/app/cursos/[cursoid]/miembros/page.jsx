'use client'

import axios from "axios";
import { useEffect, useState, } from "react";

export default function MiembroPage({
    params
}){
   
    const { cursoid } = params;

    const [miembros, setMiembros] = useState([]);

    useEffect(() => {
        const getMiembros = async () => {
            const {success, result} = (await axios.get(`/api/miembro/getByCurso/${cursoid}`)).data

            if (success) setMiembros(result)
        };

        getMiembros();
    }, []);
    return (
        <div>
            {miembros.map(miembro => (
                <p>{miembro.edad}</p>
            ))}
        </div>
    )
}