# 🚀 ProductHub App - Gestión de Productos  

## Descripción:

ProductHub es una aplicación web diseñada para la gestión integral de productos.  
Permite a los usuarios registrarse, iniciar sesión y administrar un catálogo de productos (crear, leer, actualizar y eliminar productos.  
Incluye autenticación de usuarios y una interfaz moderna e intuitiva.

---

## Autores:

    •	Arturo Del Villar López
    •	Carlos Mario López Medina

---

## Tecnologías empleadas:

    •	Next.js: Framework principal para el desarrollo de la aplicación web.
    •	React: Biblioteca para la construcción de interfaces de usuario.
    •	TypeScript: Tipado estático para mayor robustez en el código.
    •	Tailwind CSS: Utilizado para el diseño y estilos responsivos.
    •	Lucide React: Iconografía moderna.
    •	LocalStorage: Persistencia de usuarios y productos en el navegador (modo demo, sin backend).
    •	PostCSS & Autoprefixer: Procesamiento de CSS.

---

## Estructura del proyecto:

    project/
    │
    ├── app/                  # Páginas principales (Next.js App Router)
    │   ├── layout.tsx        # Layout global
    │   ├── globals.css       # Estilos globales (Tailwind)
    │   ├── page.tsx          # Página principal (Home)
    │   ├── login/            # Página de inicio de sesión
    │   ├── register/         # Página de registro de usuario
    │   └── dashboard/        # Panel de gestión de productos
    │
    ├── components/           # Componentes reutilizables
    │   └── ui/               # Componentes UI (botones, inputs, cards, etc.)
    │
    ├── public/               # Archivos estáticos (imágenes, favicon, etc.)
    ├── package.json          # Dependencias y scripts del proyecto
    ├── tailwind.config.js    # Configuración de Tailwind CSS
    ├── postcss.config.js     # Configuración de PostCSS
    ├── tsconfig.json         # Configuración de TypeScript
    └── .gitignore            # Archivos y carpetas ignorados por git

---

## Arquitectura:

El sistema del proyecto utiliza una arquitectura basada en componentes, propia de aplicaciones desarrolladas con Next.js y React. Esto significa que la aplicación está estructurada en módulos independientes y reutilizables (componentes), cada uno encargado de una funcionalidad específica de la interfaz de usuario.

Además, sigue el patrón Single Page Application (SPA), donde la navegación y la gestión de estados se realizan principalmente en el lado del cliente, aunque Next.js permite el renderizado del lado del servidor (SSR) para mejorar el rendimiento y SEO.  

No utiliza una arquitectura cliente-servidor tradicional con backend propio, ya que la persistencia de datos se maneja en el LocalStorage del navegador.

---

## ¿Cómo ejecutarlo desde VSCode?

    Para ejecutar el proyecto desde vscode, se necesita tener instalado previamente Node.js en el equipo.  
    Luego:

1.	Clonar el repositorio desde GitHub
    - _git clone https://github.com/KennyRodMad/project.git_
    - _cd producthub_

2.	Abrir el proyecto en Visual Studio Code
    - Desde la terminal:
        - _code ._
    - O abre VSCode y selecciona "Abrir carpeta".
    
3.	Instalar las dependencias necesarias
    - _npm install_

4.	Ejecutar la aplicación en modo desarrollo
    - _npm run dev_  
    Esto levantará el servidor en http://localhost:3000.
    
5.	(Opcional) Compilar para producción
    - _npm run build_
    - _npm start_

---

## Notas

    •	No requiere base de datos ni backend para pruebas, ya que usa LocalStorage.
    •	Puedes modificar los estilos fácilmente usando Tailwind CSS.
    •	El código está organizado para facilitar la escalabilidad y el mantenimiento.

---

## Diseño y Descripción del flujo de navegación del usuario

El recorrido del usuario a través del sistema está compuesto por una serie de interfaces conectadas que guían de forma intuitiva la interacción, desde el acceso inicial hasta el cierre de sesión. A continuación, se detalla cada etapa del proceso:


### 1. Página principal (inicio del sitio)

El primer punto de contacto del usuario es la página de bienvenida. Desde aquí se puede iniciar sesión o proceder con el registro. El usuario encontrará:

- Acceso al registro de cuenta mediante un botón que lo dirige a un formulario para ingresar sus datos personales. Tras completar el formulario y enviarlo, el sistema muestra un mensaje de éxito que indica que la cuenta ha sido creada.
- Opción de inicio de sesión, que redirige al formulario de autenticación si el usuario ya está registrado.

Además, se incluye una sección informativa con detalles sobre los autores del sistema y sus correos, así como un pie de página con derechos reservados.

![Imagen de la Página Principal](/public/img/1.%20Página%20de%20Inicio.png)
![Imagen de la Página Principal](/public/img/2.%20Página%20de%20Inicio.png)



### 2. Registro de nuevo usuario

El usuario debe completar un formulario con los campos requeridos. Si la operación es válida, el sistema confirmará el registro con un mensaje y dará la opción de iniciar sesión.

![Imagen de Registro de Usuario](/public/img/3.%20Formulario%20de%20registro%20de%20usuario.png)


### 3. Inicio de sesión

Desde esta pantalla, el usuario puede ingresar al sistema mediante su nombre de usuario y contraseña. En caso de autenticación exitosa, será dirigido automáticamente al panel de usuario.

![Imagen de Inicio de Sesión](/public/img/4.%203.%20Formulario%20de%20inicio%20de%20sesión.png)



### 4. Panel de usuario autenticado

Una vez dentro del sistema, el usuario accede a su área principal. Desde aquí puede:

- Ver la lista de productos registrados en el sistema.
- Acceder al formulario para registrar un nuevo producto.
- Cerrar sesión.

Cada acción está disponible mediante botones o enlaces visibles dentro del panel.

![Imagen del Panel de Usuario](/public/img/5.%20Panel%20de%20usuario%20logueado.png)



### 5. Agregar un nuevo producto

Al elegir la opción para agregar producto, se presenta un formulario que solicita:

- Nombre del producto
- Descripción
- Precio
- Imagen (archivo)

Luego de enviar los datos, el sistema responde con un mensaje de éxito y recarga el catálogo actualizado.

![Imagen de Agregar Producto](/public/img/6,%20Agregando%20datos%20de%20producto.png)



### 6. Visualización y gestión del catálogo

El usuario puede ver en esta sección todos los productos previamente registrados. Cada entrada incluye opciones para:

- Editar la información del producto.
- Eliminar el producto. Esta acción requiere confirmación previa, y al aceptarse, el sistema muestra un mensaje informando que la eliminación fue exitosa.

![Imagen de Gestión del Catálogo](/public/img/7.%20visualizando%20lista%20de%20productos%20ingresados.png)
![Imagen de Eliminación de Producto del Catálogo](/public/img/8.%20Eliminación%20de%20producto.png)


### 7. Cierre de sesión

Al hacer clic en el botón correspondiente, el usuario recibe un mensaje de despedida y es redirigido nuevamente a la página de inicio.

![Imagen de Gestión del Catálogo](/public/img/9.%20Cerrando%20sesión.png)


