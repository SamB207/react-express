import { useState } from 'react'
import { Component } from 'react/cjs/react.production.min'

const Form = (props) => {
  const [name, setName] = useState('')
  const [favLink, setFavlink] = useState('')
  const handleChange = (event) => {  /*
            TODO - Logic for changing state based on form changes
        */
       if( event.target.name == "name"){
        setName(event.target.value) 
        }
        else{
            setFavlink(event.target.value)
        }
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       props.onSubmit({"name": name, "URL": favLink})
        
           
  }

  return (
    <form>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
      <label htmlFor="name">Name</label> <br></br>
         <input
           type="text"
           name="name"
         onChange ={(handleChange)}/><br></br>
      <label htmlFor="URL">URL</label> <br></br>
      <input
      type = "text"
      name="URL"
      onChange ={(handleChange)} /><br></br>
 <button onClick={(onFormSubmit)}>Submit</button>
    </form>
  )
}

export default Form
