FROM node:lts-alpine
ENV NODE_ENV=production
LABEL maintainer="Traven" \
      description="A basic docker container" \
      cohort="Cohort 19" \
      animal="Tiger"
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "app.js"]