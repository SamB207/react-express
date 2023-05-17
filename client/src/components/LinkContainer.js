import { useState } from 'react'
// import Table from './Table';
import Table from './Table';
// import Form from './Form';
import Form from './Form';

const LinkContainer = (props) => {
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
