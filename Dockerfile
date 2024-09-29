# Use a imagem base do Node.js
FROM node:current-alpine

# Define o diretório de trabalho
WORKDIR /app

COPY . .

# Instala as dependências da aplicação (incluindo React)
RUN npm install

# Expondo a porta que o React usará
EXPOSE 3000

# Comando para iniciar a aplicação React
CMD ["npm", "start"]
