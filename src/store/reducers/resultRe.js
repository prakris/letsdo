import { showMe } from '../actions';

const initialState= {
    counter:0,
    result:[]
}

const resultReducer= (state = initialState, action) =>
{
    switch (action.type) {   
        case showMe.STORE_RESULT:
                let timeId=new Date()
                return {
                    ...state,
                    result: state.result.concat({id: timeId.getTime(), value: action.result })
                }

        case showMe.DELETE_RESULT:
                 const updatedArr=state.result.filter( upArr => upArr.id !== action.resultId)
                return {
                    ...state,
                    result:updatedArr
                }
    }
    return state;
};

export default resultReducer;