import React from 'react'

function DisplayPage( { disneyCharactures, search } ) {

function displayCharacturesList() {

    if(disneyCharactures.length > 0) {
        return disneyCharactures.map((character, idx) => {
            return <div key={idx}>
                <h4>{character.name}</h4> <img src={character.imageUrl}></img>
            
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