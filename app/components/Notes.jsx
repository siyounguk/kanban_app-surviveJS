import React from 'react';
import Note from './Note.jsx';

export default ({notes, onEdit}) => {
    return (
        //<ul>{notes.map(note => ...}</ul> -
        //{}'s allow us to mix JavaScript syntax within JSX.
        //map returns a list of li elements for React to render.

        //<li key={note.id}>{note.task}</li> -
        //In order to tell React in which order to render the elements, we use the key property.
        // It is important that this is unique or else React won't be able to figure out the correct order in which to render.
        //If not set, React will give a warning. See Multiple Components for more information.
        <ul>{notes.map(note =>
                <li key={note.id}>
                    <Note task={note.task}
                    onEdit={onEdit.bind(null, note.id)}/>
                </li>
            )}
        </ul>
    );
}
