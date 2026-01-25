import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllNotes } from '../../services/notesServices'
import { logoutUser } from '../../services/authServices'
import './Dashboard.css';


function Dashboard() {
  const navigate = useNavigate()
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetchNotes = async () => {
      const result = await getAllNotes();
      
      if (result.status === 200) {
        setNotes(result.data);
      } else if (result.status === 401) {
        logoutUser()
        navigate("/login")
      }
    };

    fetchNotes();
  }, [navigate]);

  const handleNewNote = () => {
    console.log("Creating New Note")
    navigate("/note")
  }

  const handleLogOut = () => {
    console.log("Logging User Out")
    logoutUser()
    navigate("/login")
  }

  const handleExistingNote = (noteId) => {
      console.log("Opening Existing Note")
      navigate(`/note/${noteId}`)
  }

  return (
    <div className="dashboard-container">
      <div className="header-banner">
        <h1>Dashboard</h1>
        <div className="header-button-container">
          <button className="header-button" onClick={handleNewNote}>ADD NOTE</button>
          <button className="header-button" onClick={handleLogOut}>LOG OUT</button>
        </div>
      </div>
      <div className="note-container">
        {notes.map((note) => (
          <div key={note._id} className="note-box" onClick={() => handleExistingNote(note._id)}>
            <h3 className="note-title">{note.title}</h3>
          </div>))}
      </div>
    </div>
  )
}

export default Dashboard
