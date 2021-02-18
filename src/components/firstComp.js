import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            name: "Joe",
            health: 100,
            level: 1,
            lowLevelClass: "danger-red",
        };
        this.clickedGirl = this.clickedGirl.bind(this);
    }

    clickedGirl() {
        this.setState({
            health: this.state.health - 25
        }, function() {
            console.log("HEY I CLICKED THE GIRL AND HER HEALTH IS NOW " + this.state.health);
        });
    }

    render() {
        return(<div id={"parent"}>
            <Header />
            <div className={`blue-bg ${(this.state.health < 55) ? this.state.lowLevelClass : ""}`}>
                <div className={"user-info"}>
                    <h3>Name: {this.state.name}</h3>
                    {/* <h3>Health: {this.state.health}</h3> */}
                    <h3>Level: {this.state.level}</h3>
                </div>
                <GirlImage clickedGirl={this.clickedGirl} health={this.state.health} />
            </div>
        </div>);
    }
}

class GirlImage extends Component {
    constructor() {
        super();
        this.state = {
            gameOver: "SORRY YOU ARE DEAD!!!!",
        };
    }

    render() {
        return(<div className="GirlImageComp">
            <img src="/img/bape.png" alt={"Girl with Bape"} data-girl={"Jane"} onClick={this.props.clickedGirl} />
            <h3>Health: {(this.props.health <= 0) ? this.state.gameOver : this.props.health}</h3>
        </div>);
    }
}

var Header = function() {
    return(<header>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </header>);
};

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);

module.hot.accept();