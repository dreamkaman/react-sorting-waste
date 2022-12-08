import { useState, useRef } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styles from './MapsRegisterWaste.module.scss';
import PlacesInput from "pages/FindServicePage/modules/PlacesInput";
import GetLocationButton from "pages/FindServicePage/modules/GetLocationButton";

const mapOptions = {
  zoom: 8,
  center: {
    lat: 43.69,
    lng: -79.43,
  },
  scrollwheel: false,
  keyboardShortcuts: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

const MapsRegisterWaste = ({setLongitude, setLatitude}) => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB_tBgq4Xx9rd2MIyiYTsq4oFMy9aSM3GI",
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading maps...</div>;
  return <Map setLongitude={ setLongitude } setLatitude={ setLatitude }/>;
};

function Map({setLongitude, setLatitude}) {

  const [selected, setSelected] = useState(null);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));

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