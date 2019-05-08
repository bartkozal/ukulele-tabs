import React from "react";
import times from "lodash/times";
import reverse from "lodash/reverse";
import "./staff.css";

interface Props {
  onNoteClick: (column: number, note: string) => void;
  notes: any;
}

const getNoteInRow = (row: number) =>
  reverse([
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B4",
    "C5",
    "D5",
    "E5",
    "F5",
    "G5",
    "A5"
  ])[row];

export default function Staff(props: Props) {
  return (
    <>
      <p>Staff</p>
      <table className="Staff">
        <tbody>
          {times(13, row => (
            <tr key={row}>
              {times(17, column => {
                const note = getNoteInRow(row);

                return column === 0 ? (
                  <td key={column}>{note}</td>
                ) : (
                  <td
                    onClick={() => props.onNoteClick(column, note)}
                    key={column}
                  >
                    {props.notes[column] === note ? "o" : "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
