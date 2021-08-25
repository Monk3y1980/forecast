import React from 'react'

const header = props => {
    return (
        <div style={{
            backgroundColor: 'black', 
            color: 'white', 
            textAlign: 'center', 
            height: '80px', 
            width: '100%',
            fontSize: '30px',
            lineHeight: '80px'
            }}>
            Weather App
        </div>
    )
}

export default header