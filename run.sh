if [[ "$1" == "local" ]];
then
    docker-compose -f ./Docker/docker-compose.$1.yml up 
else
    docker-compose -f ./Docker/docker-compose.$1.yml up --detach 
fi