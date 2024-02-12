import { useState } from 'react'

const Statistics = ({good, neutral, bad, all}) => {
  if (all === 0) {
    return (
      <div>
        <h1>
        Statistics
        </h1>
        <p>
        No feedback given
        </p>
      </div> 
    )
  }

  return (
    <div>
      <h1>
      Statistics
      </h1>
      <table>
        <tbody>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={(good - bad) / all} />
        <StatisticLine text="positive" value ={good / all * 100 + "%"}/>
        </tbody>
      </table>
    </div> 
  )
}

const Button = (props) => { 
  console.log('props value is', props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => { 
  return (
    <tr>
      <td> {text}
      </td>
      <td> {value}
      </td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    handleAllClick()
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    handleAllClick()
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    handleAllClick()
  }

  const handleAllClick = () => {
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Statistics all={all} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App