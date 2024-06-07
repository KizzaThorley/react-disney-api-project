import React from 'react'

function DisplayPage( { disneyCharacter, search, setSelectedCharacter} ) {

    function handleAddingCharacture(character) {
        setSelectedCharacter(character)
            }

function displayCharacturesList() {

    if(disneyCharacter.length > 0) {
        return disneyCharacter.map((character, idx) => {
            return <div key={idx} className='list'>
                <h4>{character.name}</h4> <img className='image' src={character.imageUrl}></img>
            
            <button onClick={() => handleAddingCharacture(character)}>Chose {character.name}</button>
            </div>
                        }) 
     } else if(search !== '') {
        return <p>Not in our list</p>
     }
     else {
      return   <p> Waiting on characters list</p>
    }   
}
   
    return (
        <div>
       {displayCharacturesList()}
        </div>
    )
}


export default DisplayPage