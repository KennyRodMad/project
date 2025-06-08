"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { ShoppingBag, Users, Star, ArrowRight } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Bienvenido a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ProductHub
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Tu plataforma integral para gestionar productos de manera eficiente. Registra, organiza y administra tu
              catálogo de productos con facilidad.
            </p>
          </div>

          {/* Feature Cards */}
          <div
            className={`mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <ShoppingBag className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Gestión de Productos</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Administra tu inventario con herramientas completas de CRUD
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 delay-100">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Sistema de Usuarios</h3>
                <p className="mt-2 text-sm text-gray-600">Registro e inicio de sesión seguro para todos los usuarios</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 delay-200">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Interfaz Intuitiva</h3>
                <p className="mt-2 text-sm text-gray-600">Diseño moderno y fácil de usar para una mejor experiencia</p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div
            className={`mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Link href="/register">
              <Button size="lg" className="group w-full sm:w-auto">
                Registrarse
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sobre Nosotros</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Conoce al equipo detrás de ProductHub</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    A1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Autor 1</h3>
                    <p className="text-blue-600">Desarrollador Full Stack</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  Especialista en desarrollo web con experiencia en React, Next.js y bases de datos. Apasionado por
                  crear soluciones eficientes y escalables.
                </p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    <strong>Email:</strong> autor1@producthub.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl">
                    A2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Autor 2</h3>
                    <p className="text-green-600">Diseñador UX/UI</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  Experto en diseño de interfaces y experiencia de usuario. Enfocado en crear productos digitales
                  intuitivos y atractivos.
                </p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    <strong>Email:</strong> autor2@producthub.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 ProductHub. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
