import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Button, Form, TextFieldGroup } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function HomeApplication() {
  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`https://api.jsonbin.io/b/5cdb03f94fc34d41690069c5`)
    .then(res => {
      console.log(res)
      setState(res);
    })
  }, [])

  const renderHomeInfo = () => {
    console.log(state)
    if(state.data) {
      return (
        <div>
          {state.data[0].apartment_name}
        </div>
      )
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  const homeList = () => {
    if(state.data) {
      return state.data.map((home, index) => {
        return {
          key: index, 
          text: home.apartment_name, 
          value: index
        }
      })
    } else {
      return []
    }
  }

  const apartmentList = () => {
    if(state.selectedHome) {
      return state.selectedHome.available_rooms.map((room, index) => {
        return {
          key: room, 
          text: room, 
          value: index
        }
      })
    } else {
      return []
    }
  }

  const roommatesList = () => {
    return [
      {
        key: 1, 
        text: 1, 
        value: 1
      },
      {
        key: 2, 
        text: 2, 
        value: 2
      }
    ]
  }

  const termLength = () => {
    return [
      {
        key: 1, 
        text: "6 months", 
        value: 1
      },
      {
        key: 2, 
        text: "1 year",
        value: 2
      }
    ]
  }

  const chooseHome = (_, {value}) => {
    setState({
      ...state, 
      selectedHome: state.data[value]
    });
  }

  return (
    <div className="application-form">
      <div className="form-header">
        {renderHomeInfo()}
      </div>
      <Form onSubmit={handleSubmit}>
        <h2>Home</h2>
        <Form.Select 
          fluid  
          placeholder='Select your country' 
          options={homeList()} 
          onChange={chooseHome}
        />
        <h2>Room</h2>
        <Form.Select 
          fluid  
          placeholder='Select your country' 
          options={apartmentList()} 
          disabled={state.selectedHome == null}
        />
        <h2>how many people are applying to live here?</h2>
        <Form.Select 
          fluid  
          placeholder='Select your country' 
          options={roommatesList()} 
        />
        <h2>Desired move-in date</h2>
        <Form.Input
          error={errors.phone}  
          type="date" 
          name="date" 
          placeholder='mm/dd/yyyy'
        >
        </Form.Input>

        <Form.Select 
          fluid  
          placeholder='Term Length' 
          options={roommatesList()} 
        />
        <Button type='submit'>Continue</Button>
      </Form>
    </div>
  )
}

export default HomeApplication;
