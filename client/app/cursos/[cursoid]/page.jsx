'use client';

import axios from "axios";
import { useEffect, useState } from "react";

export default function page({
    params
}) {

    const { cursoid } = params;

    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        const getActividades = async () => {
            const {success, result} = (await axios.get(`/api/actividades/getByCurso/${cursoid}`)).data
            
            if (success) setActividades(result)
        };

        getActividades();
    }, []);


    return (
        <div>
            {actividades.map(actividad => (
                <p>{actividad.descripcion}</p>
            ))}
        </div>
    )
}
