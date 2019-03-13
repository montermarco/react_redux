import React from "react";
import { connect } from "react-redux";

const Counter = props => {
    return (
        <div>
            <h2>Counter</h2>
            <h3>{props.state.counter}</h3>
            
            <button onClick={() => props.dispatch({ type: "SUB" })}>Delete</button>
            <button onClick={() => props.dispatch({ type: "ADD" })}>Add</button>

          
        </div>
    );
};

const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(Counter);






			

