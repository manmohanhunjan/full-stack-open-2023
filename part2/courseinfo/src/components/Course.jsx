
const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>
    <>
        {parts.map((part) => <Part key={part.id} part={part} />)}
    </>

const Total = ({ sum }) => <b>total of {sum} exercises</b>


const Course = ({ courses }) => {

    return (
        <>
            {courses.map((course) => (
                <div key={course.id}>
                    <Header course={course.name} />
                    <Content parts={course.parts} />
                    <Total sum={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
                </div>
            ))}
        </>
    )
}

export default Course