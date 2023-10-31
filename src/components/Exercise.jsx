import "../assets/global.css"

const Exercise = (probs) => {

  return (
    <article className="primary-container">
      <div className="primary-question">
        <h1>{probs.questionHeader}</h1>
        <p>{probs.question}</p>
      </div>
      <div className="primary-answer">
        <h1>{probs.answerHeader}</h1>
        <p>{probs.answer}</p>
      </div>
    </article>
  )
}

export default Exercise