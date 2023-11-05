import Exercises from '../../components/Exercises'
import { sessions as exercises } from '../../data/sessionDB'
import { useParams } from 'react-router-dom'

const SessionMaker = () => {
  const { id } = useParams()
  return (
    <Exercises exercises={exercises.filter(session => {
      return (session.session === id)
    })}/>
  )
}

export default SessionMaker
