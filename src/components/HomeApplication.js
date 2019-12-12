import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Button, Form, Select } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function HomeApplication() {
  const [state, setState] = useState({});

  useEffect(() => {
    axios.get(`https://api.jsonbin.io/b/5cdb03f94fc34d41690069c5`)
    .then(res => {
      console.log(res)
      setState(res);
    })
  }, [])

  const renderHomeInfo = () => {
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

  const handleChange = (e) => {
    e.preventDefault()
    console.log(e)
  }

  const homes = [ 
    {
      key: 1, 
      text: 'hi', 
      value: 'you'
    }
  ]

  return (
    <div className="application-form">
      <div className="form-header">
        {renderHomeInfo()}
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Select 
          fluid  
          placeholder='Select your country' 
          options={homes} 
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default HomeApplication;
