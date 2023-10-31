import { useState } from "react";
import Form from 'react-bootstrap/Form';
import searchDB from "../data/searchDB"
import SearchItem from "../components/SearchItem";

export default function Search(){
  const [searchItem,setSearchItem] = useState('')
  const matchItems = searchDB.filter(item => {
    return(
      item
      .subtitle
      .toLowerCase()
      .includes(searchItem.toLowerCase().trim())
    )
    })
  return(
    <>
    <br />
    <Form data-bs-theme="dark" style={{margin:"20px"}} className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={e => {setSearchItem(e.target.value)}}              
      />            
    </Form>
    <section>      
      <div style={{display:"flex", flexDirection:"column"}}>
        <h2 style={{margin:"auto"}}>Results</h2>          
      </div>
      <ul style={{listStyle: "none"}}>        
        <SearchItem matchItems={matchItems} />          
      </ul>
      
    </section>
    </>
  )
}