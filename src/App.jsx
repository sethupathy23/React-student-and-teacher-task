import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Dashboard } from "./Dashboard";
import { Teachers } from "./Teachers";
import { Students } from "./Students";
import { AddStudent } from "./AddStudent";
import { AddTeacher } from "./AddTeacher";
import { TeacherDetails } from "./TeacherDetails";
import { StudentDetails } from "./StudentDetails";
import { EditTeacher } from "./EditTeacher";
import { EditStudent } from "./EditStudent";
import { useState } from "react";



function App() {
  const [teachers, setTeacher] = useState([
    {
      id: "99",
      name: "Veeramani",
      gender: "Male",
      subject: "English",
      address: "Adirampattinam",
      email: "veeramani@gmail.com",
      contact: 1234567890,
    },
    {
      id: "100",
      name: "Robert",
      gender: "Male",
      subject: "Maths",
      address: "Coimbatore",
      email: "robert@gmail.com",
      contact: 1234567890,
    },
    {
      id: "101",
      name: "Shanmugam",
      gender: "Male",
      subject: "Tamil",
      address: "Trichy",
      email: "shanmugam@gmail.com",
      contact: 1234567890,
    },
    {
      id: "102",
      name: "DharmaRaj",
      gender: "Male",
      subject: "Physics",
      address: "Mayiladurai",
      email: "dharmaraj@gmail.com",
      contact: 1234567890,
    },
    {
      id: "103",
      name: "Devakumar",
      gender: "Male",
      subject: "Computer Science",
      address: "Cuddalore",
      email: "devakumar@gmail.com",
      contact: 1234567890,
    }
  ]);
  const [students,setStudent] = useState([
    {
      id: "99",
      name: "Vikram",
      standard: "XII",
      batch: "B",
      address: "Thanjavur",
      email: "vikram@gmail.com",
      contact: 9872223210,
    },
    {
      id: "100",
      name: "Krishnan",
      standard: "XII",
      batch: "B",
      address: "Thiruvarur",
      email: "krishnan@gmail.com",
      contact: 9876543210,
    },
    {
      id: "101",
      name: "Dhanam",
      standard: "XII",
      batch: "B",
      address: "Kumbakonam",
      email: "dhanam@gmail.com",
      contact: 9876543210,
    },
    {
      id: "102",
      name: "ArulPrakash",
      standard: "XII",
      batch: "B",
      address: "Mannargudi",
      email: "arulpraksh@gmail.com",
      contact: 9876543210,
    },
    {
      id: "103",
      name: "Aravindh",
      standard: "XII",
      batch: "B",
      address: "Madurai",
      email: "aravindh@gmail.com",
      contact: 9876543210,
    },
  ]);
  const navigate = useNavigate();
  return (
    <div className="App">
   
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/teachers")}>
              Teacher
            </Button>
            <Button color="inherit" onClick={() => navigate("/students")}>
              Student
            </Button>
          </Toolbar>
        </AppBar>
   
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers teachers={teachers} setTeacher={setTeacher} />} />
        <Route path="/students" element={<Students students={students} setStudent={setStudent} />} />
        <Route path="/teacher/details/:id" element={<TeacherDetails teachers={teachers} />} />
        <Route path="/student/details/:id" element={<StudentDetails students={students} />} />
        <Route path="/add/teacher" element={<AddTeacher teachers={teachers} setTeacher={setTeacher} />} />
        <Route path="/add/student" element={<AddStudent students={students} setStudent={setStudent} />} />
        <Route path="/teacher/edit/:id" element={<EditTeacher teachers={teachers} setTeacher={setTeacher} />} />
        <Route path="/student/edit/:id" element={<EditStudent students={students} setStudent={setStudent} />} />
      </Routes>
    </div>
  );
}

export default App;