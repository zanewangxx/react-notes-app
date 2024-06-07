import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
//import dummyNotes from "../dummy_notes";
import { Link } from 'react-router-dom';
import { FaCirclePlus } from "react-icons/fa6";
import NoteItem from "../components/NoteItem"
import { FaWindowClose } from "react-icons/fa";

const Notes = ({notes}) => {
  const [search, setSearch] = useState(false);
  const [text, setText] = useState("");
  const [findNotes, setFindNotes] = useState(notes);

  //search notes
  const handleSearch = () => {
    setFindNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
        return note;
      }
    }))
  }
  //search notes has visual change
  useEffect(handleSearch, [text]);

  return (
    <section>
        <header className='notes__header'>
            {!search && <h2>My Notes</h2>}
            {search && <input type="text" value={text} onChange={(e) => {setText(e.target.value); handleSearch();}} autoFocus placeholder='Keyword...' />}
            <button className='btn' onClick={() => setSearch(prevState => !prevState)}>{search ? <FaWindowClose/> : <IoSearch />}</button>
        </header>
        <div className='notes__container'>
          {findNotes.length == 0 && <p className='empty__notes'>No notes found</p>}
          {
            findNotes.map(note => <NoteItem key={note.id} note={note}/>)
          }
        </div>
        <Link to="/create-note" className='btn add__btn'><FaCirclePlus /></Link>
    </section>
  )
}

export default Notes
