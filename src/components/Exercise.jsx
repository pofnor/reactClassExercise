import { useEffect, useState } from 'react'
import '../assets/global.css'
import { useLocation } from 'react-router-dom'
import ExerciseMaker from './ExerciseMaker'

const Exercise = ({question, answer, id, searchShowAnswer}) => {

  const [showAnswer,setShowAnswer] = useState(false)

  // ---- scroll to specific Element (Start)
  const location = useLocation()

  useEffect(() => {
    const elementId = location.hash.substring(1) // Remove the leading '#' from the URL hash
    scrollToElement(elementId)    
  },[location])

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }
  }
  // ---- scroll to specific Element (End)

  // if from search page, show the answer
  if(searchShowAnswer && !showAnswer){
    setShowAnswer(true)
  }

  return (    
    <article id={id} onClick={()=>setShowAnswer(true)} className="primary-container">
      {(question) &&
        (
        <div className="primary-question">
          {question.map(item => 
            <ExerciseMaker key={crypto.randomUUID()} item={item} isAnswer={false}/>)}
        </div>
        )
      }
      {(answer) &&
        (
        <div className={showAnswer ? "display-block primary-answer" : "display-none" }>
          {answer.map(item => 
            <ExerciseMaker key={crypto.randomUUID()} item={item} isAnswer={true}/>)}
        </div>
        )
      }      
    </article>
  )
}

export default Exercise
