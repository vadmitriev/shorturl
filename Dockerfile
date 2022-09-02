FROM node
WORKDIR /shorturl
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production
COPY . .
EXPOSE 80
RUN npm run build
CMD ["npm", "start"]