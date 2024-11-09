import SectionWrapper from './SectionWrapper'
import Button from './Button'
import { WORKOUTS, SCHEMES } from '../utils/exercises'
import { useState } from 'react'

function Header(props) {
    const { index, title, description} = props
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400">{index}</p>
                <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
            </div>
            <p className="text-sm sm:text-base mx-auto">{description}</p>
        </div>
    )
}

export default function Generator() {

    const [showModal, setShowModal] = useState(false)
    const [poison, setPoison] = useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goal, setGoal] = useState('strength_power')

    function toggleModal() {
        setShowModal(!showModal)
    }
    
    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (poison != 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }


        setMuscles([...muscles, muscleGroup])

        if (muscles.length === 2) {
            setShowModal(false)
        }
    }

    return (
        <SectionWrapper header={"generate your workout"} title={["It's", "HUGE", "O'Clock"]}>
            <Header index={'01'} title={'Pick Your Poison'} description={'Select the workout you wish to endure.'}/>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button 
                            onClick={() => {
                            setPoison(type)
                            setMuscles([])
                        }} 
                            key={typeIndex} 
                            className={"bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600" + (type === poison ? " border-blue-600" : " border-blue-400")}>
                            <p className="capitalize">{type.replaceAll("_", " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={'02'} title={'Lock on target'} description={'Select the muscles judged for annihilation.'}/>
            <div className="bg-slate-950 border border-blue-400 rounded-lg flex flex-col">
                <button onClick={toggleModal} className="relative p-3 flex items-center justify-center">
                    <p className="capitalise">{poison == 'individual' ? (muscles.length == 0 ? 'Select muscle group(s)' : muscles.join(' ')) : (muscles.length == 0 ? 'Select muscle group' : muscles.join(' '))}</p>
                    <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
                </button>
                {showModal && (
                    <div className="flex flex-col p-3">
                        {
                            (poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                                return (
                                    <button onClick={() => {
                                        updateMuscles(muscleGroup)
                                    }} key={muscleGroupIndex}
                                    className={"duration-200 hover:text-blue-400" + (muscles.includes(muscleGroup) ? " text-blue-600" : " ")}>
                                        <p className="uppercase">{muscleGroup.replaceAll("_", " ")}</p>
                                    </button>
                                )
                            })
                        }
                    </div>
                )}
            </div>
            <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'}/>
            <div className="grid grid-cols-3 gap-4">
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button 
                            onClick={() => {
                            setGoal(scheme)
                        }} 
                            key={schemeIndex} 
                            className={"bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600" + (scheme === goal ? " border-blue-600" : " border-blue-400")}>
                            <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
                        </button>
                    )
                })}
            </div>

            <Button><p>Formulate</p></Button>
        </SectionWrapper> 
    )
}
