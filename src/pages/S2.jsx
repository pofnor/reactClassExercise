import Exercises from '../components/Exercises'
import {session2 as exercises} from '../data/sessionDB'

const S2 = () => {
  return (
    <Exercises exercises={exercises}/>
  )
}

export default S2