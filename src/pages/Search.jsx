import { useState } from 'react'
import { sessions as searchDB } from '../data/sessionDB'
import SearchItem from '../components/SearchItem'
import { FormControlLabel, Switch, TextField } from '@mui/material'

export default function Search () {
  
  const [searchItem, setSearchItem] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)

  function arraySearch (array, searchItem) {
    if (searchItem) {
      let isMatch = false
      if (array) {
        if(Array.isArray(array)){ 
          for (const item of array) {
            for (const obj in item) {
              if(obj==='image') continue // remove image filename from search
              for(const data of item[obj])
                if (data.toLowerCase().includes(searchItem.toLowerCase().trim()))
                  isMatch = true
            }
          }
        } else { 
          console.log("error, Check sessionDB.js, something is not array")
        }
        if (isMatch) return true
      }
      return false
    }
  }

  const matchItems = searchDB.filter(item => {
    return (
      (arraySearch(item.question, searchItem)) ||
      (arraySearch(item.answer, searchItem)))
  })

  return (
  <section>
    <div className='search-field'>
      <TextField
      fullWidth
      autoComplete='off'     
      label="Search"
      onChange={e => { setSearchItem(e.target.value) }}
      />
      <FormControlLabel
      label="Answer"
      labelPlacement="end"
      control={<Switch />}
      checked={showAnswer}
      onChange={() => { setShowAnswer(!showAnswer) }} 
      />
    </div>    
    <article>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <br />
        <h6 className='search-description'>This search contain all words that used in question and answer section</h6>
      </div>
      <div>
        <SearchItem matchItems={matchItems} searchShowAnswer={showAnswer}/>
      </div>
    </article>
  </section>
  )
}
