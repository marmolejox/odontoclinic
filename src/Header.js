// Componente de clase
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div class="bg-white lg:pb-2">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header class="flex items-center justify-between py-4 md:py-8">
            <a
              href="/"
              class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
              aria-label="logo"
            >
              Odontoclinic
            </a>

            <nav class="hidden gap-12 lg:flex">
              <a
                href="#inicio"
                class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Servicios
              </a>
              <a
                href="#contacto"
                class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Contacto
              </a>
              
            </nav>

            <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
              
              <a
                href="#contacto"
                class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Agendar
              </a>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
