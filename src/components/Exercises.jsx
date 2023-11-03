import React from 'react'
import Exercise from './Exercise'

const Exercises = ({ exercises }) => {
  return (
    <section>
      {exercises.map(exercise => {
        return (
          <Exercise key={crypto.randomUUID()}
          questionHeader={exercise.questionHeader}
          question={exercise.question}
          answerHeader={exercise.answerHeader}
          answer={exercise.answer}
          />
        )
      })}
    </section>
  )
}

export default Exercises
