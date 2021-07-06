import React, {useState} from 'react'


export function useForm(initialFValues) {

    const [ values, setValues] = useState(initialFValues);
    const [ errors, setErrors] = useState({});


    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
    }
}

// export function Form() {
//     return (
//         <div>
            
//         </div>
//     )
// }

