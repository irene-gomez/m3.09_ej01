import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            isClicked: false
        };
        this.searchEven = this.searchEven.bind(this);
        this.searchNumber = this.searchNumber.bind(this);
    }

    searchNumber(e) {
        this.setState({
            inputValue: parseInt(e.target.value)
        });
    }
    searchEven() {
        this.setState({
            isClicked: !this.state.isClicked
        });
    }

    render() {
        const numbers = [1, 4, 6, 8, 45, 89];
        const { inputValue, isClicked } = this.state;
        console.log(isClicked);
        return (
            <div className="App">
                <form>
                    <input type="number" onChange={this.searchNumber} />
                    <input type="checkbox" onClick={this.searchEven} /> Solo números pares
                </form>
                <ul className="list">
                    {numbers
                        .filter(num => num > inputValue)
                        .filter(num => (isClicked ? num % 2 === 0 : true))
                        .map((num, index) => (
                            <li className="list__item" key={index}>{num}</li>
                        ))}
                </ul>
            </div>
        );
    }
}

export default App;
