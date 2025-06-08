"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
// If the Button component exists elsewhere, update the import path accordingly, for example:
import { Button } from "../../components/ui/button"
// Or create the file at src/components/ui/button.tsx if it doesn't exist.
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Alert, AlertDescription } from "../../components/ui/alert"
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    // Validaciones
    if (!formData.name || !formData.email || !formData.password) {
      setMessage("Todos los campos son obligatorios")
      setIsSuccess(false)
      setIsLoading(false)
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Las contraseñas no coinciden")
      setIsSuccess(false)
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres")
      setIsSuccess(false)
      setIsLoading(false)
      return
    }

    // Simular registro
    setTimeout(() => {
      try {
        // Obtener usuarios existentes
        const existingUsers = JSON.parse(localStorage.getItem("users") || "[]")

        // Verificar si el email ya existe
        if (existingUsers.find((user: any) => user.email === formData.email)) {
          setMessage("Este email ya está registrado")
          setIsSuccess(false)
          setIsLoading(false)
          return
        }

        // Crear nuevo usuario
        const newUser = {
          id: Date.now().toString(),
          name: formData.name,
          email: formData.email,
          password: formData.password, // En producción, esto debería estar hasheado
        }

        // Guardar usuario
        existingUsers.push(newUser)
        localStorage.setItem("users", JSON.stringify(existingUsers))

        setMessage("¡Usuario registrado con éxito!")
        setIsSuccess(true)
        setIsLoading(false)

        // Redireccionar después de 2 segundos
        setTimeout(() => {
          router.push("/login")
        }, 2000)
      } catch (error) {
        setMessage("Error al registrar usuario")
        setIsSuccess(false)
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Crear Cuenta</CardTitle>
            <CardDescription>Ingresa tus datos para registrarte en ProductHub</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Repite tu contraseña"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
              </div>

              {message && (
                <Alert className={isSuccess ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                  {isSuccess ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  )}
                  <AlertDescription className={isSuccess ? "text-green-800" : "text-red-800"}>
                    {message}
                  </AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Registrando..." : "Registrarse"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                Inicia sesión
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
