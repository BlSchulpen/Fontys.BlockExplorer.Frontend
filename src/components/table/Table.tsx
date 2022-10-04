import "./table.scss";
import MatTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
    {
    id: 1143155,
    product: "Acer Nitro 5",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    }
];

const Table = () => {
    return (
        <TableContainer component={Paper} className="table">
        <MatTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Hash</TableCell>
              <TableCell className="tableCell">Time</TableCell>
              <TableCell className="tableCell">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MatTable>
      </TableContainer>
          )
};

export default Table;