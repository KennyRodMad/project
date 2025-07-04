"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Alert, AlertDescription } from "../../components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Plus, Package, LogOut, Edit, Trash2, CheckCircle, AlertCircle, DollarSign } from "lucide-react"
import { cn, badgeVariants } from "../../components/ui/badge"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  })
  const [productToDelete, setProductToDelete] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Verificar autenticación
    const currentUser = localStorage.getItem("currentUser")
    if (!currentUser) {
      router.push("/login")
      return
    }

    setUser(JSON.parse(currentUser))

    // Cargar productos
    const savedProducts = localStorage.getItem("products")
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    setMessage("¡Hasta luego! Sesión cerrada exitosamente.")
    setIsSuccess(true)

    setTimeout(() => {
      router.push("/")
    }, 2000)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result
        if (typeof result === "string") {
          setFormData({ ...formData, image: result })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.description || !formData.price) {
      setMessage("Todos los campos son obligatorios")
      setIsSuccess(false)
      return
    }

    const productData = {
      id: editingProduct ? editingProduct.id : Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: Number.parseFloat(formData.price),
      image: formData.image || "/placeholder.svg?height=200&width=200",
    }

    let updatedProducts
    if (editingProduct) {
      updatedProducts = products.map((p) => (p.id === editingProduct.id ? productData : p))
      setMessage("¡Producto actualizado con éxito!")
    } else {
      updatedProducts = [...products, productData]
      setMessage("¡Producto agregado con éxito!")
    }

    setProducts(updatedProducts)
    localStorage.setItem("products", JSON.stringify(updatedProducts))

    setIsSuccess(true)
    setShowAddForm(false)
    setEditingProduct(null)
    setFormData({ name: "", description: "", price: "", image: "" })

    setTimeout(() => setMessage(""), 3000)
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      image: product.image,
    })
    setShowAddForm(true)
  }

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((p) => p.id !== productId)
    setProducts(updatedProducts)
    localStorage.setItem("products", JSON.stringify(updatedProducts))
    setMessage("Producto eliminado con éxito")
    setIsSuccess(true)
    setProductToDelete(null) // Cierra el diálogo
    setTimeout(() => setMessage(""), 3000)
  }

  const resetForm = () => {
    setFormData({ name: "", description: "", price: "", image: "" })
    setEditingProduct(null)
    setShowAddForm(false)
  }

  if (!user) {
    return <div>Cargando...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Package className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">ProductHub</h1>
                <p className="text-sm text-gray-500">Panel de administración</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
  <span className="h-4 w-4 text-gray-500 flex items-center mr-10">User</span>
  <span className="text-sm text-gray-700">{user.name}</span>
</div>
              <Button variant="outline" onClick={handleLogout} className="flex items-center space-x-2">
                <LogOut className="h-4 w-4" />
                <span>Cerrar Sesión</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-4 lg:px-6"> {/* padding reducido */}
        {/* Success/Error Messages */}
        {message && (
          <Alert className={`mb-4 ${isSuccess ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}> {/* menos margen y padding */}
            {isSuccess ? (
              <CheckCircle className="h-3 w-3 text-green-600" />
            ) : (
              <AlertCircle className="h-3 w-3 text-red-600" />
            )}
            <AlertDescription className={isSuccess ? "text-green-800" : "text-red-800"}>{message}</AlertDescription>
          </Alert>
        )}

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3"> {/* menos espacio */}
          <Card>
            <CardContent className="p-4"> {/* padding reducido */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-600">Total Productos</p>
                  <p className="text-xl font-bold text-gray-900">{products.length}</p>
                </div>
                <Package className="h-6 w-6 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-600">Valor Total</p>
                  <p className="text-xl font-bold text-gray-900">
                    ${products.reduce((sum, p) => sum + p.price, 0).toFixed(2)}
                  </p>
                </div>
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-600">Usuario Activo</p>
                  <p className="text-base font-semibold text-gray-900">{user.name}</p>
                </div>
                <span className="h-6 w-6 text-purple-600">User</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-bold text-gray-900">Catálogo de Productos</h2>
          <Button onClick={() => setShowAddForm(true)} className="flex items-center space-x-2 text-base px-4 py-2">
            <Plus className="h-4 w-4" />
            <span>Agregar Producto</span>
          </Button>
        </div>

        {/* Add/Edit Product Form */}
        {showAddForm && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">{editingProduct ? "Editar Producto" : "Agregar Nuevo Producto"}</CardTitle>
              <CardDescription className="text-base">
                {editingProduct ? "Modifica los datos del producto" : "Completa la información del nuevo producto"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Nombre del producto</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej: iPhone 15 Pro"
                      required
                      className="h-9 text-base"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="price">Precio</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="0.00"
                      required
                      className="h-9 text-base"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe las características del producto..."
                    className="min-h-[60px] text-base"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="image">Imagen del producto</Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-base file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {formData.image && (
                    <div className="mt-1">
                      <img
                        src={formData.image || "/placeholder.svg"}
                        alt="Preview"
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                    </div>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button type="submit" className="text-base px-4 py-2">{editingProduct ? "Actualizar Producto" : "Agregar Producto"}</Button>
                  <Button type="button" variant="outline" onClick={resetForm} className="text-base px-4 py-2">
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Products Grid */}
        {products.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Package className="mx-auto h-8 w-8 text-gray-400" />
              <h3 className="mt-2 text-base font-semibold text-gray-900">No hay productos</h3>
              <p className="mt-1 text-gray-600">Comienza agregando tu primer producto al catálogo.</p>
              <Button onClick={() => setShowAddForm(true)} className="mt-3 text-base px-4 py-2">
                <Plus className="mr-2 h-4 w-4" />
                Agregar Producto
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden bg-blue-50 border border-blue-200">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-24 w-24 object-contain mx-auto mt-4 mb-2 rounded-md border"
                />
                <CardContent className="p-3 pt-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-base text-gray-900 truncate">{product.name}</h3>
                      <p className="mt-1 text-xs text-gray-600 line-clamp-2">{product.description}</p>
                      <div className="mt-2">
                        <Badge variant="secondary" className="text-base font-semibold">
                          ${product.price.toFixed(2)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(product)} className="flex-1 text-base">
                      <Edit className="mr-1 h-3 w-3" />
                      Editar
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="destructive" className="flex-1 text-base" onClick={() => setProductToDelete(product.id)}>
                          <Trash2 className="mr-1 h-3 w-3" />
                          Eliminar
                        </Button>
                      </DialogTrigger>
                      {productToDelete === product.id && (
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>¿Eliminar producto?</DialogTitle>
                            <DialogDescription>
                              Esta acción no se puede deshacer. El producto "{product.name}" será eliminado
                              permanentemente.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" onClick={() => setProductToDelete(null)}>Cancelar</Button>
                            <Button variant="destructive" onClick={() => handleDelete(product.id)}>
                              Eliminar
                            </Button>
                          </div>
                        </DialogContent>
                      )}
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

import * as React from "react"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className ?? ""}`}
      {...props}
    />
  )
)

Textarea.displayName = "Textarea"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export function Badge({ className, variant = "default", children, ...props }: React.PropsWithChildren<BadgeProps>) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}