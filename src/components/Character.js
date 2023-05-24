const Character = ({ character }) => {
    const { name, house, image, wand} = character;

    return (
        <div class="information">
            <h2>{name}</h2>
                <img src={image} width="150px" height="200px" alt={`${name} - ${house}`} />
                <p>House: {house}</p>
                <p>Species: {character.species}</p>
                <p>Date of Birth: {character.dateOfBirth}</p>
                <p>Actor: {character.actor}</p>
                <p>Wand: {character.wand.wood} </p>
        </div>
    );

}

export default Character;