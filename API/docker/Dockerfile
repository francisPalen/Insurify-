#get a base image
FROM golang:latest

WORKDIR /go/src/app
COPY . .

RUN go get -d -v
RUN go build -v

CMD ["./docker-golang-example"]