import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ServiceListDropdown.module.scss'

function ServiceListDropdown({destiantionRef, services, calculateRoute } ) {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ selected, setSelected ] = useState();

    const handleClick = (e, name) => {
        setIsOpen(!isOpen)
        setSelected(name);
        const destinationLatLng = JSON.parse(e.target.dataset.value);
        calculateRoute(destinationLatLng);
    }

    return (
        <div className={styles.container}>
            <div className={styles.filterButton} onClick={() => setIsOpen(!isOpen)}>
                {selected ? selected : 'Select service'} 
                <FontAwesomeIcon icon={faSortDown} className={styles.star}/>
            </div>
            {isOpen && <div className={styles.menu}>
                    {services.map(({ id, name, position }) =>
                        <div 
                            key={id} 
                            data-value={JSON.stringify(position)} 
                            ref={destiantionRef} 
                            className={styles.option}
                            onClick={(e) => handleClick(e, name)}>{name}
                        </div>
                    )}
                </div>}
        </div>
    )
}

export default ServiceListDropdown;