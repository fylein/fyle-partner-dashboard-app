# base image
FROM node:23-slim as build

RUN apt-get update && apt-get install nginx vim -y --no-install-recommends git

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --production

# add app
COPY . /app

# generate build
RUN npm run build

############
### prod ###
############

# base image
FROM nginx

# copy artifact build from the 'build environment'
COPY --from=build /app/dist/fyle-partner-dashboard-app /usr/share/nginx/html

COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/run.sh ./

#================================================================
# Set default GID if not provided during build
#================================================================
ARG SERVICE_GID=1001

#================================================================
# Setup non-root user and permissions
#================================================================
RUN groupadd -r -g ${SERVICE_GID} partner_app_service && \
    useradd -r -g partner_app_service partner_app_user && \
    chown -R partner_app_user:partner_app_service /usr/share/nginx/html /etc/nginx/nginx.conf /run.sh /var/cache/nginx

# Switch to non-root user
USER partner_app_user

# expose port 5050
EXPOSE 5050

# run nginx
CMD bash run.sh