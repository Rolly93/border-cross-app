import React from 'react';
import { useLoginForm } from './useLoginForm'; // Importar el hook
import '../css/Loging.css'; // Asumiendo que existe

interface LoginFormState {
    email: string;
    password: string;
}

interface LoginPageProps {
    onLoginSuccess?: (data: LoginFormState) => void;
}

const LogingPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
    // 1. Usar el custom hook para obtener la lógica y el estado
    const { 
        formData, 
        message, 
        isLoading, 
        messageClass, 
        handleInputChange, 
        handleSubmit 
    } = useLoginForm(onLoginSuccess);

    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            
            <div className="login-container">
                <h3>User Login </h3>
                {/* 2. Usar handleSubmit directamente en el formulario */}
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email"
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            aria-label='Email Address'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            aria-label='Password'
                            required
                        />
                    </div>
                    
                    {/* 3. Mostrar el mensaje usando la clase CSS */}
                    {message && <div className={messageClass}>{message}</div>}
                    
                    <button 
                        type='submit'
                        disabled={isLoading}
                        className='login-button'
                    >
                        {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                    </button>
                </form>
            </div>
        </>
    );
}

export default LogingPage;