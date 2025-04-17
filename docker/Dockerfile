FROM artifacts.tango.net:6550/nginx:1.25.0

# Create working directory
RUN mkdir -p /opt/lwc
WORKDIR /opt/lwc

# Fill container with content
COPY build/release/ .
RUN chown -R nginx.nginx .

# Remove default Nginx configuration so we are sure that always use mounted at /appconfigs configuration
# Create symlink as k8 can't update file mounted in place
RUN rm -f /etc/nginx/nginx.conf && \
    ln -sf /appconfigs/local.properties ./local.properties

EXPOSE 80/tcp
EXPOSE 443/tcp
EXPOSE 8080/tcp

CMD ["nginx", "-c", "/appconfigs/nginx.conf", "-g", "daemon off;"]