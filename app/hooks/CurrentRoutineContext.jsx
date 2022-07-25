import React, { useState, useMemo, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const ROUTINE_TEMPLATES = [
  {
    title: 'chest',
    exercises: [
      { name: 'bench press', sets: 3, reps: 10, time: null },
      { name: 'dumbbell flies', sets: 3, reps: 10, time: null },
      { name: 'dumbbell pull overs', sets: 3, reps: 10, time: null }
    ]
  },
  {
    title: 'legs',
    exercises: [
      { name: 'squats', sets: 3, reps: 10, time: null },
      { name: 'leg extensions', sets: 3, reps: 10, time: null },
      { name: 'leg curls', sets: 3, reps: 10, time: null }
    ]
  },
  {
    title: 'shoulders',
    exercises: [
      { name: 'military press', sets: 3, reps: 10, time: null },
      { name: 'lateral raises', sets: 3, reps: 10, time: null },
      { name: 'front raises', sets: 3, reps: 10, time: null }
    ]
  },
  {
    title: 'back',
    exercises: [
      { name: 'dead lifts', sets: 3, reps: 10, time: null },
      { name: 'rows', sets: 3, reps: 10, time: null },
      { name: 'single arm rows', sets: 3, reps: 10, time: null }
    ]
  },
  {
    title: 'abs',
    exercises: [
      { name: 'jogging', sets: 1, reps: null, time: 5 * 60 },
      { name: 'mountain climbers', sets: 3, reps: null, time: 60 },
      { name: 'crunches', sets: 3, reps: 20, time: null }
    ]
  }
]

const CurrentRoutineContext = createContext()

export const CurrentRoutineContextProvider = ({ children }) => {
  const [currentRoutine, setCurrentRoutineInState] = useState(null)
  const [currentExercise, setCurrentExercise] = useState(null)
  const [currentSet, setCurrentSet] = useState(1)
  const [totalTimeElapsed, setTotalTimeElapsed] = useState(0)
  const [totalTimeElapsedTimer, setTotalTimeElapsedTimer] = useState(null)

  const isLastSet = useMemo(() => currentSet === currentExercise?.sets, [currentSet, currentExercise])
  const isLastExercise = useMemo(() => currentExercise?.name === currentRoutine?.exercises[currentRoutine?.exercises.length - 1].name, [currentExercise, currentRoutine])

  const startTotalTimeElapsed = () => {
    setTotalTimeElapsedTimer(setInterval(() => {
      setTotalTimeElapsed(prevTime => prevTime + 1)
    }, 1000))
  }

  const stopTotalTimeElapsed = () => {
    clearInterval(totalTimeElapsedTimer)
    setTotalTimeElapsedTimer(null)
  }

  const setCurrentRoutine = (title) => {
    resetCurrentRoutine()
    stopTotalTimeElapsed()

    const newRoutine = ROUTINE_TEMPLATES.find(routine => routine.title === title)

    setCurrentRoutineInState(newRoutine)
    setCurrentExercise(newRoutine.exercises[0])
  }

  const setNextSetOrSetAndExercise = () => {
    if (isLastSet) {
      const currentExerciseIndex = currentRoutine.exercises.findIndex(exercise => exercise.name === currentExercise.name)
      const nextExercise = currentRoutine.exercises[currentExerciseIndex + 1]

      setCurrentExercise(nextExercise)
      setCurrentSet(1)
    } else {
      setCurrentSet(set => set + 1)
    }
  }

  const resetCurrentRoutine = () => {
    setCurrentRoutineInState(null)
    setCurrentExercise(null)
    setCurrentSet(1)
    setTotalTimeElapsed(0)
  }

  return (
    <CurrentRoutineContext.Provider value={{
      currentRoutine,
      setCurrentRoutine,

      currentExercise,
      currentSet,

      totalTimeElapsed,
      startTotalTimeElapsed,
      stopTotalTimeElapsed,

      isLastSet,
      isLastExercise,

      setNextSetOrSetAndExercise,
      resetCurrentRoutine
    }}>
      {children}
    </CurrentRoutineContext.Provider>
  )
}

CurrentRoutineContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.shape({})
  ])
}

export const useCurrentRoutineContext = () => useContext(CurrentRoutineContext)
