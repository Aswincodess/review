import { createAction, props } from '@ngrx/store';
import { Product } from './model';

export const addToCart = createAction(
    '[Cart] Add To Cart',
    props<{ product:Product }>()
)