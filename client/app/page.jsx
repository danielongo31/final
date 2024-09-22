'use client'

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@/app/resources/css/Home.css";

// import React, { useMemo } from "react";
// import Topbar from "./components/Topbar";
import EventsCalendar from "./components/EventsCalendar";

export default function page() {

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
      {/* <Topbar /> */}

      <div className="content-home" id="inicio">
        <div className="welcome">
          {/* <Image src={"/resources/imgs/bg1.jpg"} width={2160} height={1080} /> */}
        </div>


        <div className="container py-5" id="actividades">
          <h1 className="text-center my-5">ACTIVIDADES</h1>

          <div className="content-places row row-cols-3 align-items-center justify-content-center">
            <div className="col place">
              <div className="place-image rounded">
                {/* <Image
                  src={"/resources/imgs/cultos.png"}
                  width={1200}
                  height={630}
                /> */}
              </div>

              <div className="place-info py-4">
                <h3 >Cultos</h3>
              </div>
            </div>

            <div className="col place">
              <div className="place-image rounded">
                {/* <Image
                  src={"/resources/imgs/la-cristalina.png"}
                  width={800}
                  height={534}
                /> */}
              </div>

              <div className="place-info py-4">
                <h3>Días de ayuno</h3>
              </div>
            </div>

            <div className="col place">
              <div className="place-image rounded">
                {/* <Image
                  src={"/resources/imgs/cena-del-senor.png"}
                  width={1536}
                  height={1536}
                /> */}
              </div>

              <div className="place-info py-4">
                <h3>Cena del señor</h3>
              </div>
            </div>

            <div className="col place">
              <div className="place-image rounded">
                {/* <Image
                  src={"/resources/imgs/clase-dominical.png"}
                  width={1600}
                  height={896}
                /> */}
              </div>

              <div className="place-info py-4">
                <h3>Clases dominicales</h3>
              </div>
            </div>

            <div className="col place">
              <div className="place-image rounded">
                {/* <Image
                  src={"/resources/imgs/quebrada-la-cristalina.png"}
                  width={801}
                  height={601}
                /> */}
              </div>

              <div className="place-info py-4">
                <h3>5</h3>
              </div>
            </div>

            <div className="col place">
              <div className="place-image rounded">
                {/* <Image
                  src={"/resources/imgs/los-laureles.jpeg"}
                  width={638}
                  height={426}
                /> */}
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
          <EventsCalendar/>
        </div>
      </div>
    </>
  );
}