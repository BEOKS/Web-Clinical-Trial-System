if [ $# -ne 1 ]
  then
    echo "Invalid arguemnt supplied, Please insert [local,dev or prod] for run option"
    echo "For detail about options, please check README.md"
    exit -1
fi

if [[ "$1" == "local" ]];
then
    docker-compose -f ./Docker/docker-compose.$1.yml up --force-recreate
else
    docker-compose -f ./Docker/docker-compose.$1.yml up --detach 
fi