import React, {useState} from "react";
import { Button, Form } from 'semantic-ui-react'

function PersonalDetails(props) {
  const [userSelection, setUserSelection] = useState({});

  const saveAndContinue = (e) => {
    e.preventDefault()
    props.handleSubmit(userSelection)
    props.nextStep()
  }

  return (
    <Form>
    <Form.Input
      type="name" 
      name="last-name" 
      placeholder='last name'
    ></Form.Input>
    <Form.Input 
      type="name" 
      name="first" 
      placeholder='first name'
    >
    </Form.Input>
    <Form.Input 
      type="name" 
      name="last" 
      placeholder='last name'
    >
    </Form.Input>

    <Form.Input
      type="number" 
      name="phone" 
      placeholder='xxx-xxx-xxxx'
    >
    </Form.Input>
    <Button onClick={(e) => saveAndContinue(e)}>Save And Continue </Button>
  </Form>
  )
}

export default PersonalDetails;
