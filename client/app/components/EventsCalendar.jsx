'use client';

import React, { useEffect, useMemo, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import axios from 'axios';

export default function EventsCalendar() {

    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const getEventos = async () => {
            const { success, result } = (await axios.get('/api/eventos/getAll')).data;

            if (success) setEventos(result.map(evt => {
                return {
                    title: evt.nombre,
                    start: new Date(evt.fechaInicio),
                    end: new Date(evt.fechaFin),
                };
            }));

        };

        getEventos();
    }, []);


    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, bootstrap5Plugin]}
                events={eventos}
                themeSystem='bootstrap5'
                height={'700px'}
                headerToolbar={{
                    left: 'today prev,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek'
                }}
            />
        </>
    )
};