import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';



interface AddPatientNotesProps {
    isModalState: boolean
    setIsModalState: (data: boolean) => void
    isLightMode: boolean
    handleSubmitAddNotes: (data: any) => void
    isBtnDisable: boolean
    setIsBtnDisable: (data: boolean) => void
}

export const AddPatientNotes = (props: AddPatientNotesProps) => {
    // const { subjectOptionsData, fetchData } = SubjectTypeOptionsHook();

    // useEffect(() => {
    //     // This effect will triggered to fetch notes subject options
    //     props.isModalState && fetchData();
    // }, [props.isModalState]);

    const {
        register,
        formState: { errors },
        handleSubmit,
        control,
        reset,
        resetField,
        setValue,
    } = useForm();

    const onSubmit = (data: any, e: any) => {
        e.preventDefault();
        props.setIsBtnDisable(true);
        let formData = {
            ...data,
        };
        props.handleSubmitAddNotes(formData);
    };

    return (
        <>
           Hi form add pateint ntoes
        </>
    )
}