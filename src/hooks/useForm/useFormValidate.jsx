import { useState } from 'react';

import { useForm } from "react-hook-form";

const useFormValidate = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => console.log(data);

    return {
        register,
        handleSubmit,
        onSubmit,
        errors
    }
}

export default useFormValidate;
