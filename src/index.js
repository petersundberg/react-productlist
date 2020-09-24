import React from "react";
import ReactDOM from "react-dom";

class Productlist extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 2,
                    name: "Hammare B14",
                    price: 129,
                },
                {
                    id: 4,
                    name: "Fiskespö Celeste",
                    price: 799,
                    weight: 230,
                },
                {
                    id: 3,
                    name: "Frontlastare Volvo B16",
                    price: 35000,
                },
            ],
        };
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.products.map((product) => (
                        <Productinfo product={product} />
                    ))}
                </ul>
            </div>
        );
    }
}

function Productinfo(props) {
    return (
        <article>
            <h3>{props.product.name}</h3>
            <p>{props.product.price}</p>
        </article>
    );
}

ReactDOM.render(<Productlist />, document.getElementById("root"));
