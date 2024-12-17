FROM node:18-bookworm-slim

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

USER 999

ENTRYPOINT ["npm", "run", "start"]
