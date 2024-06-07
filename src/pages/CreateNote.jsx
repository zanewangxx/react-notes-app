import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBackspace } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import useCreateDate from '../components/useCreateDate';

const CreateNote = ({setNotes}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();

  //create new notes
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && details){
      //console.log(title, details);
      const note = {id: uuid(), title, details, date};
      setNotes(prevNotes => [note, ...prevNotes]);
      //console.log(note);
      navigate("/");
    }
    
  }

  return (
    <section>
      <header className='create-note__header'>
        <Link to="/" className='btn'><FaBackspace /></Link>
        <button className='btn lg primary' onClick={handleSubmit}>Save</button>
      </header>
      <form className='create-note__form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} autoFocus/>
        <textarea rows="30" placeholder='Note details...' value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default CreateNote
