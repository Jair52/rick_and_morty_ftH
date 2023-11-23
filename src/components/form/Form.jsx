import React, { useState } from 'react';
import validation from '../../utils/validation';
const banner = "https://i.imgur.com/t2gZFoh.jpeg"; 

export default function Form(props){

    const [userData, setUserData] = useState({
        email: '',
        password:''
    });

    const [errors, setErrors] = useState({
        email: 'Ingrese su email',
        password:'Ingrese su password'
    });
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
        setErrors(validation({
            ...userData,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <div>
            <img 
                src={banner} 
                style={{width:'750px', height:'200px'}}
                alt="" 
            />
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                    key="email"
                    type="text" 
                    name="email"
                    value={userData.email}
                    placeholder="Ingresar email"
                    onChange={handleChange}
                />
                <p style={{color:"coral"}}>{errors.email ? errors.email :null}</p>
                <br />

                <label>Password:</label>
                <input 
                    key="password"
                    type="password" 
                    name="password"
                    value={userData.password}
                    placeholder="Ingresar password"
                    onChange={handleChange}
                />
                <p style={{color:"coral"}}>{errors.password ? errors.password :null}</p>
                <hr />

                <button 
                    type='submit'
                    disabled={errors.email || errors.password}
                >Enviar</button>


            </form>
        </div>
  )
}
