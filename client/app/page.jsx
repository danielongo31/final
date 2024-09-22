'use client'

// import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/resources/css/Home.css";
import Topbar from "./components/Topbar";
import axios from "axios";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { useMemo } from "react";
import * as dates from "@/app/date" 

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

export default function page() {

  const now = new Date()

  const mLocalizer = momentLocalizer(moment)

  const { components, defaultDate, max, views } = useMemo(
    () => ({
      components: {
         timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(2024, 8, 1),
      max: dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours'),
      views: Object.keys(Views).map((k) => Views[k]),
    }),
    []
  )

  const eventos = [
    /* {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2015, 3, 0),
      end: new Date(2015, 3, 1),
    }, */
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2024, 8, 7),
      end: new Date(2024, 8, 10),
    },

    {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2016, 2, 13, 0, 0, 0),
      end: new Date(2016, 2, 20, 0, 0, 0),
    },

    {
      id: 3,
      title: 'DTS ENDS',
      start: new Date(2016, 10, 6, 0, 0, 0),
      end: new Date(2016, 10, 13, 0, 0, 0),
    },

    {
      id: 4,
      title: 'Some Event',
      start: new Date(2015, 3, 9, 0, 0, 0),
      end: new Date(2015, 3, 9, 0, 0, 0),
      allDay: true,
    },

    {
      id: 92,
      title: 'Some Other Event',
      start: new Date(2015, 3, 9, 8, 0, 0),
      end: new Date(2015, 3, 10, 11, 30, 0),
    },
    {
      id: 5,
      title: 'Conference',
      start: new Date(2015, 3, 11),
      end: new Date(2015, 3, 13),
      desc: 'Big conference for important people',
    },
    {
      id: 6,
      title: 'Meeting',
      start: new Date(2015, 3, 12, 10, 30, 0, 0),
      end: new Date(2015, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
      id: 7,
      title: 'Lunch',
      start: new Date(2015, 3, 12, 12, 0, 0, 0),
      end: new Date(2015, 3, 12, 13, 0, 0, 0),
      desc: 'Power lunch',
    },
    {
      id: 8,
      title: 'Meeting',
      start: new Date(2015, 3, 12, 14, 0, 0, 0),
      end: new Date(2015, 3, 12, 15, 0, 0, 0),
    },
    {
      id: 9,
      title: 'Happy Hour',
      start: new Date(2015, 3, 12, 17, 0, 0, 0),
      end: new Date(2015, 3, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day',
    },
    {
      id: 10,
      title: 'Dinner',
      start: new Date(2015, 3, 12, 20, 0, 0, 0),
      end: new Date(2015, 3, 12, 21, 0, 0, 0),
    },
    {
      id: 11,
      title: 'Planning Meeting with Paige',
      start: new Date(2015, 3, 13, 8, 0, 0),
      end: new Date(2015, 3, 13, 10, 30, 0),
    },
    {
      id: 11.1,
      title: 'Inconvenient Conference Call',
      start: new Date(2015, 3, 13, 9, 30, 0),
      end: new Date(2015, 3, 13, 12, 0, 0),
    },
    {
      id: 11.2,
      title: "Project Kickoff - Lou's Shoes",
      start: new Date(2015, 3, 13, 11, 30, 0),
      end: new Date(2015, 3, 13, 14, 0, 0),
    },
    {
      id: 11.3,
      title: 'Quote Follow-up - Tea by Tina',
      start: new Date(2015, 3, 13, 15, 30, 0),
      end: new Date(2015, 3, 13, 16, 0, 0),
    },
    {
      id: 12,
      title: 'Late Night Event',
      start: new Date(2015, 3, 17, 19, 30, 0),
      end: new Date(2015, 3, 18, 2, 0, 0),
    },
    {
      id: 12.5,
      title: 'Late Same Night Event',
      start: new Date(2015, 3, 17, 19, 30, 0),
      end: new Date(2015, 3, 17, 23, 30, 0),
    },
    {
      id: 13,
      title: 'Multi-day Event',
      start: new Date(2015, 3, 20, 19, 30, 0),
      end: new Date(2015, 3, 22, 2, 0, 0),
    },
    {
      id: 14,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
      id: 15,
      title: 'Point in Time Event',
      start: now,
      end: now,
    },
    {
      id: 16,
      title: 'Video Record',
      start: new Date(2015, 3, 14, 15, 30, 0),
      end: new Date(2015, 3, 14, 19, 0, 0),
    },
    {
      id: 17,
      title: 'Dutch Song Producing',
      start: new Date(2015, 3, 14, 16, 30, 0),
      end: new Date(2015, 3, 14, 20, 0, 0),
    },
    {
      id: 18,
      title: 'Itaewon Meeting',
      start: new Date(2015, 3, 14, 16, 30, 0),
      end: new Date(2015, 3, 14, 17, 30, 0),
    },
    {
      id: 19,
      title: 'Online Coding Test',
      start: new Date(2015, 3, 14, 17, 30, 0),
      end: new Date(2015, 3, 14, 20, 30, 0),
    },
    {
      id: 20,
      title: 'An overlapped Event',
      start: new Date(2015, 3, 14, 17, 0, 0),
      end: new Date(2015, 3, 14, 18, 30, 0),
    },
    {
      id: 21,
      title: 'Phone Interview',
      start: new Date(2015, 3, 14, 17, 0, 0),
      end: new Date(2015, 3, 14, 18, 30, 0),
    },
    {
      id: 22,
      title: 'Cooking Class',
      start: new Date(2015, 3, 14, 17, 30, 0),
      end: new Date(2015, 3, 14, 19, 0, 0),
    },
    {
      id: 23,
      title: 'Go to the gym',
      start: new Date(2015, 3, 14, 18, 30, 0),
      end: new Date(2015, 3, 14, 20, 0, 0),
    },
    {
      id: 24,
      title: 'DST ends on this day (Europe)',
      start: new Date(2022, 9, 30, 0, 0, 0),
      end: new Date(2022, 9, 30, 4, 30, 0),
    },
    {
      id: 25,
      title: 'DST ends on this day (America)',
      start: new Date(2022, 10, 6, 0, 0, 0),
      end: new Date(2022, 10, 6, 4, 30, 0),
    },
    {
      id: 26,
      title: 'DST starts on this day (America)',
      start: new Date(2023, 2, 12, 0, 0, 0),
      end: new Date(2023, 2, 12, 4, 30, 0),
    },
    {
      id: 27,
      title: 'DST starts on this day (Europe)',
      start: new Date(2023, 2, 26, 0, 0, 0),
      end: new Date(2023, 2, 26, 4, 30, 0),
    },
  ]


  // const [eventos, setEventos] = useState([]);

  // useEffect(() => {
  //   const getEventos = async () => {
  //     const { success, result } = (await axios.get('/api/eventos/getAll')).data;

  //     if (success) setEventos(result);

  //   };

  //   getEventos();
  // }, []);

  return (
    <>
      <Topbar />

      <div className="content-home" id="inicio">
        <div className="welcome">
          <Image src={"/resources/imgs/bg1.jpg"} width={2160} height={1080} />
          <Image
          />
        </div>


        <div className="container py-5" id="actividades">
          <h1 className="text-center my-5">ACTIVIDADES</h1>

          <div className="content-places row row-cols-3 align-items-center justify-content-center">
            <div className="col place">
              <div className="place-image rounded">
                <Image
                  src={"/resources/imgs/cultos.png"}
                  width={1200}
                  height={630}
                />
              </div>

              <div className="place-info py-4">
                <h3 >Cultos</h3>
              </div>
            </div>

            <div className="col place">
              <div className="place-image rounded">
                <Image
                  src={"/resources/imgs/la-cristalina.png"}
                  width={800}
                  height={534}
                />
              </div>

              <div className="place-info py-4">
                <h3>Días de ayuno</h3>
              </div>
            </div>

            <div className="col place">
              <div className="place-image rounded">
                <Image
                  src={"/resources/imgs/cena-del-senor.png"}
                  width={1536}
                  height={1536}
                />
              </div>

              <div className="place-info py-4">
                <h3>Cena del señor</h3>
              </div>
            </div>

            <div className="col place">
              <div className="place-image rounded">
                <Image
                  src={"/resources/imgs/clase-dominical.png"}
                  width={1600}
                  height={896}
                />
              </div>

              <div className="place-info py-4">
                <h3>Clases dominicales</h3>
              </div>
            </div>

            <div className="col place">
              <div className="place-image rounded">
                <Image
                  src={"/resources/imgs/quebrada-la-cristalina.png"}
                  width={801}
                  height={601}
                />
              </div>

              <div className="place-info py-4">
                <h3>5</h3>
              </div>
            </div>

            <div className="col place">
              <div className="place-image rounded">
                <Image
                  src={"/resources/imgs/los-laureles.jpeg"}
                  width={638}
                  height={426}
                />
              </div>

              <div className="place-info py-4">
                <h3>6</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className="content-map position-relative container-fluid px-0 py-5"
          id="mapa"
        >
          <div className="position-relative z-1">
            <h1 className="text-center text-white my-5">
              Ubicación
            </h1>

            <div className="content-google-maps container position-relative">
              <div className="row gap-4">
                <div className="col">
                  <iframe
                    className="rounded"
                    src="https://www.google.com/maps/d/u/0/embed?mid=11C0tV_UX59wz7S8l2vz6PAmO4bZihH8&usp=sharing"
                    frameBorder="0"
                  ></iframe>
                </div>

                <div className="col">
                  <h1 className="text-white">Ebenezer Lérida</h1>

                  <p className="text-white">
                    Explora un lugar donde la fe y el amor se entrelazan en cada momento de nuestra vida congregacional.
                    Desde nuestras inspiradoras celebraciones de adoración hasta nuestras enriquecedoras actividades de
                    estudio bíblico y servicio comunitario, cada aspecto de nuestra iglesia está pensado para fortalecer
                    tu vínculo con Dios. Cada rincón de nuestra iglesia te invita a reflexionar, a compartir y a crecer
                    en tu caminar cristiano. ¡Explora nuestros eventos, participa en nuestros cultos y únete a una comunidad
                    vibrante que te espera con los brazos abiertos! ¡Tu viaje espiritual comienza aquí!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-contact container p-5" id="nosotros">
          <h1 className="text-center my-5">VISIÓN</h1>
          <p className="text-center my-5">
            Extender el Reino de Dios a las nuevas generaciones mediante el impulso a la iglesia,
            la formación del liderazgo y el cuidado de la comunidad de ministros.
          </p>
          <h1 className="text-center my-5">MISIÓN</h1>
          <p className="text-center my-5">
            Bajo la dirección del Espíritu  Santo, liderar e impulsar la extensión del Reino de Dios en Colombia y otras culturas,
            comprometidos con la plantación de iglesias, el alcance y educación de las nuevas generaciones y el fortalecimiento de la comunidad
            de ministros.
          </p>
        </div>

        <div className="welcome" id="calendario">
          {/* <Image src={"/resources/imgs/bg2.jpg"} width={2160} height={1080} /> */}
          <Calendar
            eventos={eventos}
            components={components}
            defaultDate={defaultDate}
            localizer={mLocalizer}
            max={max}
            showMultiDayTimes
            step={60}
            views={views}
          />
          <Image
          />
        </div>
      </div>
    </>
  );
}