import React, { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import allStations from '../data/pollution.json'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYWd1dGllcnJlenIiLCJhIjoiY2wwM3l2c3QzMDhvNTNqb2d2bWc2eWVrdCJ9.CrtbBZvdz8bEzFtDv4y2zw'

console.log(allStations)

export const Map = () => {
  const [hour, sethHour] = useState('11:00:00')

  const filteredStation = allStations.filter((station) => station.time === hour)

  console.log(filteredStation)

  function perc2color(perc) {
    console.log({ perc })
    let r,
      g,
      b = 0
    if (perc < 50) {
      r = 255
      g = Math.round(5.1 * perc)
    } else {
      g = 255
      r = Math.round(510 - 5.1 * perc)
    }
    let h = r * 0x10000 + g * 0x100 + b * 0x1

    console.log('#' + ('000000' + h.toString(16)).slice(-6))

    return '#' + ('000000' + h.toString(16)).slice(-6)
  }

  return (
    <div>
      <ReactMapGl
        initialViewState={{
          latitude: 40.416775,
          longitude: -3.70379,
          zoom: 14,
        }}
        scrollZoom={false}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          key={allStations[0].id}
          longitude={allStations[0].lon}
          latitude={allStations[0].lat}
          color="red"
        >
          <div className="circle"></div>
        </Marker>
        {filteredStation.map((station) => (
          <Marker
            key={station.id}
            longitude={station.lon}
            latitude={station.lat}
            color="red"
          >
            <div
              className="circle"
              style={{
                backgroundColor: perc2color(station.pollution_rate * 100),
              }}
            ></div>
          </Marker>
        ))}
      </ReactMapGl>
    </div>
  )
}
