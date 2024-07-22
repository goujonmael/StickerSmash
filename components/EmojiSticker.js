import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function EmojiSticker({ imageSize, stickerSource }) {
  const scaleImage = useSharedValue(imageSize);
  const baseScale = useSharedValue(1);
  const pinchScale = useSharedValue(1);
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);
  const baseRotation = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scale.value !== 2) {
        scale.value = 2;
      } else {
        scale.value = 1;
      }
      scaleImage.value = imageSize * scale.value;
    });

  const pinch = Gesture.Pinch()
    .onStart(() => {
      baseScale.value = scale.value;
    })
    .onUpdate((event) => {
      pinchScale.value = event.scale;
      scale.value = baseScale.value * pinchScale.value;
      scaleImage.value = imageSize * scale.value;
    })
    .onEnd(() => {
      if (scale.value < 1) {
        scale.value = withSpring(1);
        scaleImage.value = withSpring(imageSize);
      }
    });

  const rotate = Gesture.Rotation()
    .onStart(() => {
      baseRotation.value = rotation.value;
    })
    .onUpdate((event) => {
      rotation.value = baseRotation.value + event.rotation;
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: scaleImage.value,
      height: scaleImage.value,
      transform: [
        { scale: scale.value },
        { rotate: `${rotation.value}rad` },
      ],
    };
  });

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  const hitboxSize = imageSize * 2; // taille de la hitbox

  return (
    <GestureDetector gesture={Gesture.Simultaneous(drag, pinch, rotate)}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.View
            style={{
              width: hitboxSize,
              height: hitboxSize,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Animated.Image
              source={stickerSource}
              resizeMode="contain"
              style={imageStyle}
            />
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
