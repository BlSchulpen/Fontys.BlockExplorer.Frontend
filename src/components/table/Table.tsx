import "./table.scss";
import MatTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Component } from "react";
import axios from 'axios';

export default class Table extends Component{
    constructor(cointType: string) {
        super(cointType);
        this.state = {blocks: "", cointType: cointType};
      }
      
    componentDidMount() {
        this.BlockList();
      }
    
      BlockList() {        
        axios.get(`https://63401384d1fcddf69cb096cc.mockapi.io/api/v1/blocks`)
        .then(res => {
          const blocks = res.data[0].id;
          this.setState({blocks: blocks });
        })
        console.log(this.state)
      }
    
    
    render() {
        const rows = [
            {
                number: 757033,
                time: "15:28:53",
                value: "0.02376721",
            },
            {
                number: 757032,
                time: "15:28:13",
                value: "0.01273429",
            }
        ];

        return (
            <MatTable aria-label="simple table" className="table" >
            <TableHead>
                <TableRow>
                    <TableCell className="tableCell"> Number</TableCell>
                    <TableCell className="tableCell">Time</TableCell>
                    <TableCell className="tableCell">Value</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.number}>
                        <TableCell className="tableCell">{row.number}</TableCell>
                        <TableCell className="tableCell">{row.time}</TableCell>
                        <TableCell className="tableCell">{row.value}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </MatTable>
        )
    }
}