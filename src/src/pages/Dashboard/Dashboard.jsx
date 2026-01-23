import { useNavigate } from 'react-router-dom'
import './Dashboard.css';

const notes = [{
    title: "Note-1",
    content: "Chemistry"
}, {
    title: "Note-2",
    content: "Physics"
}, {
    title: "Note-3",
    content: "Mathematics"
},
{
    title: "Note-4",
    content: "History"
},
{
    title: "Note-5",
    content: "English"
},
{
    title: "Note-6",
    content: "Accounting"
}];

function Dashboard() {
  const navigate = useNavigate()

  const handleNewNote = () => {
    console.log("Creating New Note")
    navigate("/note")
  }

  const handleLogOut = () => {
    console.log("Logging User Out")
    navigate("/login")
  }

  const handleExistingNote = () => {
      console.log("Opening Existing Note")
      navigate("/note")
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
        {notes.map((note, index) => (
          <div key={index} className="note-box" onClick={handleExistingNote}>
            <h3 className="note-title">{note.title}</h3>
          </div>))}
      </div>
    </div>
  )
}

export default Dashboard
