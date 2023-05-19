import { useState, useEffect } from 'react'
// import Table from './Table';
import Table from './Table';
// import Form from './Form';
import Form from './Form';

const LinkContainer = (props) => {
  // const fetchlinks = async ()=>{
  //   //fech data from db fro table
  //   try{
  //     let response =await fetch('/Links')
  //     console.log(response)
  //     let data = await response.json()
  //     console.log(data)
  //   }
  //   catch (error){
  //     console.log(error)
  //   }
  // }
  const postlinks = async (newLink) => {
    
    try{
      let response =await fetch('/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newLink)
      })
      console.log(response)
      let message = response.text()
      console.log(message)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(() =>{
   // fetchlinks()
    postlinks()
  }, [])

  
  const [link, setLink] = useState([]);

  const handleRemove = (index) => {
    /* 
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
      const deleteLink = [...link];
      deleteLink.splice(index, 1);
      setLink(deleteLink);
      
  }

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
       setLink([...link, favLink])
       postlinks(favLink)
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {/*TODO - Add Table Component */}
      < Table linkData ={link} removeLink={handleRemove}/>

      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
      < Form onSubmit={handleSubmit}/>
    </div>
  )
}

export default LinkContainer
