import './Dashboard.css';
import del_icon from '../../assets/Delete_Icon.png';

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
  return (
    <div className="dashboard-container">
      <div className="header-banner">
        <h1>Dashboard</h1>
        <button className="add-button">ADD NOTE</button>
      </div>
      <div className="note-container">
        {notes.map((note, index) => (
          <div key={index} className="note-box">
            <h3 className="note-title">{note.title}</h3>
            <img src={del_icon} alt="Delete Icon" className="del-icon"/>
          </div>))}
      </div>
    </div>
  )
}

export default Dashboard
