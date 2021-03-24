# nerdy-quotes

## Run in Docker

1. Build the image
```
docker build -t nerdy-quotes:1.0 .
```

2. Run the image
```
docker run -d --name nerdy-quotes nerdy-quotes:1.0
```

3. Go to `http://localhost:3000`

## Stop container

```
docker container stop nerdy-quotes
```