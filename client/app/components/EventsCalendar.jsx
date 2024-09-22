'use client';

import React, { useMemo } from 'react';
import events from '../resources/utils/events';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

export default function EventsCalendar() {
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, bootstrap5Plugin]}
                events={events}
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