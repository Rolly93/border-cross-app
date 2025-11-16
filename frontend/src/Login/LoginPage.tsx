import React from 'react';
import { useLoginForm } from './useLoginForm'; // Importar el hook
import '../css/Loging.css'; // Asumiendo que existe
import {LoginFormState} from '../types/Shipment';

interface LoginPageProps {
    onLoginSuccess?: (data: LoginFormState) => void;
}

const LogingPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
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
                <form className='login-form' onSubmit={handleSubmit}>
                <h3>User Login </h3>
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