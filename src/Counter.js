import React from "react";

//Class Method
class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentValue: props.numValue
        };

        setInterval(this._increaseValue, 1000);
    }

    _increaseValue = () => {
        let newNum = this.state.currentValue + 1;

        this.setState({
            currentValue: newNum
        });
    };

    render() {
        return(
            <div className="counter">
                {this.state.currentValue}
            </div>
        );
    }
}


export default Counter;