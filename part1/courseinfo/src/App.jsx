const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const partsArray = [part1, part2, part3]
  const exercisesArray = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course} />
      <Content partsArray={partsArray} exercisesArray={exercisesArray} />
      <Total exercisesArray={exercisesArray}/>
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  const partsArray = props.partsArray;
  const exercisesArray = props.exercisesArray;
  return (
    <div>
      <Part part={partsArray[0]} exercises={exercisesArray[0]}/>
      <Part part={partsArray[1]} exercises={exercisesArray[1]}/>
      <Part part={partsArray[2]} exercises={exercisesArray[2]}/>
    </div>
  )
}

const Part = (props) => {
  return <p>{props.part} {props.exercises}</p>
}

const Total = (props) => {
  const exercisesArray = props.exercisesArray;
  return <p>Number of exercises {exercisesArray[0] + exercisesArray[1] + exercisesArray[2]}</p>
}

export default App