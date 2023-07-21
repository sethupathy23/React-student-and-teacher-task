import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function Teachers({ teachers, setTeacher }) {
  const navigate = useNavigate();
  const deleteTeacher = (id) => {
    const alterTeacher = teachers.filter((del)=>del.id !== id)
    setTeacher(alterTeacher)
  }
  return (
    <div className="data">
      <h3 className="title">TEACHER'S DATA :-</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>GENDER</StyledTableCell>
              <StyledTableCell>SUBJECT</StyledTableCell>
              <StyledTableCell>EMAIL</StyledTableCell>
              <StyledTableCell>ACTION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((ele, index) => (
              <StyledTableRow index={index} key={ele.id}>
                <StyledTableCell component="th" scope="row">
                  {ele.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {ele.name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {ele.gender}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {ele.subject}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {ele.email}
                </StyledTableCell>
                <StyledTableCell>
                  <IconButton
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/teacher/details/${index}`)}
                  >
                    <InfoIcon></InfoIcon>
                  </IconButton>
                  <IconButton
                    variant="contained"
                    color="success"
                    onClick={() => navigate(`/teacher/edit/${ele.id}`)}
                  >
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton variant="contained" color="error" onClick={()=>deleteTeacher(ele.id)}>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="btn">
        <Button variant="contained" onClick={() => navigate("/add/teacher")}>
          Create Teacher Data
        </Button>
      </div>
    </div>
  );
}