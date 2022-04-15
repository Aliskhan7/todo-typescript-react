import React from 'react';
import { useNavigate } from 'react-router-dom';


export const AboutPage: React.FC = () =>{
    const navigate = useNavigate();
    return(
        <>
        <h1>Страница информации</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora nam iure quae asperiores, ipsa quas! Consequatur, molestias blanditiis harum nostrum magnam obcaecati repellat, ex totam maxime rerum quibusdam. Possimus?</p>
        <button className='btn' onClick={() => navigate('/') }>Back homepage</button>
        </>
    )
}