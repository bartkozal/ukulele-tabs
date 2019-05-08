import React from "react";
import times from "lodash/times";
import "./tablature.css";

interface Props {
  notes: any;
}

const getTabInRow = (row: number) => ["A", "E", "C", "G"][row];

const getTabSignature = (row: number, note: string) =>
  [
    {
      A4: 0,
      B4: 2,
      C5: 3,
      D5: 5,
      E5: 7,
      F5: 8,
      G5: 10,
      A5: 12
    }, // A
    {
      E4: 0,
      F4: 1,
      G4: 3,
      A4: 5,
      B4: 7,
      C5: 8,
      D5: 10,
      E5: 12
    }, // E
    {
      C4: 0,
      D4: 2,
      E4: 4,
      F4: 5,
      G4: 7,
      A4: 9,
      B4: 11,
      C5: 12
    }, // C
    {
      G4: 0,
      A4: 2,
      B4: 4,
      C5: 5,
      D5: 7,
      E5: 9,
      F5: 11,
      G5: 12
    } //G
  ][row][note] || "-";

export default function Tablature(props: Props) {
  return (
    <>
      <p>Tablature</p>
      <table className="Tablature">
        <tbody>
          {times(4, row => (
            <tr key={row}>
              {times(17, column => {
                const note = props.notes[column];

                return column === 0 ? (
                  <td key={column}>{getTabInRow(row)}</td>
                ) : (
                  <td key={column}>
                    {note ? getTabSignature(row, note) : "-"}
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
