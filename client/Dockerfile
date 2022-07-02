FROM nginx:1.23.0

RUN mkdir /app
WORKDIR /app
RUN mkdir ./build
ADD ./clinical-trial-system/dist ./build

RUN rm /etc/nginx/conf.d/default.conf
COPY ./Nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]