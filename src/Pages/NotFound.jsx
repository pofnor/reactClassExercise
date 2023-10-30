import { useEffect } from "react"
import {useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(() => {
      navigate("/")      
    }, 2000);
  })
  return (
    <h1 style={{display:"flex",justifyContent:"center",marginTop:"50px",color:"#CD853F"}}>The Page Not Found</h1>
  )
}

export default NotFound
