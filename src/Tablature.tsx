import React from "react";
import times from "lodash/times";
import "./tablature.css";

const getTabInRow = (row: number) => ["A", "E", "C", "G"][row];

export default function Tablature() {
  return (
    <>
      <p>Tablature</p>
      <table className="Tablature">
        {times(4, row => (
          <tr>
            {times(17, column =>
              column === 0 ? <td>{getTabInRow(row)}</td> : <td>0</td>
            )}
          </tr>
        ))}
      </table>
    </>
  );
}
