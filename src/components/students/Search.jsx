import { useState } from "react";
import img1 from "../../images/user image.jpg";
import img2 from "../../images/user 2.png";
import img3 from "../../images/user 3.jpg";
import Button from "@mui/material/Button";
import img4 from "../../images/many.jpg"
function Search() {
  const [name, setName] = useState("");
  const [rollNumber, setrollNumber] = useState("");
  const [about, setAbout] = useState("");

  const [search, setSearch] = useState("");
  const [std, setStd] = useState([
    {
      name: "Rafey",
      rollNumber: "214077",
      about: "Learn today, lead tomorrow.😎",
      image: img1,
    },
    {
      name: "Hamza ",
      rollNumber: "214069",
      about: "Built by books,driven by dreams.💪",
      image: img2,
    },
    {
      name: "Haider",
      rollNumber: "209785",
      about: "Keep growing, keep glowing, keep learning.🥇 ",
      image: img3,
    },
  ]);
  const saveStudents = () => {
    const newStudent = {
      name: name,
      rollNumber: rollNumber,
      about: about,
    };
    setStd([...std, newStudent]);
    refreshStudent();
  };
  const refreshStudent = () => {
    setName("");
    setrollNumber("");
    setAbout("");
  };
  const deleteStudent = (r) => {
    const filterStudent = std.filter((f) => f.name !== r);
    setStd(filterStudent);
  };
  return (
    <div className="main-container">
      <div className="left-side">
          <div
            className="styleimg">
          <img
          src={img4} alt="img"
          width={100}
          />
          <h1>
          Find and Enter new student{search}🙃</h1></div>

        <input
          type="text"
          placeholder="Find Student🫣"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name💜"
        />
        <input
          value={rollNumber}
          type="text"
          placeholder="Roll number📱"
          onChange={(e) => {
            setrollNumber(e.target.value);
          }}
        />
        <textarea
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        ></textarea>
        <div className="display">
          <button onClick={saveStudents}>Enter new student 👉</button>
          <Button onClick={refreshStudent} variant="contained">
            Refresh{" "}
          </Button>
        </div>
      </div>
      <div className="right-side">
        {std
          .filter(
            (f) =>
              f.name.toLowerCase().includes(search) ||
              f.rollNumber.toLowerCase().includes(search) ,
          )
          .map((s) => {
            return (
              <div className="student-card">
                <div className="student-info">
                  <div className="display">
                    <img
                      className="student-image"
                      width={100}
                      src={s.image}
                      alt=""
                    />
                    <button
                      onClick={() => {
                        deleteStudent(s.name);
                      }}
                      className="manage "
                    >
                      Delete ❌
                    </button>
                  </div>
                  <h2 className="student-info">name:{s.name}</h2>
                  <h3>Roll#:{s.rollNumber}</h3>
                  <p>{s.about}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Search;
