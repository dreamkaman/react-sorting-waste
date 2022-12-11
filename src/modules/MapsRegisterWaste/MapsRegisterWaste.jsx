import { useState, useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styles from './MapsRegisterWaste.module.scss';
import PlacesInput from "pages/FindServicePage/modules/PlacesInput";
import GetLocationButton from "pages/FindServicePage/modules/GetLocationButton";

const mapOptions = {
  zoom: 6,
  scrollwheel: false,
  keyboardShortcuts: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

const MapsRegisterWaste = ({setLongitude, setLatitude, country}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB_tBgq4Xx9rd2MIyiYTsq4oFMy9aSM3GI",
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading maps...</div>;
  return <Map setLongitude={ setLongitude } setLatitude={ setLatitude } country={ country }/>;
};

function Map({setLongitude, setLatitude, country}) {

  const [selected, setSelected] = useState(null);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));

  // eslint-disable-next-line no-undef
  const geocoder = new google.maps.Geocoder();

   /** @type React.MutableRefObject<HTMLInputElement> */
   const originRef = useRef();

  const handleOnMapClick = (coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setSelected({ lat, lng });

    setLongitude(lng);
    setLatitude(lat);
  };

  return (
    <>
      <GoogleMap
        options={mapOptions}
        mapContainerClassName={styles.map}
        onClick={handleOnMapClick}
        onLoad={(map) => {
          geocoder.geocode( {'address': country}, function(results, status) {
            if (status == 'OK') {
              map.setCenter(results[0].geometry.location);
            } else {
              alert('Geocode was not successful for the following reason: ' + status);
              return;
            }
          })
            setMap(map);
        }}
        className={styles.map}
      >
        <div className={styles.mapTools}>
          <PlacesInput setSelected={setSelected} originRef={originRef} map={map}/>
        </div>
        {selected && <MarkerF position={selected} />}
        <GetLocationButton map={map} setSelected={setSelected}/>
      </GoogleMap>
    </>
  )
}

export default MapsRegisterWaste