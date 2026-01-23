import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Note.css';

function Note() {
  const noteTitle = "Chemistry Notes";
  const initialContent = "This is a previously written note about covalent bonds...";
  const [noteText, setNoteText] = useState(initialContent);
  const navigate = useNavigate()

  const handleSave = () => {
    console.log("Saving to API:", noteText)
    alert("Note saved successfully!")
    navigate("/dashboard")
  };

  const handleDelete = () => {
    console.log("Deleting Note:", noteTitle)
    alert("Note deleted successfully!")
    navigate("/dashboard")
  };

  const goBack = () => {
    console.log("Routing back to Dashboard")
    navigate("/dashboard")
  };

  return (
    <div className="note-page-container">
      <header className="note-header">
        <h1>{noteTitle}</h1>
      </header>

      <main className="note-body">
        <div className="editor-wrapper">
          <textarea 
            className="note-editor" 
            value={noteText} 
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Start typing your note here..."
          />
          
          <div className="button-container">
            <button className="note-btn" onClick={handleSave}>
              Save Note
            </button>
            <button className="note-btn" onClick={goBack}>
              Go Back
            </button>
            <button className="note-btn" onClick={handleDelete}>
              Delete Note
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Note;