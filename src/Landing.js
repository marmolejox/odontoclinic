// Componente de clase
import React, { Component } from "react";
import draDivvani from './assets/images/photos/draDivvani.jpg';
import toothpasteImage from './assets/images/photos/toothpaste.jpg';
import workingImage from './assets/images/photos/workingTooth.jpg';
import selfieDivvaniImage from './assets/images/photos/selfieDivvani.jpg';
import avatarDivvaniImage from './assets/images/photos/avatarDivvani.jpg';
import anaImage from './assets/images/photos/Ana.jpg';
import carlosImage from './assets/images/photos/Carlos.jpg';
import lauraImage from './assets/images/photos/Laura.jpg';

class Landing extends Component {
    render() {
        return (
          <div>
            <section id="inicio">
              <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div class="flex flex-wrap items-center mx-auto max-w-7xl">
                  <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                    <div>
                      <div class="relative w-full max-w-lg">
                        <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                        <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        <div class="relative">
                          <img
                            class="object-cover object-center mx-auto rounded-lg shadow-2xl"
                            alt="hero"
                            src={draDivvani}
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                    <span class="mb-8 text-xs font-bold tracking-widest text-indigo-500 uppercase">
                      {" "}
                      Sonrísa Perfecta{" "}
                    </span>
                    <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                      Dra. Divvani Gutiérrez
                    </h1>
                    <p class="mb-8 text-base leading-relaxed text-left text-gray-500">
                      Tu salud bucal es nuestra prioridad número uno. En nuestra
                      práctica, nos comprometemos a brindarte la mejor atención
                      dental en un ambiente cálido y acogedor.
                    </p>
                    <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
                      <div class="mt-3 rounded-lg sm:mt-0">
                        <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                          Agendar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section id="servicios">

            <div class="container px-5 mx-auto">
    <div class="flex flex-col text-center w-full">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Servicios disponibles</h1>
      </div>
    </div>

              <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                  <div class="p-6">
                    <img
                      class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                      src={toothpasteImage}
                      alt="blog"
                    ></img>
                    <div class="inline-flex justify-between w-full">
                      <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">
                        Limpieza
                      </h1>
                      <span>$200.00</span>
                    </div>
                    <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">
                      Una limpieza dental regular es fundamental para mantener
                      una buena salud bucal.
                    </p>
                  </div>
                  <div class="p-6">
                    <img
                      class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                      src={workingImage}
                      alt="blog"
                    ></img>
                    <div class="inline-flex justify-between w-full">
                      <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">
                        Blanqueamiento
                      </h1>
                      <span>$500.00</span>
                    </div>
                    <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">
                      El blanqueamiento dental es un procedimiento cosmético
                      popular que ayuda a eliminar las manchas y aclarar el
                      color de los dientes. Los costos pueden variar según el
                      método utilizado y la extensión del tratamiento.
                    </p>
                  </div>
                  <div class="p-6">
                    <img
                      class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                      src={selfieDivvaniImage}
                      alt="blog"
                    ></img>
                    <div class="inline-flex justify-between w-full">
                      <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">
                        Empaste
                      </h1>
                      <span>$800.00</span>
                    </div>
                    <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">
                      Los empastes dentales se utilizan para reparar dientes que
                      han sido afectados por caries.
                    </p>
                  </div>
                </div>
              </div>
            </section>


            <section>

            <div class="container px-5 mx-auto">
    <div class="flex flex-col text-center w-full">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Testimonios</h1>
      </div>
    </div>


    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div class="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl">
                <p class="mx-auto text-base leading-relaxed text-gray-500">"¡Increíble atención! Desde el primer momento en que entré en la clínica, me sentí bienvenida y cuidada. El equipo de la Dra. Divvani es simplemente maravilloso. Me hicieron sentir cómoda durante todo el proceso y el resultado final de mi tratamiento dental superó mis expectativas. ¡Recomendaría la Clínica Dental Sonrisas Radiantes a cualquiera que busque una atención dental de calidad!"</p>
                <h2 class="mt-4 text-xs font-semibold tracking-widest text-indigo-600 uppercase">
          Ana
                </h2>
                <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full" src={anaImage}></img>
            </div>
            <div class="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl">
                <p class="mx-auto text-base leading-relaxed text-gray-500">"Siempre he tenido miedo al dentista, pero mi experiencia en la Clínica Dental Sonrisas Radiantes cambió por completo mi perspectiva. El equipo fue extremadamente amable y profesional, y se tomaron el tiempo para explicarme cada paso del tratamiento. Gracias a ellos, pude superar mi miedo y ahora tengo una sonrisa más saludable y hermosa. ¡No puedo agradecer lo suficiente al equipo por su excelente atención!"</p>
                <h2 class="mt-4 text-xs font-semibold tracking-widest text-indigo-600 uppercase">
          Carlos
                </h2>
                <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full" src={carlosImage}></img>
            </div>
            <div class="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl lg:mx-auto rounded-xl">
                <p class="mx-auto text-base leading-relaxed text-gray-500">"¡Me encanta mi nueva sonrisa! Después de años de sentirme insegura acerca de mis dientes, finalmente decidí buscar ayuda en la Clínica Dental Sonrisas Radiantes. El equipo me guió a través de todas las opciones disponibles y creó un plan de tratamiento personalizado que se adaptaba perfectamente a mis necesidades. Ahora, gracias a ellos, tengo una sonrisa que siempre quise. ¡No puedo agradecer lo suficiente al equipo por su increíble trabajo!"</p>
                <h2 class="mt-4 text-xs font-semibold tracking-widest text-indigo-600 uppercase">
          Laura
                </h2>
                <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full" src={lauraImage}></img>
            </div>
        </div>
    </div>
</section>

<section class="text-gray-600 body-font relative" id="contacto">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contacto</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Rellena el siguiente formulario para recibir una atención personalizada.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Nombre</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Notas</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font overflow-hidden">

            <div class="container px-5 mx-auto">
    <div class="flex flex-col text-center w-full">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Blog</h1>
      </div>
    </div>

  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-12">
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">NOTICIAS</span>
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Clínicas de la UAA contribuyen al cuidado bucal de la población</h2>
        <p class="leading-relaxed mb-8">Las revisiones por especialistas dentales deberían realizarse desde la aparición de los primeros dientes</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a class="text-indigo-500 inline-flex items-center">Más información
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.2K
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="blog" src={avatarDivvaniImage} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"></img>
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">Dra. Divvani Gutiérrez</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">Especialista</span>
          </span>
        </a>
      </div>
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">ARTICULOS</span>
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">¿Cómo funciona el blanqueamiento dental?</h2>
        <p class="leading-relaxed mb-8">Descubre el proceso detrás del blanqueamiento dental y cómo puede transformar tu sonrisa. Exploraremos los diferentes métodos utilizados para eliminar manchas y aclarar el color de los dientes, desde tratamientos en el consultorio hasta opciones para realizar en casa.</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a class="text-indigo-500 inline-flex items-center">Más información
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>8.7K
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>19
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="blog" src={avatarDivvaniImage} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"></img>
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">Dra. Divvani Gutiérrez</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">Especialista</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</section>

          </div>
        );
  }
}

export default Landing;
