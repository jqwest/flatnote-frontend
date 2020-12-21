import React, { useState, useEffect } from 'react'
import '../index.css';



const Footer = () => {
    const [date, setDate] = useState();
    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])
    return (
        <>
            <div id='footer'
            style={{ float: 'left' }}>&copy; John Leavell -   {date}
            </div> 
        </>
    )
}

export default Footer
