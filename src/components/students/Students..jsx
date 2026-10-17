import { useState } from "react";

function Friend() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ali",
      course: "React",
      active: true,
    },
  ]);

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  // Add Student
  const handleAdd = () => {
    if (name.trim() === "" || course.trim() === "") {
      alert("Please enter name and course");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      course: course,
      active: true,
    };

    setStudents([...students, newStudent]);

    setName("");
    setCourse("");
  };

  // Delete Student using filter
  const handleDelete = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  // Toggle Status using map
  const handleToggle = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, active: !student.active }
          : student
      )
    );
  };

  return (
    <div className="main-container">

      <h1 className="main-title">My Students Manager</h1>

      {/* Add Student Form */}
      <div className="add-box">
        <h2>Add Student</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <button className="add-btn" onClick={handleAdd}>
            + Add Student
          </button>
        </div>
      </div>

      {/* Student Cards */}
      <div className="student-list">

        {students.length === 0 ? (
          <div className="empty-box">
            <h2>No students yet.</h2>
            <p>Add some!</p>
          </div>
        ) : (
          students.map((student) => (
            <div className="student-card" key={student.id}>

              <div className="student-info">
                <h2>{student.name}</h2>
                <p>Course: {student.course}</p>
              </div>

              <span
                className={
                  student.active
                    ? "status active"
                    : "status inactive"
                }
              >
                {student.active ? "Active" : "Inactive"}
              </span>

              <div className="card-buttons">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>

                <button
                  className="toggle-btn"
                  onClick={() => handleToggle(student.id)}
                >
                  Toggle Status
                </button>
              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Friend;