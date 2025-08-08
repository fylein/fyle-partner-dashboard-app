# base image
FROM node:23-slim as build

RUN apt-get update && apt-get install nginx vim -y --no-install-recommends git

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --omit=dev

# add app
COPY . /app

# generate build
RUN npm run build

############
### prod ###
############

# base image
FROM nginx

#================================================================
# Set default GID if not provided during build
#================================================================
ARG SERVICE_GID=1001

#================================================================
# Setup non-root user and permissions
#================================================================
RUN groupadd -r -g ${SERVICE_GID} partner_app_service && \
    useradd -r -g partner_app_service partner_app_user

# copy artifact build from the 'build environment'
COPY --from=build /app/dist/fyle-partner-dashboard-app /usr/share/nginx/html

COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/run.sh ./

# Set proper permissions for nginx directories and files
RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run && \
    touch /var/run/nginx.pid && \
    chown -R partner_app_user:partner_app_service /usr/share/nginx/html && \
    chown -R partner_app_user:partner_app_service /var/cache/nginx && \
    chown -R partner_app_user:partner_app_service /var/log/nginx && \
    chown -R partner_app_user:partner_app_service /etc/nginx && \
    chown -R partner_app_user:partner_app_service /var/run/nginx.pid && \
    chown partner_app_user:partner_app_service /run.sh && \
    # Ensure nginx can read its configuration
    chmod -R 755 /etc/nginx && \
    # Ensure nginx can write to its cache and logs
    chmod -R 755 /var/cache/nginx && \
    chmod -R 755 /var/log/nginx && \
    chmod -R 755 /usr/share/nginx && \
    # Ensure nginx can write to its pid file
    chmod 755 /var/run/nginx.pid

# Switch to non-root user
USER partner_app_user

# expose port 80
EXPOSE 5050

# run nginx
CMD bash run.sh