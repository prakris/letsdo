import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { showMe } from '../../store/actions';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'INCREMENT':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'DECREMENT':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'ADD':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'SUBTRACT':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        console.log("s",showMe);
        
        console.log('Inside' , this.props.ctr, this.props.storeResult)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                 <hr />
                <button  onClick={() => this.props.onStoredResult(this.props.ctr)}>store result</button>
                <ul>
                    {this.props.storeResult.map( strResult => 
                            <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    )
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>
{
    console.log('state',state);
    return {
        ctr: state.ctrRe.counter,
        storeResult: state.rstRe.result
    };
};

const mapDispatchToProps = dispatch =>
{
    return {
        onIncrementCounter: () => dispatch({type: showMe.INCREMENT}),
        onDecrementCounter: () => dispatch({type: showMe.DECREMENT}),
        onAddCounter: () => dispatch({type: showMe.ADD, val: 10}),
        onSubtractCounter: () => dispatch({type: showMe.SUBTRACT, val: 15}),
        onStoredResult: (result) => dispatch({type: showMe.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: showMe.DELETE_RESULT, resultId : id})

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);