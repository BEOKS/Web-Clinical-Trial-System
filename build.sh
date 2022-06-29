# check argument
if [ $# -ne 1 ]
  then
    echo "Invalid arguement supplied, Please insert [local,dev or prod] for build option"
    echo "For detail about options, please check README.md"
    exit -1
fi
# 1. build front resource bundle
cd ./client/clinical-trial-system
yarn install
yarn build:$1

#2. build spring boot server to jar
cd ../../server/clinical-trial-system
rm -rf build/dependency
chmod +x ./gradlew
./gradlew build -x test #-Pprofile=$1
mkdir -p build/dependency
cd build/dependency
jar_path=`ls ../libs/*-SNAPSHOT.jar 2> /dev/null`
jar xf ${jar_path} 

# 3. build single docker image, we will split later for scale out
cd ../../../..

docker-compose -f ./Docker/docker-compose.$1.yml build --no-cache
docker image prune -f
