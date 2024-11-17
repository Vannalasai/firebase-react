import React, { useCallback, useEffect, useMemo, useReducer } from "react";

import { db } from "../firebase";
import { collection, getDocs, doc, getDoc, addDoc, query, where } from "firebase/firestore";

const initialState = { 
    data: [], 
    loading: true, 
    error: null, 
}; 

function reducer(state, action) {
    switch (action.type) { 
        case 'FETCH_SUCCESS': 
            return {
                ...state, 
                data: action.payload, 
                loading: false, 
            }; 
            case 'FETCH_ERROR': 
            return { 
                ...state, 
                error: action.payload, 
                loading: false, 
            }; 
            default: 
            return state; 
        } }

const Home = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const firebaseFunction = async () => {

        try{
            const collectionReference = collection(db, "products")
            const q = query(collectionReference, where('price', '<', 500), where('category', '==', 'jewelery'))
            getDocs(q).then(response => {
                response.forEach(price => {
                    console.log(price.data().price)
                })
            })
            dispatch({ type: 'FETCH_SUCCESS', payload: q });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message});
        }
        }

        firebaseFunction()
    }, [])

    const { q, loading, error } = state;

    if (loading) return console.log('loading...'); if (error) return console.log('Error');

    return(
        <div>Home</div>
    )
    }

export default Home;