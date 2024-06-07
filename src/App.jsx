import React from 'react'
import DisplayPage from './components/DisplayPage'
import CharactureDisplay from './components/CharactureDisplay'
import './App.css'

function App() {

  const [search, setSearch] = React.useState('')
  const [disneyCharactures, setDisneyCharacters] = React.useState([])
  const [pageNumber, setPageNumber] = React.useState(1)
  const [selectedCharacter, setSelectedCharacter] = React.useState({})

  async function fetchDisneyCharacters(

  ) {
      const resp = await fetch(`https://api.disneyapi.dev/character?page=${pageNumber}`)
      const characterlist = await resp.json()
      setDisneyCharacters(characterlist.data)
console.log('this just ran');

  }

  React.useEffect(() => {
fetchDisneyCharacters()
  }, [pageNumber])

function handleSearch(e) {
  setSearch(e.target.value)
}

function searchFilterCharactures() {
    return disneyCharactures.filter((character) => {
      if (search === '') return true 
      if (character.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) return true
    })
}

function handlePageNumber(e) {

if(e.target.id === 'down-button') {
  
return setPageNumber(pageNumber - 1)  
} 
 if(e.target.id === 'up-button') {
  return setPageNumber(pageNumber + 1)
}
}
// console.log(disneyCharactures);
// console.log(search);
console.log(selectedCharacter);
  return (
    <>
    <nav></nav>
     <h1> Disney characters</h1>
     <CharactureDisplay 
     character={selectedCharacter}
     setSelectedCharacter={setSelectedCharacter}/> 
     <div className='inputs'>
{(pageNumber !== 1) ?  <button className='page-button' onClick={handlePageNumber}  id='down-button'>page {(pageNumber-1)}</button> 
: <button className='page-button'> On first page </button>}
     <input
     placeholder='Search This Page'
     value={search}
     onChange={handleSearch}>
     </input>
 
     {(pageNumber !== 149) ?  <button className='page-button' onClick={handlePageNumber}  id='up-button'>page {(pageNumber+1)}</button> 
: <button className='page-button'> On Last page </button>}
</div>
     <DisplayPage 
     disneyCharacter={searchFilterCharactures()}
     search={search}
     setSelectedCharacter={setSelectedCharacter} />
    </>
  )
}

export default App
