import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Generator from './components/Generator.jsx'
import Workout from './components/Workout.jsx'
import { generateWorkout } from './utils/functions.js'

function App() {
    const [workout, setWorkout] = useState(null)
    const [poison, setPoison] = useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goal, setGoal] = useState('strength_power')

    function updateWorkout() {
        if (muscles.length < 1) {
            return
        }
        let newWorkout = generateWorkout({poison, muscles, goal}) 
        setWorkout(newWorkout)
    }
    
    return (
        <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-small sm:text-base">
            <Hero />
            <Generator 
            poison={poison} 
            setPoison={setPoison}
            muscles={muscles} 
            setMuscles={setMuscles}
            gaol={goal} 
            setGoal={setGoal}
            updateWorkout={updateWorkout}
            />
            { workout && (<Workout workout={workout}/>) }
        </main>
    )
}

export default App
