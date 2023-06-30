DOMAIN=$1
cd ../server
docker build -t qiji-$DOMAIN-test -f ../deployment/$DOMAIN/Dockerfile .
# docker build -t zhangzhulei/$DOMAIN -f ../deployment/$DOMAIN/Dockerfile .