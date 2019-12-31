const initState = {
    isEmpty: true,
    productItem: [],

}

export const cartReducers = (state = initState, action) => {

    switch (action.type) {
        case 'MUA':{
            const products = state.productItem.find(x => x.productId === action.data.productId)
            if(products){
                return state
            }
            return {
                ...state,
                isEmpty: false,
                productItem: [...state.productItem, action.data]
            }
        }
        case 'XOA':{
            const products = [...state.productItem.filter(x => x.productId !== action.data.productId)]
            return {
                ...state,
                isEmpty: products.length <= 0,
                productItem: products
                
            }
        }  
    
        default: {
            return {...state};
        }      
    }

}