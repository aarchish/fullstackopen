import React from "react";


const CourseComponent = (props) => {
  console.log("CourseComponent props", props);
  const course = props.course;
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
      {partsArray.map(part => <Part key={part.id} part={part} />)}
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
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>total of {totalExercises} exercises</p>
}

export default CourseComponent;