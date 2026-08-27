import { createReducer, on } from '@ngrx/store';
import { initialState } from "./cart.state";
import { addToCart } from './cart.action';

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state, { product })=> ({
        ...state,
        products: [...state.products, product]
    }))

)