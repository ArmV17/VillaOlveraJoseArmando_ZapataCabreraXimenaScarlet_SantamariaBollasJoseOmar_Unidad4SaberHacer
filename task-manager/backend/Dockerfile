# Usamos la imagen oficial de Node.js
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json primero (para instalar dependencias)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos todo el código al contenedor
COPY . .

# Exponemos el puerto del backend
EXPOSE 5000

# Comando para iniciar el servidor
CMD ["node", "server.js"]
