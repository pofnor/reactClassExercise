import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { sessions as searchDB } from '../data/sessionDB'
import SearchItem from '../components/SearchItem'

export default function Search () {
  
  const [searchItem, setSearchItem] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)

  function arraySearch (array, searchItem) {
    if (searchItem) {
      let isMatch = false
      if (array) {
        if(Array.isArray(array)){ //for searching in question & answer
          for (const item of array) {
            if (item.toLowerCase()
              .includes(searchItem.toLowerCase().trim())) {
              isMatch = true
            }
          }
        } else { //for searching in questionHeader & answerHeader
          if(array.toLowerCase()
            .includes(searchItem.toLowerCase().trim())) {
              isMatch = true
            }
        }
        if (isMatch) return true
      }
      return false
    }
  }

  const matchItems = searchDB.filter(item => {
    return (
      (arraySearch(item.questionHeader, searchItem)) ||
      (arraySearch(item.question, searchItem)) ||
      (arraySearch(item.questionCode, searchItem)) ||
      (arraySearch(item.answerHeader, searchItem)) ||
      (arraySearch(item.answerCode, searchItem)) ||
      (arraySearch(item.answer, searchItem)))
  })

  return (
    <>
    <br />
    <Form data-bs-theme="dark" style={{ margin: '20px' }} className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={e => { setSearchItem(e.target.value) }}
      />
      <Form.Check 
        type="switch"
        label="Answer"
        checked={showAnswer}
        onChange={() => { setShowAnswer(!showAnswer) }}
      />     
    </Form>
    <section>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ margin: 'auto' }}>Results</h2>
      </div>
      <div>
        <SearchItem matchItems={matchItems} searchShowAnswer={showAnswer}/>
      </div>
    </section>
    </>
  )
}
