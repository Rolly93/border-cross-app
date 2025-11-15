import { useState, ChangeEvent, FormEvent } from 'react';

// Define las interfaces de forma local para mayor claridad
interface LoginFormState {
    email: string;
    password: string;
}

interface UseLoginFormResult {
    formData: LoginFormState;
    message: string | null;
    isLoading: boolean;
    messageClass: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}



export const useLoginForm = (onLoginSuccess?: (data: LoginFormState) => void): UseLoginFormResult => {
    const [formData, setFormData] = useState<LoginFormState>({ email: "", password: "" });
    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Determina la clase CSS del mensaje (éxito o error)
    const messageClass = message ?
        (message.includes("exitoso") ? 'message-box success' : 'message-box error') : '';

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        // Limpiar mensaje al empezar a escribir
        setMessage(null);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setMessage(null);
        setIsLoading(true);

        if (!formData.email || !formData.password) {
            setMessage("Favor de ingresar Contraseña y Correo.");
            setIsLoading(false);
            return;
        }

        if (onLoginSuccess){onLoginSuccess(formData)}
        // --- Simulación de Latencia de Red ---
//        await new Promise(resolve => setTimeout(resolve, 1500)); 
//
//     try {
//        const response = await fetch("http://localhost:8000/login" , {
//            method: "POST",
//            headers: {'Content-Type': "application/json"},
//            body: JSON.stringify(formData)
//        });
//    const data = await response.json();
//        if (response.ok) {
//            setMessage("Inicio de sesion exitoso")
//            if (onLoginSuccess) {
//                onLoginSuccess(formData)
//            }else{setMessage(data.deail||"Email o Contraseña Invalido")}
//        }
//     } catch (error) {
//        console.log("Error de red:",error);
//        setMessage("Fallo la conexion con el servirdor")
//        
//     }

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