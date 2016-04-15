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
                <button onClick={this.addNote}>+</button>
                <ul>{notes.map(note =>
                        <li key={note.id}>{note.task}</li>
                    )}
                </ul>
            </div>
        )
    }

    // We are using an experimental feature known as property
    // initializer here. It allows us to bind the method `this`
    // to point at our *App* instance.
    //
    // Alternatively we could `bind` at `constructor` using
    // a line, such as this.addNote = this.addNote.bind(this);
    addNote = () => {
        // It would be possible to write this in an imperative style.
        // I.e., through `this.state.notes.push` and then
        // `this.setState({notes: this.state.notes})` to commit.
        //
        // I tend to favor functional style whenever that makes sense.
        // Even though it might take more code sometimes, I feel
        // the benefits (easy to reason about, no side effects)
        // more than make up for it.
        //
        // Libraries, such as Immutable.js, go a notch further.
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New task'
            }])
        },
        () => console.log('set state'));
    };
}
