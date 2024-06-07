import React from 'react'

export default function CharactureDisplay({ character, setSelectedCharacter }) {

const films = character.films
const tvShows = character.tvShows
  return (<>
    <h3>Selected character</h3>
    <div className='individual'>
        {character.name !== undefined ? <div> 
        <h4>{character.name}</h4> <img src={character.imageUrl}></img>
        <h6> Movies</h6>
      {(films.length !== 0) && films.map((film, idx) => <p key={idx}>{film}</p>)}

<h6>Tv Shows </h6>
      {(tvShows.length !== 0) && tvShows.map((show, idx) => <p key={idx}>{show}</p>)}
        <button onClick={() => setSelectedCharacter({})} >Clear Selected Character</button> 
        </div>
        : <p>choose a character To get specific info on</p>
    }
    </div>
    </>
  )
}
