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
          questionImage={exercise.questionImage}
          answerHeader={exercise.answerHeader}
          answer={exercise.answer}
          answerCode={exercise.answerCode}
          answerImage={exercise.answerImage}
          />
        )
      })}
    </section>
  )
}

export default Exercises
