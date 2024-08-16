FROM node:14-alpine
WORKDIR /app

COPY app.js /app

RUN npm install

EXPOSE 8000

ENV AUTHOR="Your Name"

CMD ["node", "app.js"]