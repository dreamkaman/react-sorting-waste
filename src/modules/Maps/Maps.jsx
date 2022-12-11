import { useState, useRef, useEffect } from "react";

import { useDispatch } from 'react-redux'

import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import CustomMarker from "../../images/map/Marker.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './Maps.module.scss';
import PlacesInput from "pages/FindServicePage/modules/PlacesInput";
import FilterDropdown from "pages/FindServicePage/modules/FilterDropdown";
import GetLocationButton from "pages/FindServicePage/modules/GetLocationButton";
import InfoCard from "pages/FindServicePage/modules/InfoCard";
import MakeOrderForm from "modules/MakeOrderForm";
import AddFeedbackForm from "modules/AddFeedbackForm";
import AskQuestionForm from "modules/AskQuestionForm";

import { getFilteredWastePointsOperation } from 'redux/wastePoints/wastePointsOperations';

const icon = {
  url: CustomMarker,
};

const mapOptions = {
  zoom:5,
  center: {
    lat: 48.293826316672195,
    lng: 25.551164406250017,
  },
  scrollwheel: false,
  keyboardShortcuts: false,
  mapTypeControl: false,
  fullscreenControl: false,
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

    const dispatch = useDispatch();

    const [selected, setSelected] = useState(null);
    const [currentWastepoint, setCurrentWastepoint] = useState(null);
    const [map, setMap] = useState(/** @type google.maps.Map */ (null));
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");
    const [infoCard, setInfoCard] = useState(false);
    const [isOpenOrder, setIsOpenOrder] = useState(false);
    const [isOpenFeedback, setIsOpenFeedback] = useState(false);
    const [isOpenQuestion, setIsOpenQuestion] = useState(false);
    
    const [directionsService, setDirectionsService] = useState();
    const [directionsRenderer, setDirectionsRenderer] = useState();

    const [wastepoints, setWastepoints] = useState([]);

    const fetchApi = async () => {
        const requestWastepoints = await dispatch(getFilteredWastePointsOperation());
        setWastepoints(requestWastepoints.payload.successObject);
    }

    useEffect(() => {
        // eslint-disable-next-line no-undef
        setDirectionsService(new google.maps.DirectionsService());
        // eslint-disable-next-line no-undef
        setDirectionsRenderer(new google.maps.DirectionsRenderer({map: map, suppressMarkers: true}));
        
        fetchApi();

    }, [])

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();

    const clearRoute = async () => {
        setDistance('');
        setDuration('');
        originRef.current.value = '';
        directionsRenderer.set('directions', null);
    }

    const calculateRoute = (latitude, longitude) => {
        if (!selected) return;
        directionsService?.route(
            {
                // eslint-disable-next-line no-undef
                origin: new google.maps.LatLng(selected.lat, selected.lng),
                // eslint-disable-next-line no-undef
                destination: new google.maps.LatLng(latitude, longitude),
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
            <div className={styles.imageBlock}>
                <p className={styles.title}>SEARCH. FIND. RECYCLE</p>
            </div>
            <GoogleMap
                options={mapOptions}
                mapContainerClassName={styles.map}
                onClick={handleOnMapClick}
                onLoad={(map) => {
                    setMap(map);
                    directionsRenderer?.setMap(map);
                }}
                className={styles.map}
            >
                {isOpenQuestion && <AskQuestionForm setIsOpenQuestion={setIsOpenQuestion} service={ currentWastepoint }/>}
                {infoCard && <InfoCard 
                    serviceId={ currentWastepoint.ecoServiceId } 
                    wastepoint={ currentWastepoint } 
                    setInfoCard={ setInfoCard } 
                    setIsOpenOrder={ setIsOpenOrder } 
                    setIsOpenQuestion={ setIsOpenQuestion }
                    setIsOpenFeedback={ setIsOpenFeedback } 
                    calculateRoute={ calculateRoute }/>}
                    <div className={styles.mapTools}>
                        <div className={styles.navigation}> 
                            <PlacesInput setSelected={setSelected} originRef={originRef} map={map}/>
                            <FilterDropdown wastepoints={wastepoints} setWastepoints={setWastepoints} selected={selected} map={map}/>
                            <button type="submit" onClick={clearRoute} className={styles.clear}>
                                Clear the route
                            </button>
                        </div>
                    {(distance || duration) && 
                    <h4> <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/> Distance: {distance} </h4>}
                </div>
                {wastepoints.map((wastepoint) => {
                    return (
                        <div key={wastepoint.id}>
                            <MarkerF
                                position={{lat: wastepoint.latitude, lng: wastepoint.longitude}}
                                icon={icon}
                                className={styles.marker}
                                onClick={() => {
                                    setInfoCard(true)
                                    map.setCenter({lat: wastepoint.latitude, lng: wastepoint.longitude});
                                    setCurrentWastepoint(wastepoint);
                                }}>
                            </MarkerF>
                            {/* <InfoWindowF
                                position={{lat: wastepoint.latitude, lng: wastepoint.longitude}}
                                options={{
                                    // eslint-disable-next-line no-undef
                                    pixelOffset: new window.google.maps.Size(0, -40),
                                }}
                                >
                                <div className={styles.infoWindow}>
                                    <p className={styles.infoWindow_title}>{wastepoint.id}</p>
                                </div>
                            </InfoWindowF> */}
                        </div>
                    )
                })}
                {selected && <MarkerF position={selected} />}
                <GetLocationButton map={map} setSelected={setSelected}/>
            </GoogleMap>
            {isOpenOrder && <MakeOrderForm setIsOpenOrder={setIsOpenOrder} wastepoint={ currentWastepoint }/>}
            {isOpenFeedback && <AddFeedbackForm setIsOpenFeedback={setIsOpenFeedback} wastepoint={ currentWastepoint }/>}
        </section>
    );
}

export default Maps;