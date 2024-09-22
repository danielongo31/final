"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import "@/app/resources/css/components/Sidebar.css";

export default function Topbar() {
  return (
    <nav className="sidebar navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          <Image src={"/resources/imgs/logo.png"} width={50} height={50} />
          Ebenezer Lérida
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                aria-current="page"
                href={"#inicio"}
              >
                INICIO
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link text-white"
                aria-current="page"
                href={"#actividades"}
              >
                ACTIVIDADES
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                aria-current="page"
                href={"#mapa"}
              >
                MAPA
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                aria-current="page"
                href={"#nosotros"}
              >
                NOSOTROS
              </Link>
            </li>

             <li className="nav-item">
              <Link
                className="nav-link text-white"
                aria-current="page"
                href={"#calendario"}
              >
                CALENDARIO
              </Link>
              </li>

              <li className="nav-item">
              <Link
                className="nav-link text-white"
                aria-current="page"
                href={"/dashboard"}
              >
                INICIAR SESIÓN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
