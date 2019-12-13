import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function HomeDetails(props) {
  const [state, setState] = useState({});
  const [userSelection, setUserSelection] = useState({});

  useEffect(() => {
    axios.get(`https://api.jsonbin.io/b/5cdb03f94fc34d41690069c5`)
    .then(res => {
      console.log(res)
      setState({data: res.data});
    })
  }, [])

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
    if(userSelection.home != null) {
      return state.data[userSelection.home].available_rooms.map((room, index) => {
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

  const chooseHome = (_, {value}, type) => {
    setUserSelection({
      ...userSelection, 
      [type]: value
    });
  }

  const saveAndContinue = (e) => {
    e.preventDefault()
    props.handleSubmit(userSelection)
    props.nextStep()
  }

  return (
    <Form>
      <h2>Home</h2>
      <Form.Select 
        fluid  
        placeholder='Select your home' 
        options={homeList()} 
        onChange={(e, value) => chooseHome(e, value, 'home')}
      />
      <h2>Room</h2>
      <Form.Select 
        fluid  
        placeholder='Select your country' 
        options={apartmentList()} 
        onChange={(e, value) => chooseHome(e, value, 'apartment')}
        disabled={userSelection.home == null}
      />
      <h2>how many people are applying to live here?</h2>
      <Form.Select 
        fluid  
        placeholder='roommates' 
        options={roommatesList()} 
        onChange={(e, value) => chooseHome(e, value, 'roommates')}
      />
      <h2>Desired move-in date</h2>
      <Form.Input
        type="date" 
        name="date" 
        placeholder='mm/dd/yyyy'
        onChange={(e, value) => chooseHome(e, value, 'move-in')}
      >
      </Form.Input>

      <Form.Select 
        fluid  
        placeholder='Term Length' 
        options={termLength()} 
        onChange={(e, value) => chooseHome(e, value, 'term-length')}
      />
      <Button onClick={(e) => saveAndContinue(e)}>Save And Continue </Button>
    </Form>
  )
}

export default HomeDetails;
