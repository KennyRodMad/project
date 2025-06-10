"use client"

import Link from "next/link"
import { ShoppingBag, Users, Star, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eef3fd]">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 py-6 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold">ProductHub</span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-4">
        <h1 className="text-6xl font-extrabold text-center mt-16 mb-4 leading-tight">
          Bienvenido a <span className="text-blue-600">ProductHub</span>
        </h1>
        <p className="text-lg text-gray-600 text-center mt-2 mb-12 max-w-2xl">
          Tu plataforma integral para gestionar productos de manera eficiente.
          Registra, organiza y administra tu catálogo de productos con facilidad.
        </p>

        {/* Características */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow p-8 w-80 flex flex-col items-center mx-auto">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <ShoppingBag className="h-10 w-10 text-blue-600" />
            </div>
            <div className="font-bold text-xl mb-2">Gestión de Productos</div>
            <div className="text-gray-500 text-base text-center">
              Administra tu inventario con herramientas completas de CRUD
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 w-80 flex flex-col items-center mx-auto">
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <Users className="h-10 w-10 text-green-600" />
            </div>
            <div className="font-bold text-xl mb-2">Sistema de Usuarios</div>
            <div className="text-gray-500 text-base text-center">
              Registro e inicio de sesión seguro para todos los usuarios
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 w-80 flex flex-col items-center mx-auto">
            <div className="bg-purple-100 rounded-full p-4 mb-4">
              <Star className="h-10 w-10 text-purple-600" />
            </div>
            <div className="font-bold text-xl mb-2">Interfaz Intuitiva</div>
            <div className="text-gray-500 text-base text-center">
              Diseño moderno y fácil de usar para una mejor experiencia
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link href="/register" className="flex-1">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition w-full flex items-center justify-center gap-2">
              Registrarse
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
          <Link href="/login" className="flex-1">
            <button className="bg-white border border-gray-300 text-black px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition w-full flex items-center justify-center gap-2">
              Iniciar Sesión
            </button>
          </Link>
        </div>

        {/* Sobre nosotros */}
        <section className="w-full max-w-5xl mt-10 mb-10">
          <h2 className="text-3xl font-bold mb-2 text-center">Sobre Nosotros</h2>
          <p className="text-gray-600 text-center mb-8">
            Conoce al equipo detrás de ProductHub
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-white rounded-2xl shadow p-8 flex gap-6 items-center flex-1">
              <div className="bg-blue-500 text-white w-20 h-20 flex items-center justify-center rounded-full text-3xl font-bold">
                A1
              </div>
              <div>
                <div className="font-bold text-lg">Autor 1</div>
                <div className="text-blue-600 text-base mb-1">
                  Desarrollador Full Stack
                </div>
                <div className="text-gray-500 text-base mb-2">
                  Especialista en desarrollo web con experiencia en React, Next.js y
                  bases de datos. Apasionado por crear soluciones eficientes y
                  escalables.
                </div>
                <div className="text-gray-400 text-base">
                  <span className="font-semibold">Email:</span> autor1@producthub.com
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-8 flex gap-6 items-center flex-1">
              <div className="bg-green-500 text-white w-20 h-20 flex items-center justify-center rounded-full text-3xl font-bold">
                A2
              </div>
              <div>
                <div className="font-bold text-lg">Autor 2</div>
                <div className="text-green-600 text-base mb-1">
                  Diseñador UX/UI
                </div>
                <div className="text-gray-500 text-base mb-2">
                  Experto en diseño de interfaces y experiencia de usuario. Enfocado
                  en crear productos digitales intuitivos y atractivos.
                </div>
                <div className="text-gray-400 text-base">
                  <span className="font-semibold">Email:</span> autor2@producthub.com
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#131c2b] text-white text-center py-4 text-sm">
        © 2024 ProductHub. Todos los derechos reservados.
      </footer>
    </div>
  )
}
