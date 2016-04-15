import uuid from 'node-uuid';

import React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn Webpack'
                },
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        };
    }

    render() {

        const notes = this.state.notes;

        return (
            //<ul>{notes.map(note => ...}</ul> -
            //{}'s allow us to mix JavaScript syntax within JSX.
            //map returns a list of li elements for React to render.

            //<li key={note.id}>{note.task}</li> -
            //In order to tell React in which order to render the elements, we use the key property.
            // It is important that this is unique or else React won't be able to figure out the correct order in which to render.
            //If not set, React will give a warning. See Multiple Components for more information.

            <div>
                <ul>{notes.map(note =>
                        <li key={note.id}>{note.task}</li>
                    )}
                </ul>
            </div>
        )
    }
}
