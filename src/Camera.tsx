import React, {useRef} from 'react';
import {Pressable, Platform, Alert} from 'react-native';
import {CameraKitCamera} from 'react-native-camera-kit';
import {readFile} from 'react-native-fs';

import OpenCV from './OpenCV';

export default function Camera() {
  const ref = useRef();

  const onPress = async () => {
    try {
      if (!ref.current) {
        return;
      }

      const {uri} = await ref.current.capture(
        Platform.OS === 'ios' ? {saveToCameraRoll: false} : false,
      );

      const base64 = await readFile(uri, 'base64');

      const isBlurry = await OpenCV.checkForBlurryImage(base64);

      Alert.alert('isBlurry: ' + String(isBlurry));
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  return (
    <Pressable style={{flex: 1}} onPress={onPress}>
      <CameraKitCamera
        ref={ref}
        style={{flex: 1}}
        focusMode="on"
        saveToCameraRoll={false}
      />
    </Pressable>
  );
}
