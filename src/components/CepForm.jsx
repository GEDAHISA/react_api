import React, { useEffect, useState } from 'react'
import { LabelInput } from './labelInput'
import axios from 'axios'

export const CepForm = () => {
    const [data, setData] = useState('');

    const getDataCep = () => {
        axios.get('https://viacep.com.br/ws/60710660/json/')
            .then((response) => {
                console.log(response.data)
                setData(response.data);
            });
    };

    useEffect(() => {
        getDataCep()
    }, [])

    return (
        <form>
            <LabelInput name="Cep" width={2} />
            <LabelInput name="Logradouro" width={6} />

            {JSON.stringify(data)}

        </form>
    )
}
