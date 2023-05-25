import React, { useState } from "react"
import CardBack from "./components/CardBack"
import CardFront from "./components/CardFront"
import Form from "./components/Form"
import Completed from "./components/Completed"
import './App.css'

const App = () => {
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: ""
  })
  
  const handleChange = e => {
    const {name, value} = e.target
    setCardData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const [toggle, setToggle] = useState("no")

  const handleToggle = () => setToggle(prev => prev === "no" ? "yes" : "no")

  const [errors, setErrors] = useState({
    name: false,
    number: false,
    month: false,
    year: false,
    cvc: false
  })

  const regex = {
    name: /^((?:[A-Za-z]+ ?){1,3})$/,
    number: /^(\d{4}\s){3}\d{4}$|^\d{16}$/,
    month: /^(0?[1-9]|1[0-2])$/,
    year: /^\d{2}$/,
    cvc: /^\d{3}$/
  }
  
  const [regexResult, setRegexResult] = useState({
    name: true,
    number: true,
    month: true,
    year: true,
    cvc: true
  });

  const handleSubmit = e => {
    e.preventDefault()
    for (let property in cardData) {
      if (cardData[property].trim().length === 0) {
        setErrors(prev => {
          return {
            ...prev,
            [property]: true
          }
        })
      } else if (!regex[property].test(cardData[property])) {
        setRegexResult(prev => {
          return {
            ...prev,
            [property]: false
          }
        })
      } 
      if (regex.name.test(cardData.name) 
            && regex.number.test(cardData.number) 
            && regex.month.test(cardData.month) 
            && regex.year.test(cardData.year)
            && regex.cvc.test(cardData.cvc)) {
        handleToggle()
      }
    }
    }
  
    const reset = () => {
      handleToggle()
      setCardData({
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: ""
      })
      setErrors({
        name: false,
        number: false,
        month: false,
        year: false,
        cvc: false
      })
      setRegexResult({
        name: true,
        number: true,
        month: true,
        year: true,
        cvc: true
      })
    }

  return (
    <div className="App">
      <CardBack cardData={cardData} />
      <CardFront cardData={cardData} />
      <Form 
        cardData={cardData} 
        handleChange={handleChange} 
        toggle={toggle}
        handleSubmit={handleSubmit}
        errors={errors}
        regexResult={regexResult}/>
      <Completed 
        toggle={toggle}
        handleToggle={handleToggle}
        reset={reset}/>
    </div>
  )
}

export default App
