import React from 'react'
import DisplayPage from './components/DisplayPage'
import './App.css'

function App() {

  const [search, setSearch] = React.useState('')
  const [disneyCharactures, setDisneyCharactures] = React.useState([])
  
  const [pageNumber, setPageNumber] = React.useState(1)

  async function fetchDisneyCharactures() {
      const resp = await fetch(`https://api.disneyapi.dev/character`)
      const characterlist = await resp.json()
      setDisneyCharactures(characterlist.data)
console.log('this just ran');

  }

  React.useEffect(() => {
fetchDisneyCharactures()
  }, [])

function handleSearch(e) {
  setSearch(e.target.value)
}

function searchFilterCharactures() {
    return disneyCharactures.filter((character) => {
      if (search === '') return true 
      if (character.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) return true
    })
}

// console.log(disneyCharactures);
console.log(search);
  return (
    <>
     <h1> Hello World</h1>
     <input
     placeholder='Search This Page'
     value={search}
     onChange={handleSearch}>
     </input>
     <button>page {(pageNumber-1)}</button>
     <button>Page {pageNumber +1}</button>
     <DisplayPage 
     disneyCharactures={searchFilterCharactures()}
     search={search} />
    </>
  )
}

export default App
