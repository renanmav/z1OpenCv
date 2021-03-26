# taken from https://github.com/brainhubeu/react-native-opencv-tutorial/blob/master/downloadAndInsertOpenCV.sh

# ios
version=3.4.11
base_url=https://razaoinfo.dl.sourceforge.net/project/opencvlibrary/${version}/

apt-get install wget

wget ${base_url}/opencv-${version}-ios-framework.zip
unzip -a opencv-${version}-ios-framework.zip
cd ios
cp -r ./../opencv2.framework ./
cd ..
rm -rf opencv-${version}-ios-framework.zip
rm -rf opencv2.framework/

# android

wget ${base_url}/opencv-${version}-android-sdk.zip
unzip opencv-${version}-android-sdk.zip
cd android/openCVLibrary3411/src/main
mkdir jniLibs
cp -r ./../../../../OpenCV-android-sdk/sdk/native/libs/ ./jniLibs
cd ../../../../
rm -rf opencv-${version}-android-sdk.zip
rm -rf OpenCV-android-sdk/
