import { Product } from "./model";

export interface CartState{

    products:Product[];
 

}

export const initialState: CartState={

    products:[]
}

