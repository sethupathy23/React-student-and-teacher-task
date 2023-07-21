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

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function Students({ students, setStudent }) {
  const navigate = useNavigate();
  const deleteStudent = (id) => {
    const alterStudent = students.filter((del)=>del.id !== id)
    setStudent(alterStudent);
  }
  return (
    <div className="data">
      <h3 className="title">STUDENT'S DATA :-</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>STANDARD</StyledTableCell>
              <StyledTableCell>BATCH</StyledTableCell>
              <StyledTableCell>EMAIL</StyledTableCell>
              <StyledTableCell>ACTION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((ido, index) => (
              <StyledTableRow index={index} key={ido.id}>
                <StyledTableCell component="th" scope="row">
                  {ido.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {ido.name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {ido.standard}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {ido.batch}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {ido.email}
                </StyledTableCell>
                <StyledTableCell>
                  <IconButton
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/student/details/${index}`)}
                  >
                    <InfoIcon></InfoIcon>
                  </IconButton>
                  <IconButton
                    variant="contained"
                    color="success"
                    onClick={() => navigate(`/student/edit/${ido.id}`)}
                  >
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton variant="contained" color="error" onClick={()=>deleteStudent(ido.id)}>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="btn">
        <Button variant="contained" onClick={() => navigate("/add/student")}>
          Create Student Data
        </Button>
      </div>
    </div>
  );
}