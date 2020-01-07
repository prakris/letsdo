import React from "react";
import { createStore } from "redux";


class Main extends React.Component {
    render()
    {   
        // step 2 creating reducer
        const reducer= (state,action) =>
        {
            if(action.type === "ATTACK" )
            {
                return action.payload
            }
            return state;
        }

        // step 1 creating store
        const store=createStore( reducer,"peace");

        // step 3 subscribe 
        store.subscribe(()=> {
            console.log("store is now :",store.getState());
        });

        // final  step 4 dispatch
        store.dispatch({ type:"ATTACK", payload: "metal" });


        return(
             <div>
                hey
             </div>
          );
    } 
    
}

export default Main