import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import styles from './FilterDropdown.module.scss'

const categories = [
    {_id: 1, value: 'Paper'},
    {_id: 2, value: 'Glass'},
    {_id: 3, value: 'Plastic'},
    {_id: 4, value: 'Metal'},
    {_id: 5, value: 'Electric'},
    {_id: 6, value: 'Organic'},
]

function FilterDropdown({ servicesList, setServices, selected, map }) {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ checked, setChecked ] = useState([]);
    const [ radiusValue, setRadiusValue ] = useState(0);
    const [ circle, setCircle ] = useState();

    useEffect(() => {
        // eslint-disable-next-line no-undef
        setCircle(new google.maps.Circle());
    }, [])

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();

    const handleToggle = (value) => {

        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
    }

    const handleApply = async () => {
        setIsOpen(false);
        let filteredServices = [];
        // eslint-disable-next-line no-undef
        if (selected && parseInt(radiusValue) > 0) {
            circle.setMap(null);
            // eslint-disable-next-line no-undef
            setCircle(new google.maps.Circle({
                strokeColor: "#117024",
                strokeOpacity: 0.7,
                strokeWeight: 2,
                fillColor: "#23ba42",
                fillOpacity: 0.25,
                map,
                // eslint-disable-next-line no-undef
                center: new google.maps.LatLng(selected?.lat, selected?.lng),
                radius: parseInt(radiusValue) * 1000,
            }));
            for (const service of servicesList) {
                await directionsService?.route(
                    {
                        // eslint-disable-next-line no-undef
                        origin: new google.maps.LatLng(selected.lat, selected.lng),
                        // eslint-disable-next-line no-undef
                        destination: new google.maps.LatLng(service.position.lat, service.position.lng),
                        // eslint-disable-next-line no-undef
                        travelMode: google.maps.TravelMode.DRIVING,
                    },
                    (result, status) => {
                        if (status === "OK" && result) {
                            if (result.routes[0].legs[0].distance.value < parseInt(radiusValue) * 1000) {
                                filteredServices.push(service);
                            } 
                        }
                    }
                );       
            }
        };  

        setServices(filteredServices);

        if (!checked.length) return;

        if (filteredServices.length > 0) {
            let newList = [];
            checked.forEach(el => {
                filteredServices.filter(ele => {
                    if (ele.type.includes(el)) {
                        if (!newList.includes(ele)) newList.push(ele)
                    }    
                })
            })
            filteredServices = newList;
        } else {
            let newList = [];
            checked.forEach(el => {
                servicesList.filter(ele => {
                    if (ele.type.includes(el)) {
                        if (!newList.includes(ele)) newList.push(ele)
                    }    
                })
            })
            filteredServices = newList;
        }
        setServices(filteredServices);

    }

    const handleReset = () => {
        setServices(servicesList);
        setRadiusValue(0);
        setChecked([]);
        circle.setMap(null);
    }

    return (
        <div className={styles.container}>
            <div className={styles.filterButton} onClick={() => setIsOpen(!isOpen)}>
                Filters 
                <FontAwesomeIcon icon={faSliders} className={styles.star}/>
            </div>
            <div className={styles.filterButtonMobile} onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faSliders} className={styles.star}/>
            </div>
            {isOpen && <div className={styles.menu}>
                <p>Type of waste:</p>
                <div className={styles.checkboxes}>
                    {categories.map((category) => {
                        return(
                        <label className={styles.checkbox} key={category._id}>
                            <input type="checkbox"  
                                onChange={() => handleToggle(category.value)}
                                checked={checked.indexOf(category.value) === -1 ? false : true}/>
                            {category.value}
                        </label>)}
                        )
                    }    
                </div>
                <div>
                    <p>Radius (in km): {radiusValue}</p>
                    <input
                        type="range"
                        min="5"
                        max="200"
                        step="5"
                        className={styles.distance} 
                        onChange={(e) => setRadiusValue(e.target.value)}
                        value={radiusValue}
                    />
                </div>
                <button type='submit' className={styles.apply} onClick={ handleApply }>Show Eco Services</button>
                <button type='submit' className={styles.reset} onClick={ handleReset }>Clear all</button>
            </div>}
        </div>
    )
}

export default FilterDropdown;