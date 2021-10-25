import React from "react";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes.js";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Header />
            {notes.map((note) => {
                return (
                    <Note
                        key={note.id}
                        heading={note.title}
                        desc={note.content}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
