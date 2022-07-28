# Description
# @Author : Jaeseong Lee, lee01042000@gmail.com
#
# If you run this script, client and server code will be builded for deployment,
# And create docker image with deployment file. Once your build success, you can check
# images with `docker images` command.
# 
# If your code changed and want to update content to docker images, please use this script one more.
# You don't have to run this script each time you run docker. You can do it with run.sh script

# check argument
if [ $# -ne 1 ]
  then
    echo "Invalid arguement supplied, Please insert [local,dev or prod] for build option"
    echo "For detail about options, please check README.md"
    exit -1
fi
if [[ "$1" = prod ]]
  then
    echo '이 옵션을 이용하면 도커만 설치되어 있는 환경에서 이미지를 빌드 할 수 있습니다, 빌드용 이미지 내부에서 빌드를 진행하기 때문에 local 옵션보다 느릴 수 있습니다.'
    docker-compose -f ./Docker/docker-compose.prod.yml build --no-cache
    exit 0
fi
if [[ "$1" = local ]]
  then
    echo '이 옵션은 호스트에서 클라이언트, 벡엔드 파일 빌드를 수행한 후에 도커 이미지를 생성합니다. 따라서 README.m에 맞춰 nodeJS, yarn, JDK가 설치되어 있어야 합니다.'
fi
# 1. build front resource bundle
echo "----------1. build front resource bundle--------------"
echo "If building process failed in this stage, Please check client code or configuration"
cd ./client/clinical-trial-system
yarn install
yarn build:$1

#2. build spring boot server to jar
echo "----------2. build spring boot server to jar--------------"
echo "If building process failed in this stage, Please check server code or configuration"
cd ../../server/clinical-trial-system
rm -rf build/dependency
chmod +x ./gradlew
./gradlew build -x test #-Pprofile=$1
mkdir -p build/dependency
cd build/dependency
jar_path=`ls ../libs/*-SNAPSHOT.jar 2> /dev/null`
jar xf ${jar_path} 

# 3. build single docker image, we will split later for scale out
echo "---------3. build single docker image, we will split later for scale out--------"
echo "If building process failed in this stage, Please check docker is running or version based on README.md "
cd ../../../..

docker-compose -f ./Docker/docker-compose.$1.yml build --no-cache
docker image prune -f
