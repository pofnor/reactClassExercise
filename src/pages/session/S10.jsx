import React from 'react'
import Exercises from '../../components/Exercises'
import { sessions as exercises } from '../../data/sessionDB'

const S10 = () => {
  return (
    <Exercises exercises={exercises.filter(session => {
      return (session.session === '10')
    })}/>
  )
}

export default S10
