import React from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import allParkingPlaces from '../data/allParkingPlaces.json'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYWd1dGllcnJlenIiLCJhIjoiY2wwM3l2c3QzMDhvNTNqb2d2bWc2eWVrdCJ9.CrtbBZvdz8bEzFtDv4y2zw'

export const Map = () => {
  return (
    <div>
      <ReactMapGl
        initialViewState={{
          latitude: 52.205276,
          longitude: 0.119167,
          zoom: 14,
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/agutierrezr/cl045dpgn002c14qxhfr0z73u"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {allParkingPlaces.length !== 0 &&
          allParkingPlaces.map((station) => (
            <Marker
              key={station.id}
              longitude={station.lon}
              latitude={station.lat}
              color="red"
            />
          ))}
      </ReactMapGl>
    </div>
  )
}
