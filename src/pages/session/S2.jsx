import Exercises from '../../components/Exercises'
import {sessions as exercises} from '../../data/sessionDB'

const S2 = () => {

  return (
    <Exercises exercises={exercises.filter(session=>{
      return(session.session === '2')
    })}/>
  )
}

export default S2