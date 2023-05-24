import { useState, useEffect } from "react"
import CharacterList from "../components/CharacterList";

const fetchCharacters = "https://hp-api.onrender.com/api/characters";

const HarryPotterContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [house, setHouse] = useState(null);
    const [filterCharacters, setFilterCharacters] = useState([]);
    
// character.actor = character.actor.charAt(0).toUpperCase() + character.actor.slice(1);

    useEffect(() => {
        fetch(fetchCharacters)
            .then((response) => response.json())
            .then((response) => setCharacters(response))
    }, []);

    useEffect(() => {
        if(house !== null){
            const filterCharacters = characters.filter((character) => character.house === house);
            setFilterCharacters(filterCharacters);
        } 
        else {
            setFilterCharacters(characters);
        }
    
    },[house,characters]);

    const handleChangeHouseName = (event) => {
        setHouse(event.target.value);
    }

    return (
        <>
            <select onChange={handleChangeHouseName}>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Slytherin">Slytherin</option>
                <option value="">Staff</option>
                <option value="Select_A_House" selected="selected">Select a House</option>
            </select>
            {filterCharacters ? <CharacterList characters={filterCharacters} /> : <p>Loading</p>}
        </>
    )

}



export default HarryPotterContainer;