import React from "react";
import times from "lodash/times";
import "./tablature.css";

interface Props {
  notes: any;
}

const getTabInRow = (row: number) => ["A", "E", "C", "G"][row];

export default function Tablature(props: Props) {
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
