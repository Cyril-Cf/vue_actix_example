FROM node:latest
RUN npm install -g create-vue 
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5173
ENTRYPOINT [ "npm", "run", "dev" ]