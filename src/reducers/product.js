const initState = {
    fetched: false,
    productItem: [],

}
export const productReducers = (state = initState, action) => {

    switch (action.type) {
        case 'FETCH_PRODUCT':{
            return {
                ...state,
                fetched: true,
                productItem: action.data
            }
        }
        default: {
            return {...state};
        }      
    }

}