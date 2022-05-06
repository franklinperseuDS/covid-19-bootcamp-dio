import React, { memo, useCallback, useState} from "react";
import { useEffect } from "react";
import {ContainerStyled} from './style';
import Board from './components/Board';
import Painel from './components/Painel';
import API from '../../api';
function Main(){
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil');
    const updateAt = new Date().toLocaleDateString()
    const getCovidData = useCallback((country) => {
        API.getCountry(country)
        .then(data => setData(data))

    },[])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = ( {target}) => {
        const country = target.value
        setCountry(country)
    }

    return (
        <ContainerStyled>
            <div className="mb-2">
            <Painel 
            data ={data}
            updateAt= {updateAt}
            onChange= {handleChange}
            country = { country }
            getCovidData = { getCovidData}
            />
            </div>
            <Board data={data}    />
        </ContainerStyled>
    )
}

export default memo(Main)