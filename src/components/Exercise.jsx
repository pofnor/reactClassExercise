import { useEffect, useState } from 'react'
import '../assets/global.css'
import MultipleLine from './MultipleLine'
import { useLocation } from 'react-router-dom'

const Exercise = (props) => {

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
  if(props.searchShowAnswer && !showAnswer){
    setShowAnswer(true)
  }

  return (    
    <article id={
      ( props?.question?.[0]    ||
        props?.questionHeader   ||
        props?.answerHeader     ||
        props?.answer?.[0]      ||
        props?.questionCode?.[0]||
        props?.answerCode?.[0]
      )} onClick={()=>setShowAnswer(true)} className="primary-container">
      {(props.question || props.questionHeader || props.questionCode)
        && (
        <div className="primary-question">
          {props.questionHeader && <h1 className='primary-h1'>{props.questionHeader}</h1>}
          {props.questionImage && <img src={"/"+props.questionImage} alt={props.questionImage} />}
          <MultipleLine text={props.question} code={props.questionCode}/>
        </div>
          )
      }

      {(props.answer || props.answerHeader || props.answerCode)
        && (
        <div className={showAnswer ? "display-block primary-answer" : "display-none" }>
          {props.answerHeader && <h1 className='primary-h1 color-lightgray'>{props.answerHeader}</h1>}
          {props.answerImage && <img src={"/"+props.answerImage} alt={props.answerImage} />}
          <MultipleLine isAnswer={true} text={props.answer} code={props.answerCode}/>
      </div>
          )
      }
    </article>
  )
}

export default Exercise
