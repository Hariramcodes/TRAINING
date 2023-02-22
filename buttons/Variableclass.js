import React from "react";
import './App.css';
class A extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            a:20,
            b:30,
            c:10,
            d:5
        }
    }
    changeA=()=>{
        this.setState({a:200});
    }
    changeB=()=>{
        this.setState({b:300});
    }
    changeC=()=>{
        this.setState({c:100});
    }
    changeD=()=>{
        this.setState({d:50});
    }
    Display=()=>{
        this.setState({a:2000});
        this.setState({b:3000});
        this.setState({c:4000});
        this.setState({d:500});
    }
    
    render(){
    return(
        <>
        <h4>A : {this.state.a}</h4>
        <h4>A : {this.state.b}</h4>
        <h4>A : {this.state.c}</h4>
        <h4>A : {this.state.d}</h4>
        <button onClick={this.changeA}>Change A</button>
        <button onClick={this.changeB}>Change B</button>
        <button onClick={this.changeC}>Change C</button>
        <button onClick={this.changeD}>Change D</button>
        <h1>{(this.state.a)+(this.state.b)+(this.state.c)+(this.state.d)}</h1>
        </>
    );
}
}
export default A;