import {useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

const markersArray = [
  {lat: 0, lon: 0},
  {lat: 0.5, lon: 0.5},
  {lat: 1, lon: 1},
  {lat: 1.5, lon: 1.5},
  {lat: 2, lon: 2},
  {lat: 2.5, lon: 2.5},
];

const MapScreen = () => {
  const mapRef = useRef(null);

  const renderMarkers = () => {
    return markersArray.map((item, index) => {
      return (
        <Marker coordinate={{latitude: item.lat, longitude: item.lon}}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: 'red',
            }}>
            <Text>a</Text>
          </View>
        </Marker>
      );
    });
  };

  //37.3346437,-122.0138429
  return (
    <View style={{flex: 1}}>
      <Text>maps</Text>

      <MapView
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{flex: 1}}
        ref={mapRef}
        showsUserLocation
        showsMyLocationButton>
        {renderMarkers()}
      </MapView>
      <TouchableOpacity
        onPress={() => {
          console.log('sdsdf');
          mapRef.current.animateToRegion({
            latitude: 37.3346437,
            longitude: -122.0138429,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          });
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
