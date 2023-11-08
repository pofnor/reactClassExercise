import Exercise from './Exercise'

const Exercises = ({ exercises }) => {
  return (
    <section>
      {exercises.map(exercise => {
        return (
          <Exercise key={crypto.randomUUID()}
          questionHeader={exercise.questionHeader}
          question={exercise.question}
          questionCode={exercise.questionCode}
          answerHeader={exercise.answerHeader}
          answer={exercise.answer}
          answerCode={exercise.answerCode}
          />
        )
      })}
    </section>
  )
}

export default Exercises
