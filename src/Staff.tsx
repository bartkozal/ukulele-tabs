import React from "react";
import times from "lodash/times";

export default function App() {
  return (
    <>
      <p>Staff</p>
      <table>
        {times(13, () => (
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
