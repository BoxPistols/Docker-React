FROM node:14.4.0-alpine3.10

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

# New
COPY ./frontend /frontend
WORKDIR /frontend
RUN yarn install
EXPOSE 3000
ENV CI true
CMD yarn run start

# Old
# WORKDIR /usr/src/app
