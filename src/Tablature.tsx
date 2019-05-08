import React from "react";
import times from "lodash/times";

export default function App() {
  return (
    <>
      <p>Tablature</p>
      <table>
        {times(4, () => (
          <tr>
            {times(16, () => (
              <td>0</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
}
