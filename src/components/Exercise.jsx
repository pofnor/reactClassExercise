import '../assets/global.css'

const Exercise = (probs) => {

  return (
    <article className="primary-container">
      <div className="primary-question">
        <h1 className='primary-h1'>{probs.questionHeader}</h1>
        <p className='primary-p'>{probs.question}</p>
      </div>
      {probs.answer ? 
      <div className="primary-answer">
        <h1 className='primary-h1 color-lightgray'>{probs.answerHeader}</h1>
        <p className='primary-p color-white'>{probs.answer}</p>
      </div> : <></>}
    </article>
  )
}

export default Exercise