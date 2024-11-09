import ExerciseCard from "./ExerciseCard"
import SectionWrapper from "./SectionWrapper"

export default function Workout(props) {
    const { workout } = props
    return (
        <SectionWrapper id={'formula'} header={"welcome to"} title={["The", "DANGER", "zone"]}>

            <div className="flex flex-col gap-4">
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard index={i} exercise={exercise} key={i}></ExerciseCard>
                    )
                })}
            </div>
        </SectionWrapper>
    )
}
