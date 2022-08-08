import React from 'react'
import { Title, Text } from 'react-native-paper'

const WORKOUT_HISTORY = [
  { routine: 'chest', date: '8/4/2022' },
  { routine: 'legs', date: '8/5/2022' },
  { routine: 'shoulders', date: '8/7/2022' },
  { routine: 'back', date: '8/8/2022' },
  { routine: 'abs', date: '8/9/2022' },
  { routine: 'chest', date: '8/10/2022' },
  { routine: 'legs', date: '8/11/2022' },
  { routine: 'shoulders', date: '8/13/2022' },
  { routine: 'back', date: '8/14/2022' },
  { routine: 'abs', date: '8/15/2022' }
]

const HistorySection = () => {
  const thisMonth = new Date().getMonth() + 1
  const numExercisesThisMonth = WORKOUT_HISTORY.reduce((result, workout) => (new Date(workout.date).getMonth() + 1) === thisMonth ? result + 1 : result, 0)

  return (
    <>
      <Title>My recent workouts</Title>

      <Text>times worked out this month</Text>
      <Text>{numExercisesThisMonth}</Text>
    </>
  )
}

export default HistorySection
