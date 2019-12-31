
const initState = 0;
export const calculatorReducers = (state = initState, action) => {

    switch (action.type) {
        case 'ADD':{
            return state + 1
        }
        case 'MINUS':{
            return state - 1
        }  
    
        default: {
            return state;
        }      
    }

}