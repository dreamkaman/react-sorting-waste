import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import usePlacesAutoComplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import "@reach/combobox/styles.css";
import styles from './PlacesInput.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faClose } from '@fortawesome/free-solid-svg-icons';


const PlacesInput = ({ setSelected, originRef, map }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutoComplete();

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setSelected({ lat, lng });
        map.setCenter({ lat, lng });
    };

    return (
        <Combobox onSelect={handleSelect}>
            <div className={styles.inputContainer}>
                <ComboboxInput
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={!ready}
                    ref={originRef}
                    className={styles.input}
                    placeholder="Search your city" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.iconSearch} onClick={() => handleSelect(value)}/>
                <FontAwesomeIcon icon={faClose} className={styles.iconClose} onClick={() => setValue('')}/>
            </div>
            <ComboboxPopover style={{width: "310px", marginTop: "10px", marginLeft: "-15px"}}>
                <ComboboxList>
                    {status === "OK" &&
                    data.map(({ place_id, description }) => (
                        <ComboboxOption key={place_id} value={description} style={{width: "310px", padding: "15px", borderBottom: '1px solid rgb(218,220,224)', color: 'black'}}/>
                    ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}

export default PlacesInput;