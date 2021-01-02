import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


const useFetchGifs = ( category ) => {

    const ApiKey = "IPDmvhDzm0liJgSooGZzCeivUyTZZ82L";

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    //Uso un useEffect para traer la data de la Api de giphy, de lo contrario si en algun momento cambia algo
    // de este componente va a volver a traer nuevamente la data.
    useEffect( () => {

        getGifs( category, ApiKey )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })

    }, [ category ]);

    return state;
}

export default useFetchGifs
