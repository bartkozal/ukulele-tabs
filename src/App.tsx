import React, { useState } from "react";
import omit from "lodash/omit";
import Staff from "./Staff";
import Tablature from "./Tablature";

export default function App() {
  const [notes, setNotes] = useState({});

  const onNoteClick = (column: number, note: string) => {
    notes[column] === note
      ? setNotes(omit(notes, column))
      : setNotes({ ...notes, [column]: note });
  };

  return (
    <>
      <h1>Notes to Ukulele Tabs</h1>
      <Staff notes={notes} onNoteClick={onNoteClick} />
      <Tablature notes={notes} />
    </>
  );
}
