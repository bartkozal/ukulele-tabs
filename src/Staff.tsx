import React from "react";
import times from "lodash/times";
import reverse from "lodash/reverse";
import "./staff.css";

const getNoteInRow = (row: number) =>
  reverse(["C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A"])[
    row
  ];

export default function Staff() {
  return (
    <>
      <p>Staff</p>
      <table className="Staff">
        {times(13, row => (
          <tr>
            {times(17, column =>
              column === 0 ? <td>{getNoteInRow(row)}</td> : <td>0</td>
            )}
          </tr>
        ))}
      </table>
    </>
  );
}
