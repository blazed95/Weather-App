FROM node:12
# Create app directory
WORKDIR /usr/src/app
# Copy all the package .json from our React project to the Docker container.
COPY package*.json ./ 
RUN npm install
COPY . .
CMD ["npm", "start"]