const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  //const partsArray = [part1, part2, part3]
  //const exercisesArray = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  console.log("Header props", props);
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  console.log("Content props", props);
  const partsArray = props.parts;
  return (
    <div>
      <Part part={partsArray[0]}/>
      <Part part={partsArray[1]}/>
      <Part part={partsArray[2]}/>
    </div>
  )
}

const Part = (props) => {
  console.log("Part props", props);
  const partObj = props.part;
  return <p>{partObj.name} {partObj.exercises}</p>
}

const Total = (props) => {
  console.log("Total props", props);
  const partsArray = props.parts;
  const exercisesArray = partsArray.map(part => part.exercises);
  return <p>Number of exercises {exercisesArray[0] + exercisesArray[1] + exercisesArray[2]}</p>
}

export default App