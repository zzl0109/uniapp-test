DOMAIN=$1
cd ../unpackage/dist/build/h5
docker build -t qiji-h5-test -f ../../../../deployment/h5/Dockerfile  .