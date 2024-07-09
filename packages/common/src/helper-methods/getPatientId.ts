import { useContext } from 'react';
import { PatientContext } from '../context';

export const GetPatientId = () => {
    const { patient_data } = useContext(PatientContext);
    let patient_id: any = 0;

    if (patient_data?.patient_id) {
        patient_id = patient_data?.patient_id;
    } else {
        patient_id = Number(window.location.pathname.split('/')[2]);
    }
    return patient_id;
};