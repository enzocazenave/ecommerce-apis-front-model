import {
    ADD_PRODUCT_TO_CART,
    APPLY_DISCOUNTCOUPON,
    REMOVE_DISCOUNTCOUPON,
    UPDATE_CART,
    REMOVE_PRODUCT_FROM_CART,
    LOGINTOCHECKOUT, UPDATEISLOGGED, OVERRIDE_CART,
    UPDATEUSER
} from "./Action-types.js";
import backend from "../api/axios.js";

export const applyDiscountCoupon = (couponCode) => {
    return async (dispatch) => {
        try {
            const response = await backend.get(`${"/discount_coupons/code/"}${couponCode}`)
            const data = response.data

            return dispatch({
                type: APPLY_DISCOUNTCOUPON,
                payload: data,
            })
        } catch (error) {
            if (error.response.status === 404) {
                alert("cupón invalido.")
            } else {
                console.error("Error aplicando cupón:", error);
                alert(error.response.data)
            }
        }
    }
}

export const updateCart = (product) => {
    return async (dispatch) => {
        return dispatch({
            type: UPDATE_CART,
            payload: product,
        })
    }
}

export const addProductToCart = (product) => {
    return async (dispatch) => {
        return dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: product,
        })
    }
}

export const removeDiscountCoupon = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: REMOVE_DISCOUNTCOUPON,
                payload: {},
            })
        } catch (error) {
            console.error("Error quitando cupón:", error);
            alert(error.response.data)
        }
    }
}

export const removeCartProductById = (productId) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: REMOVE_PRODUCT_FROM_CART,
                payload: productId,
            })
        } catch (error) {
            console.error("Error quitando producto del carrito:", error);
            alert(error.response.data)
        }
    }
}

export const updateLoginToCheckout = (booleanValue) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: LOGINTOCHECKOUT,
                payload: booleanValue,
            })
        } catch (error) {
            console.error("Error configurando redirect del login:", error);
            alert(error.response.data)
        }
    }
}

export const updateIsLogged = (booleanValue) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: UPDATEISLOGGED,
                payload: booleanValue,
            })
        } catch (error) {
            console.error("Error configurando login global variable:", error);
            alert(error.response.data)
        }
    }
}

export const overrideCart = (cart) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: OVERRIDE_CART,
                payload: cart,
            })
        } catch (error) {
            console.error("Error overrideando carrito:", error);
            alert(error.response.data)
        }
    }
}

export const updateUser = (user) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: UPDATEUSER,
                payload: user,
            })
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            alert(error.response.data)
        }
    }
}