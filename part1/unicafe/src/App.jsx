import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [handleFeedback, setHandleFeedback] = useState(false);

  const handleClick = (setValue, value) => {
    setValue(value + 1)
    setHandleFeedback(!handleFeedback)
  }

  return (
    <div>
    <h2>give feedback</h2>
    <Button text="good" value={good} setValue={setGood} handleClick={handleClick} />
    <Button text="neutral" value={neutral} setValue={setNeutral} handleClick={handleClick}  />
    <Button text="bad" value={bad} setValue={setBad} handleClick={handleClick}  />
    <Statistics good={good} neutral={neutral} bad={bad} handleFeedback={handleFeedback}/>
    </div>
  )
}

const Button = ({text, value, setValue, handleClick}) => {
  return (
    <button onClick={() => handleClick(setValue, value)}>
        {text}
    </button>
  )
}

const Statistics = ({good, neutral, bad, handleFeedback}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  if (!handleFeedback) {
    return (
      <div>
        <h2>statistics</h2>
        <div>No feedback given</div>
      </div>
    )
  }
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />
        </tbody>
      </table>
    </>
  )
}

const StatisticsLine = ({text, value}) => {
  if(text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App
