import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, "16 Mar, 2019", "Elvis Presley", "Robbery", "15 years", 312.44),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "Stealing",
    "50 years",
    866.99,
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Grand Theft Auto",
    "22 years",
    100.81,
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Assault",
    "10 years",
    654.39,
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Armed Robbery",
    "22 years",
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <h1>Recent Crimes</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Crime Detected</TableCell>
            <TableCell>Suspect's Name</TableCell>
            <TableCell>Type of Crime</TableCell>
            <TableCell>Possible Sentence</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more crimes
      </Link>
    </React.Fragment>
  );
}
