import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getNoteById, createNote, updateNote, deleteNote } from '../../services/notesServices'
import './Note.css'

function Note() {
  const { noteId } = useParams();
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const result = await getNoteById(noteId as string)
      if (result.status === 200) {
        setTitle(result.data.title)
        setContent(result.data.content)
      }
    }

    if (noteId) {
      getData()
    }
  }, [navigate])

  const handleSave = async () => {
    if (title.length <= 0) {
      alert("Title is empty!")
      return
    }
    console.log("Saving to API:", title)

    if (noteId) {
      const result = await updateNote(noteId, { title:title, content:content })
      if (result == 200) {
        alert("Note Successully Updated!")
      } else {
        alert("Could not update Note, please try again later")
      }
    } else {
      const result = await createNote({ title:title, content:content })
      if (result == 201) {
        alert("Note Successully Created!")
      } else {
        alert("Could not create Note, please try again later")
      }
    }

    navigate("/dashboard")
  };

  const handleDelete = async () => {
    console.log("Deleting Note:", title)

    if (noteId) {
      const result = await deleteNote(noteId)
      if (result == 200) {
        alert("Note Successfully Deleted!")
      } else {
        alert("Could not delete Note, please try again later")
      }
    }
    
    navigate("/dashboard")
  };

  const goBack = () => {
    console.log("Routing back to Dashboard")
    navigate("/dashboard")
  };

  return (
    <div className="note-page-container">
      <header className="note-header">
        <textarea
            className="note-title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            placeholder="TITLE"
          />
      </header>

      <main className="note-body">
        <div className="editor-wrapper">
          <textarea 
            className="note-editor" 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
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