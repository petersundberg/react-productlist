import React from "react";
import ReactDOM from "react-dom";

class Clicker extends React.Component {
    constructor(props) {
        super();
        this.state = {
            counterValue: 1,
            lista: ["första", "andra"],
        };
        this.doubleValue = this.doubleValue.bind(this);
    }

    doubleValue() {
        this.setState({
            counterValue: this.state.counterValue * 2,
        });
    }

    setRandomValue() {
        this.setState({
            counterValue: Math.floor(Math.random() * 10),
        });
    }

    render() {
        return (
            <div>
                <p>Värde: {this.state.counterValue}</p>
                <button onClick={this.doubleValue}>Dubbla</button>
                <button onClick={() => this.setRandomValue()}>Slumpa</button>
            </div>
        );
    }
}

ReactDOM.render(<Clicker />, document.getElementById("root"));
