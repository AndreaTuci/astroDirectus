FROM node:lts
WORKDIR /app
COPY app/package*.json ./
RUN npm install
CMD ["npm", "run", "dev"]