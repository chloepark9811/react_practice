//jsx- can get better completion

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    state = {
        count:0,


    };




    styles = {
        fontSize : 10,
        fontWeight: 'bold'

    };


    //constructor() {
    //  super();
    //  this.handleIncrement.bind(this);
    // }

    handleIncrement = () =>{
        this.setState({ count: this.state.count + 1 });

        //console.log('Increment Clicked', this);
        //obj.method();
        //function();
    }

    render() {


        return(

            <div>
            <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-primary btn-sm">Increment</button>


        </div>

        );
    }

    getBadgeClasses() {
        let classes = "badge m-4 badge- ";
        classes += this.state.count === 0 ? "warning": "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return this.state.count === 0 ? <h1>Zero</h1>: count;
    };

}


export default Counter;
