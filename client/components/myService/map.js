import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Map({ geojsonData }) {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 23.6978,
    lng: 120.9605,
  };

  const mapOptions = {
    disableDefaultUI: true, // 去除默認介面
    zoomControl: true,
    clickableIcons: false, // 禁用可點擊圖示
    styles: [
      {
        featureType: 'administrative',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
    ],
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD9RHsF4cQD4gMbJ34PM2-81OetxSoOFWY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={7}
        center={defaultCenter}
        options={mapOptions}
      >
        {/* 在地圖上添加標記 */}
        {geojsonData && geojsonData.features.map((feature) => (
          <Marker
            key={feature.properties.id}
            position={{
              lat: feature.geometry.coordinates[1],
              lng: feature.geometry.coordinates[0],
            }}
            title={feature.properties.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
