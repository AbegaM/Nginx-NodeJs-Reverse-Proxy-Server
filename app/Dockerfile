# pull the Node.js Docker image
FROM node:alpine

# create the directory inside the container
WORKDIR /usr/src/app

# copy the package.json files from the local machine to the workdir in container
COPY package.json ./

# run npm install in our local machine
RUN npm install

# copy the generated modules and all other files to the container
COPY . .

# our app is running in port 5001 within the container, so we need to expose it
EXPOSE 5001

# run the app
CMD ["npm", "start"]