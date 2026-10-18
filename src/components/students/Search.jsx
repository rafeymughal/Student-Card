
import { useState } from "react";
import img1 from "../../images/user image.jpg";
import img2 from "../../images/user 2.png";
import img3 from "../../images/user 3.jpg";
import img4 from "../../images/many.jpg";
import Button from "@mui/material/Button";

function Search() {
  const [editStudent, setEditStudent] = useState(null);
  const [name, setName] = useState("");
  const [rollNumber, setrollNumber] = useState("");
  const [about, setAbout] = useState("");
  const [search, setSearch] = useState("");

  const [std, setStd] = useState([
    {
      id: 1,
      name: "Rafey",
      rollNumber: "214077",
      about: "Learn today, lead tomorrow.😎",
      image: img1,
    },
    {
      id: 2,
      name: "Hamza",
      rollNumber: "214069",
      about: "Built by books, driven by dreams.💪",
      image: img2,
    },
    {
      id: 3,
      name: "Haider",
      rollNumber: "209785",
      about: "Keep growing, keep glowing, keep learning.🥇",
      image: img3,
    },
  ]);

  // Add a new student
  const saveStudents = () => {
    if (!name.trim() || !rollNumber.trim()) {
      alert("Please enter name and roll number!");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      rollNumber: rollNumber.trim(),
      about: about,
      image: img1,
    };

    setStd((previous) => [...previous, newStudent]);
    refreshStudent();
  };

  // Clear input fields
  const refreshStudent = () => {
    setName("");
    setrollNumber("");
    setAbout("");
    setEditStudent(null);
  };

  // Delete a student
  const deleteStudent = (id) => {
    setStd((previous) => previous.filter((s) => s.id !== id));

    if (editStudent?.id === id) {
      refreshStudent();
    }
  };

  // Select a student for editing
  const startEdit = (student) => {
    setEditStudent(student);
    setName(student.name);
    setrollNumber(student.rollNumber);
    setAbout(student.about);
  };

  // Update the selected student
  const updateStudent = () => {
    if (!name.trim() || !rollNumber.trim()) {
      alert("Please enter name and roll number!");
      return;
    }

    setStd((previous) =>
      previous.map((s) =>
        s.id === editStudent.id
          ? {
              ...s,
              name: name.trim(),
              rollNumber: rollNumber.trim(),
              about: about,
            }
          : s
      )
    );

    refreshStudent();
  };

  return (
    <div className="main-container">
      <div className="left-side">
        <div className="styleimg">
          <img src={img4} alt="Students" width={100} />
          <h1>Find and Enter New Student 🙃</h1>
        </div>

        <input
          type="text"
          placeholder="Find Student 🫣"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name 💜"
        />

        <input
          value={rollNumber}
          onChange={(e) => setrollNumber(e.target.value)}
          type="text"
          placeholder="Roll Number 📱"
        />

        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="About student ✍️"
        />

        <div className="display">
          {editStudent ? (
            <Button
              onClick={updateStudent}
              variant="contained"
            >
              Update Student ✏️
            </Button>
          ) : (
            <button onClick={saveStudents}>
              Enter New Student 👉
            </button>
          )}

          <Button onClick={refreshStudent} variant="contained">
            Refresh
          </Button>
        </div>
      </div>

      <div className="right-side">
        {std
          .filter(
            (s) =>
              s.name.toLowerCase().includes(search.toLowerCase()) ||
              s.rollNumber.toLowerCase().includes(search.toLowerCase()) ||
              s.about.toLowerCase().includes(search.toLowerCase())
          )
          .map((s) => (
            <div className="student-card" key={s.id}>
              <div className="student-info">
                <div className="display">
                  <img
                    className="student-image"
                    width={100}
                    src={s.image}
                    alt={s.name}
                  />

                  <button
                    onClick={() => startEdit(s)}
                    className="manage"
                  >
                    Edit ✏️
                  </button>

                  <button
                    onClick={() => deleteStudent(s.id)}
                    className="manage"
                  >
                    Delete ❌
                  </button>
                </div>

                <h2>Name: {s.name}</h2>
                <h3>Roll#: {s.rollNumber}</h3>
                <p>{s.about}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
