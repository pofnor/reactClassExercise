import Exercises from '../components/Exercises'
import {session1 as exercises} from '../data/sessionDB'

const S1 = () => {
  return (
    <Exercises exercises={exercises}/>
  )
}

export default S1