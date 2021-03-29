import {NativeModules} from 'react-native';

interface OpenCV {
  checkForBlurryImage(imageAsBase64: string): Promise<boolean>;
}

export default NativeModules.RNOpenCvLibrary as OpenCV;
