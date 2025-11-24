# Etapa 1: construir la app
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: servir la app con nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copiamos configuración de Nginx si tienes custom
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
