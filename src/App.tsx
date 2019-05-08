import React, { useState } from "react";
import omit from "lodash/omit";
import Staff from "./Staff";
import Tabs from "./Tabs";
import "./app.css";

export default function App() {
  const [notes, setNotes] = useState({});

  const onNoteClick = (column: number, note: string) => {
    notes[column] === note
      ? setNotes(omit(notes, column))
      : setNotes({ ...notes, [column]: note });
  };

  return (
    <div className="App">
      <h1>Notes to Ukulele Tabs</h1>
      <p className="App__hint">
        Hint: Click on staff to place a note. Click on a tab to toggle the tab.
      </p>
      <Staff notes={notes} onNoteClick={onNoteClick} />
      <Tabs notes={notes} />
    </div>
  );
}
