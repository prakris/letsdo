import { createStore } from "redux";

// step 2 creating reducer
const intitialState = {
    data: undefined
}
const reducer= (state = intitialState, action) =>
{   
    console.log(action)
    switch (action.type) {
        case "ATTACK":
                      action.payload +=  "hey";
            break;
    }
    
    return state;
}

// step 1 creating store
const store=createStore( reducer);

// step 3 subscribe 
store.subscribe(()=> {
    console.log("store is now :",store.getState());
});

// final  step 4 dispatch
store.dispatch({ type:"ATTACK", payload: "metal" });

