import React, { useEffect } from 'react'

function Welcome() {
    return (
        <div className="welcome-page">
            <div className="welcome-container">
                <h1 className="welcome-title">Welcome to Our Application!</h1>
                <p className="welcome-description">
                    We're glad to have you here. Explore the features of our application, and enjoy your stay!
                </p>
                <button className="btn btn-primary btn-default btn-squared px-30 mt-4 text-center">Explore Now</button>
            </div>
        </div>

    )
}

export default Welcome