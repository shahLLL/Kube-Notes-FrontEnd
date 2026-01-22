import { useState } from 'react';
import './Note.css';

function Note() {
  const noteTitle = "Chemistry Notes";
  const initialContent = "This is a previously written note about covalent bonds...";
  const [noteText, setNoteText] = useState(initialContent);

  const handleSave = () => {
    console.log("Saving to API:", noteText);
    alert("Note saved successfully!");
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
            <button className="save-btn" onClick={handleSave}>
              Save Note
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Note;