import { useState, ChangeEvent, FormEvent, use } from 'react';
import {LoginFormState} from '../types/Shipment';

interface UseLoginFormResult {
    formData: LoginFormState;
    message: string | null;
    isLoading: boolean;
    messageClass: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}



export const useLoginForm = (onLoginSuccess?: (data: LoginFormState) => void): UseLoginFormResult => {
    const [formData, setFormData] = useState<LoginFormState>({ email: "",
         password: "" , isValidUser: false});
    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const messageClass = message ?
        (message.includes("exitoso") ? 'message-box success' : 'message-box error') : '';

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
       
        setFormData(prevData => ({ ...prevData, [name]: value }));
        setMessage(null);
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setMessage(null);
        setIsLoading(true);

        if (!formData.email || !formData.password) {
            setMessage("Favor de ingresar Contraseña y Correo.");
            setFormData({ ...formData, isValidUser: false });
            setIsLoading(false);
            return;
        }

 
    try {
       const response = await fetch("http://localhost:8000/login" , {
           method: "POST",
           headers: {'Content-Type': "application/json"},
           body: JSON.stringify(formData)
       });
   const data = await response.json();
       if (response.ok) {
           if (onLoginSuccess) {
                onLoginSuccess({ ...formData, isValidUser: data.isLoginValid });
               setFormData({ ...formData, isValidUser: data.isLoginValid });      
               setMessage(data.message||"Login Exitoso")   
           };
       }else if (response.status === 401) {
           setMessage(data.detail || "Email o Contraseña Invalido");
           setFormData({ ...formData, isValidUser: false });
       }
    } catch (error) {
       console.log("Error de red:",error);
       setMessage("Fallo la conexion con el servirdor")
       
    }

        setIsLoading(false);
    };

    return {
        
        formData,
        message,
        isLoading,
        messageClass,
        handleInputChange,
        handleSubmit,
    };
};