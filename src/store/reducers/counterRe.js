import  {showMe} from '../actions';

const initialState= {
    counter:0
    
}

const counterReducer= (state = initialState, action) =>
{
    switch (action.type) {
        case showMe.INCREMENT:
                  const newState= Object.assign({},state) 
                  newState.counter= state.counter + 1;
                  return  newState;
                //  {
                //     counter: state.counter + 1
                // };
        case showMe.DECREMENT:
                return  { 
                    ...state,
                    counter: state.counter - 1
                };    
        case showMe.ADD:
                return  { 
                    ...state,
                    counter: state.counter + action.val
                };
        case showMe.SUBTRACT:
                return  { 
                    ...state,
                    counter: state.counter - action.val
                 };    
       
    }
    return state;
};

export default counterReducer;