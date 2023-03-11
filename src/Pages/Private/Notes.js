import React, { useCallback, useEffect, useRef, useState } from "react";

const Notes = () => {

    const noteTextAreaElement = useRef(null);
    const [notes, setNotes] = useState([]);
    let storedNotes = localStorage.getItem("notes")

    const [, updateState] = React.useState({});
    const forceUpdate = useCallback(() => updateState({}), []);



    useEffect(() => {

        if (typeof storedNotes == "string") {
            setNotes(JSON.parse(storedNotes));
        }
    }, []);


    useEffect(() => {

        localStorage.setItem('notes', JSON.stringify(notes))

    }, [notes])

    const saveToLocalStorage = () => {
        let newNote = notes
        if (noteTextAreaElement.current?.value) {

            newNote.push({
                note: noteTextAreaElement.current?.value,
                date: new Date()
            })
            localStorage.setItem("notes", JSON.stringify(newNote))

        }
        forceUpdate()

    }

    const deleteFromStorage = (index) => {

        let newNotes = []


        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if (i != index) {
                newNotes.push(element)
            }

        }
        setNotes(newNotes)

        forceUpdate()



    }

    const NoteTemplate = () => {
        return <>
            {notes.map((note, index) => {
                return <div key={+index} className="d-flex mt-3 mb-3">
                    <div className="d-inline-flex ">
                        <div className='mx-3'>{note.note}</div>
                        <button className='btn btn-sm btn-danger' onClick={() => deleteFromStorage(index)}>Delete</button>
                    </div>
                </div>
            })}
        </>
    }


    return <>
        <h5>Notes</h5>
        <section className=''>

            <div className="p-3">
                <div className="mb-6">
                    <label htmlFor="city_search" className="block mb-2 text-sm font-medium text-gray-900">Type Your Note</label>
                    <textarea
                        id="city_search"
                        name='city_search'
                        ref={noteTextAreaElement}
                        placeholder='Enter city...'
                        className="form-control p-3" ></textarea>

                    <button className=" btn btn-primary btn-md mt-3" onClick={saveToLocalStorage} >Save</button>
                </div>


                <div>
                    <NoteTemplate />
                </div>
            </div>
        </section>

    </>
}

export default Notes