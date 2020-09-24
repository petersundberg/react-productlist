import React from "react";
import ReactDOM from "react-dom";

function DagensProgram(props) {
    return (
        <div>
            <h1>{props.today}</h1>
            <ol>
                <li>Repetition TS</li>
                <li>React introduktion</li>
                <ul>
                    <li>Vad?</li>
                    <li>Varför?</li>
                    <li>Hur? (JSX)</li>
                    <li>API/Objekt</li>
                    <li>Komponenter</li>
                    <li>Props</li>
                    <li>State</li>
                </ul>
                <li>React listor & formulär</li>
                <li>React Komponenter i Komponenter</li>
            </ol>
        </div>
    );
}

class TodaysProgram extends React.Component {
    constructor(props) {
        super();
        // Wrap html-expression in fragment (empty HTML-tag)
        this.state = {
            agenda: (
                <>
                    <li>Repetition TS</li>
                    <li>React introduktion</li>
                    <ul>
                        <li>Vad?</li>
                        <li>Varför?</li>
                        <li>Hur? (JSX)</li>
                        <li>API/Objekt</li>
                        <li>Komponenter</li>
                        <li>Props</li>
                        <li>State</li>
                    </ul>
                    <li>React listor & formulär</li>
                    <li>React Komponenter i Komponenter</li>
                </>
            ),
        };
    }

    render() {
        return (
            <div>
                <h1>{this.props.today}</h1>
                <ol>{this.state.agenda}</ol>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <DagensProgram today="24 september" />,
        <TodaysProgram today="24th of september" />
    </div>,
    document.getElementById("root")
);
