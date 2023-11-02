import React from 'react'
import Exercises from '../../components/Exercises'
import { sessions as exercises } from '../../data/sessionDB'

const S5 = () => {
  return (
    <Exercises exercises={exercises.filter(session => {
      return (session.session === '5')
    })}/>
  )
}

export default S5
