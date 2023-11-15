import Exercise from './Exercise'

const Exercises = ({ exercises }) => {
  return (
    <section>
      {exercises.map(exercise => {
        return (
          <Exercise key={crypto.randomUUID()}
          question={exercise.question}
          answer={exercise.answer}
          id={exercise.id}         
          />
        )
      })}
    </section>
  )
}

export default Exercises
