FROM mhart/alpine-node:12

COPY . /opt/app/

WORKDIR /opt/app/

RUN npm ci && npm run build

EXPOSE 3000

CMD ["node", "dist/main" ]

