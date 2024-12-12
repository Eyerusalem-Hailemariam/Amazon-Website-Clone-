import {Type} from './action.type'
export const initialState = {
    basket:[]
}
export const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            const existsingItem = state.basket.find((item) =>item.id === action.item.id)
            if(!existsingItem) {
                return {
                    ...state,
                    basket: [...state.basket, {...action.item, amount:1}],
                };
            } else {
                const updatedBasket = state.basket.map((item) => {
                  return   item.id === action.item.id ? {...item, amount:item.amount + 1} :  item
                })
                return {
                    ...state,
                    basket :updatedBasket
                }
            }
    case Type.REMOVE_FROM_BASKET:
         const index = state.basket.findIndex     
        default:
            return state;
    }
};