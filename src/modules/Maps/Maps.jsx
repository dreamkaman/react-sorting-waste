import { useState, useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import CustomMarker from "../../images/map/Marker.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import servicesList from "../../pages/FindServicePage/services";
import styles from './Maps.module.scss';
import PlacesInput from "pages/FindServicePage/modules/PlacesInput";
import FilterDropdown from "pages/FindServicePage/modules/FilterDropdown";
import ServiceListDropdown from "pages/FindServicePage/modules/ServiceListDropdown";
import GetLocationButton from "pages/FindServicePage/modules/GetLocationButton";
import InfoCard from "pages/FindServicePage/modules/InfoCard";
import MakeOrderForm from "modules/MakeOrderForm";

const icon = {
  url: CustomMarker,
};

const mapOptions = {
  zoom: 8,
  center: {
    lat: 43.69,
    lng: -79.43,
  },
};

const Maps = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB_tBgq4Xx9rd2MIyiYTsq4oFMy9aSM3GI",
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading maps...</div>;
  return <Map />;
};

function Map() {

    const [services, setServices] = useState(servicesList);
    const [selected, setSelected] = useState(null);
    const [openMakeOrder, setOpenMakeOrder] = useState(false);
    const [currentService, setCurrentService] = useState(null);
    const [map, setMap] = useState(/** @type google.maps.Map */ (null));
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");
    const [infoCard, setInfoCard] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const [directionsService, setDirectionsService] = useState();
    const [directionsRenderer, setDirectionsRenderer] = useState();

    useEffect(() => {
        // eslint-disable-next-line no-undef
        setDirectionsService(new google.maps.DirectionsService());
        // eslint-disable-next-line no-undef
        setDirectionsRenderer(new google.maps.DirectionsRenderer({map: map, suppressMarkers: true}));
    }, [])

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef();

    const clearRoute = async () => {
        setDistance('');
        setDuration('');
        originRef.current.value = '';
        directionsRenderer.set('directions', null);
    }

    const calculateRoute = (destinationLatLng) => {
        if (!selected) return;
        directionsService?.route(
            {
                // eslint-disable-next-line no-undef
                origin: new google.maps.LatLng(selected.lat, selected.lng),
                // eslint-disable-next-line no-undef
                destination: new google.maps.LatLng(destinationLatLng.lat, destinationLatLng.lng),
                // eslint-disable-next-line no-undef
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === "OK" && result) {
                    directionsRenderer.setDirections(result);
                    setDistance(result.routes[0].legs[0].distance.text);
                    setDuration(result.routes[0].legs[0].duration.text);
                }
            }
        );
    };

    const handleOnMapClick = (coord) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        setSelected({ lat, lng });
    };

    return (
        <section className={styles.mapContainer}>
            <div className={styles.imageBlock}></div>
            <GoogleMap
                options={mapOptions}
                mapContainerClassName={styles.map}
                onClick={handleOnMapClick}
                onLoad={(map) => {
                    setMap(map);
                    directionsRenderer?.setMap(map);
                }}
            >
                {infoCard && <InfoCard service={ currentService } setInfoCard={ setInfoCard } setIsOpen={ setIsOpen }/>}
                    <div className={styles.mapTools}>
                        <div className={styles.navigation}> 
                            <PlacesInput setSelected={setSelected} originRef={originRef} map={map}/>
                            <div className={styles.inputs}>
                                <ServiceListDropdown 
                                    services={services} 
                                    destiantionRef={destiantionRef}
                                    calculateRoute={calculateRoute}/>
                            </div>
                            <div className={styles.buttons}>
                                <button type="submit" onClick={clearRoute}>
                                    Clear
                                </button>
                            </div>
                            <FilterDropdown servicesList={servicesList} setServices={setServices} selected={selected} map={map}/>
                    </div>
                    {(distance || duration) && 
                    <h4> <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/> Distance: {distance} <FontAwesomeIcon icon={faClock} className={styles.icon}/> Duration: {duration}</h4>}
                </div>
                {services.map((service) => {
                    return (
                    <div key={service.id}>
                        <MarkerF
                            position={service.position}
                            icon={icon}
                            className={styles.marker}
                            onClick={() => {
                                setInfoCard(true)
                                map.setCenter(service.position);
                                setCurrentService(service);
                            }}>
                        </MarkerF>
                        <InfoWindowF
                            position={service.position}
                            options={{
                                // eslint-disable-next-line no-undef
                                pixelOffset: new window.google.maps.Size(0, -40),
                            }}
                            >
                            <div className={styles.infoWindow}>
                                <FontAwesomeIcon icon={faStar} className={styles.star}/>
                                <p className={styles.infoWindow_title}>{service.rating}</p>
                            </div>
                        </InfoWindowF>
                    </div>
                    )
                })}
                {selected && <MarkerF position={selected} />}
                <GetLocationButton map={map} setSelected={setSelected}/>
            </GoogleMap>
            {isOpen && <MakeOrderForm setIsOpen={setIsOpen} service={ currentService }/>}
        </section>
    );
}

export default Maps;