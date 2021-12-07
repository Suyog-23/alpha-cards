import React from "react";

export default class Ticker extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
       setInterval(
            () => this.tick(),
            1000
          );
    }

    // tick(){
    //     this.setState(state, props) );
    // }

    tick(){
        this.setState((state, props) => ({
            date: new Date()
        }));
    }

    render(){
        return(
            <p>{this.state.date.toLocaleTimeString()}</p>
        );
    }

}