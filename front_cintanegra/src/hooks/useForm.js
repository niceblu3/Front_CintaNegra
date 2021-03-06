import { useState } from 'react';

function useForm(callback){
    const [inputs,setInputs] = useState({});

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        callback(inputs);

    } //Va a cachar el submit de mi form

    const handleInputChange = (event) => {
        event.persist();
        const {name,value} = event.target
        setInputs(fields => ({...fields,[name]:value}) );
    }//Se va ejecutar en el onChange de los inputs y va a modifcar el valor

    return {
        inputs,
        handleSubmit,
        handleInputChange
    }
}

export default useForm;

// Reglas
// 1.- poner subfijo 'use'
// 2. Utilizar un hook de react (useState)
// 3. Valor por default (callback)
// 4. simpre tienes que regresesar mas de un elemento (Objeto como un arreglo)
