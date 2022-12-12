import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { InfoWindow, Marker } from "@react-google-maps/api";
import styles from './GetLocationButton.module.scss'

function GetLocationButton({ map, setSelected }) {
    // eslint-disable-next-line no-undef
    let marker = new google.maps.Marker();
    // eslint-disable-next-line no-undef
    let infoWindow = new google.maps.InfoWindow();

    const handleClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    map.setCenter(pos);
                    setSelected(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            handleLocationError(false, infoWindow, map.getCenter());
        }
    };

    const handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
      }

    return (
        <button type='submit' className={styles.button} onClick={handleClick}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
        </button>
    )
}

export default GetLocationButton;