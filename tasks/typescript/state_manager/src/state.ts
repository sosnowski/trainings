import { FormData } from './form_data';

interface State {
    userLogin?: string;

    formData: Object;
    formIsValid: boolean;

    updated: Date;
};

let defaultState: State = {
    userLogin: undefined,
    formData: {},
    formIsValid: false,
    
    updated: new Date()
};

export { State, defaultState };

