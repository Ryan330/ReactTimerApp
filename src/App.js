import React from "react";
import Counter from "./Counter"



function arrayPull(objNum) {
  return(<Counter key={objNum.id} numValue={objNum.value}/>);
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValues: [{id: (new Date()).getTime(), value: 0}]
        };
    }


    _handleClick = () => {
        let objNewNum = {
            id: (new Date()).getTime(),
            value: 0
        };

        this.setState({
            counterValues: this.state.counterValues.concat(objNewNum)
        })
    }


    render() {
        return (
            <div className="container">
                <button onClick={this._handleClick}>Add New Timer</button>

                <div className="counter-box">
                    {this.state.counterValues.map(arrayPull)}
                </div>
                
            </div>

        )
    }
}

export default App;
