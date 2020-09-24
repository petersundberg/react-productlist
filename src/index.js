import React from "react";
import ReactDOM from "react-dom";

class Citylister extends React.Component {
    constructor() {
        super();
        this.state = {
            sweCities: ["Stockholm", "Göteborg", "Lund", "Växjö", "Härnösand"],
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        /* Att direkt modifiera en array går inte i React, 
        därför kan man lösa det så här */

        // Create a new array based on current state:
        let sweCities = [...this.state.sweCities];

        // Add item to it
        sweCities.push(event.target.newcity.value);

        // Set state
        this.setState({ sweCities });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.sweCities.map((city) => (
                        <li>{city}</li>
                    ))}
                </ul>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input name="newcity" type="text" />
                    <input type="submit" value="Lägg till stad" />
                </form>
            </div>
        );
    }
}

ReactDOM.render(<Citylister />, document.getElementById("root"));
