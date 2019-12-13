import React, {useState, useEffect} from "react";
import HomeDetails from './HomeDetails'
import PersonalDetails from './PersonalDetails'
import Confirmation from './Confirmation'

function HomeApplication(props) {
  const [state, setState] = useState({step: 1});

  const nextStep = () => {
    const { step } = state
    setState({
        step : step + 1
    })
  }

  const prevStep = () => {
      const { step } = state
      setState({
          step : step - 1
      })
  }

  const handleSubmit = (selection) => {
    console.log(selection)
      // setState({ 
      //   ...state,
      //   selection 
      // })
  }

  const renderForms = () => {
    switch(state.step) {
      case 1:
          return <HomeDetails
                    nextStep={nextStep} 
                    handleSubmit={handleSubmit}
                  />

      case 2:
          return <PersonalDetails 
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleSubmit = {handleSubmit}
                  />
      case 3:
          return <Confirmation 
                  nextStep={nextStep}
                  prevStep={prevStep}
                  />
      }
  }
  return (
    <div className="application-form">
      {renderForms()}
    </div>
  )
}

export default HomeApplication;
