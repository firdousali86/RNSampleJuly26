import {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapControl from '../../controls/MapControl';

const MapScreen = () => {
  const parentControlMapRef = useRef(null);

  //37.3346437,-122.0138429

  //animateToCustomLocation
  return (
    <View style={{flex: 1}}>
      <Text>maps</Text>
      <MapControl ref={parentControlMapRef} style={{flex: 1}} />
      <TouchableOpacity
        onPress={() => {
          parentControlMapRef.current.animateToCustomLocation({
            latitude: 38.5616184,
            longitude: -121.626236,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          });
          //   mapRef.current.animateToRegion({
          //     latitude: 37.3346437,
          //     longitude: -122.0138429,
          //     latitudeDelta: 0.015,
          //     longitudeDelta: 0.0121,
          //   });
        }}
        style={{
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 20,
          backgroundColor: 'red',
          height: 44,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;
