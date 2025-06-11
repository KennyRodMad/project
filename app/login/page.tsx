"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
// Update the import path below if your Button component is located elsewhere, for example:
import { Button } from "../../components/ui/button"
// Or provide the correct relative path based on your project structure.
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Alert, AlertDescription } from "../../components/ui/alert"
import { ArrowLeft, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    // Validaciones
    if (!formData.email || !formData.password) {
      setMessage("Todos los campos son obligatorios")
      setIsLoading(false)
      return
    }

    // Simular login
    setTimeout(() => {
      try {
        // Obtener usuarios registrados
        const users = JSON.parse(localStorage.getItem("users") || "[]")

        // Buscar usuario
        const user = users.find((u: any) => u.email === formData.email && u.password === formData.password)

        if (user) {
          // Guardar sesión
          localStorage.setItem("currentUser", JSON.stringify(user))
          router.push("/dashboard")
        } else {
          setMessage("Email o contraseña incorrectos")
          setIsLoading(false)
        }
      } catch (error) {
        setMessage("Error al iniciar sesión")
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl"> {/* max-w-xl para card más ancha */}
        <div className="mb-8"> {/* más separación arriba */}
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium"> {/* texto más grande */}
            <ArrowLeft className="mr-2 h-5 w-5" /> {/* icono más grande */}
            Volver al inicio
          </Link>
        </div>

        <Card className="shadow-lg border-2 border-blue-100"> {/* borde más visible */}
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-3xl font-bold">Iniciar Sesión</CardTitle> {/* título más grande */}
            <CardDescription className="text-lg mt-2">Ingresa tus credenciales para acceder a ProductHub</CardDescription> {/* descripción más grande */}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6"> {/* más espacio entre campos */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">Email</Label> {/* label más grande */}
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-14 text-lg px-5" /* input más alto y texto grande */
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-base font-semibold">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Tu contraseña"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="h-14 text-lg px-5"
                />
              </div>

              {message && (
                <Alert className="border-red-200 bg-red-50 text-base py-4"> {/* alerta más grande */}
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <AlertDescription className="text-red-800">{message}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full h-14 text-lg font-bold" disabled={isLoading}>
                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Button>
            </form>

            <div className="mt-8 text-center text-base"> {/* texto más grande */}
              ¿No tienes una cuenta?{" "}
              <Link href="/register" className="text-blue-600 hover:text-blue-800 font-semibold">
                Regístrate
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
