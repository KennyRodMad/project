"use client"

import Link from "next/link"
import { ShoppingBag, Users, Star, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header con botones a la derecha */}
      <header className="w-full flex justify-end items-center px-8 py-6">
        <div className="flex gap-4">
          <Link href="/register">
            <button className="bg-black text-white px-8 py-3 rounded-md font-semibold flex items-center gap-2 text-lg hover:bg-gray-800 transition">
              Registrarse <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-blue-100 border border-blue-200 text-blue-700 px-8 py-3 rounded-md font-semibold flex items-center gap-2 text-lg hover:bg-blue-200 transition">
              Iniciar Sesión
            </button>
          </Link>
        </div>
      </header>

      {/* Fondo degradado superior */}
      <div className="w-full bg-gradient-to-b from-[#eef3fd] to-white pb-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center px-2">
          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-10 mb-4 leading-tight">
            Bienvenido a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">
              ProductHub
            </span>
          </h1>
          {/* Descripción */}
          <p className="text-base md:text-lg text-gray-700 text-center mt-1 mb-8 max-w-xl">
            Tu plataforma integral para gestionar productos de manera eficiente.
            Registra, organiza y administra tu catálogo de productos con facilidad.
          </p>

          {/* Cards de características */}
          <div className="flex flex-col md:flex-row gap-6 mb-8 w-full justify-center">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-full max-w-xs flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-3">
                <ShoppingBag className="w-8 h-8 text-blue-600" />
              </div>
              <div className="font-semibold text-lg mb-2 text-center">
                Gestión de Productos
              </div>
              <div className="text-gray-600 text-base text-center">
                Administra tu inventario con herramientas completas de CRUD
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-full max-w-xs flex flex-col items-center">
              <div className="bg-green-100 rounded-full p-4 mb-3">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <div className="font-semibold text-lg mb-2 text-center">
                Sistema de Usuarios
              </div>
              <div className="text-gray-600 text-base text-center">
                Registro e inicio de sesión seguro para todos los usuarios
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-full max-w-xs flex flex-col items-center">
              <div className="bg-purple-100 rounded-full p-4 mb-3">
                <Star className="w-8 h-8 text-purple-500" />
              </div>
              <div className="font-semibold text-lg mb-2 text-center">
                Interfaz Intuitiva
              </div>
              <div className="text-gray-600 text-base text-center">
                Diseño moderno y fácil de usar para una mejor experiencia
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sobre Nosotros */}
      <section className="w-full bg-white pt-10 pb-16">
        <div className="max-w-5xl mx-auto px-2">
          <h2 className="text-3xl font-extrabold mb-4 text-center">Sobre Nosotros</h2>
          <p className="text-gray-700 text-center mb-8 text-lg">
            Conoce al equipo detrás de ProductHub
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Card Autor 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 flex flex-col md:flex-row gap-4 items-center w-full max-w-xl">
              <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-xl font-bold">
                A1
              </div>
              <div className="flex-1">
                <div className="font-bold text-lg mb-1">Arturo Del Villar López</div>
                <div className="text-blue-600 text-base mb-1">Desarrollador Full Stack</div>
                <div className="text-gray-600 text-base mb-2">
                  Estudiante de séptimo semestre de ingeniería de software de la universidad de Cartagena
                </div>
                <div className="text-gray-500 text-base">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:adelvillarl@unicartagena.edu.co"
                    className="text-blue-500 underline hover:text-blue-700 transition"
                  >
                    adelvillarl@unicartagena.edu.co
                  </a>
                </div>
              </div>
            </div>
            {/* Card Autor 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 flex flex-col md:flex-row gap-4 items-center w-full max-w-xl">
              <div className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-xl font-bold">
                A2
              </div>
              <div className="flex-1">
                <div className="font-bold text-lg mb-1">Carlos Mario López Medina</div>
                <div className="text-green-600 text-base mb-1">Desarrollador Full Stack</div>
                <div className="text-gray-600 text-base mb-2">
                  Estudiante de séptimo semestre de ingeniería de software de la universidad de Cartagena 
                </div>
                <div className="text-gray-500 text-base">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:clopezm2@unicartagena.edu.co"
                    className="text-green-500 underline hover:text-green-700 transition"
                  >
                    clopezm2@unicartagena.edu.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131c2b] text-white text-center py-6 text-base">
        © 2024 ProductHub. Todos los derechos reservados.
      </footer>
    </div>
  )
}
