// src/CyclicCounter.jsx
import React, { useState, useEffect } from "react";

function CyclicCounter({ increment, maxValue }) {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Fonction pour démarrer le compteur
    const startCounter = () => {
        setIsRunning(true);
    };

    // Fonction pour arrêter le compteur
    const stopCounter = () => {
        setIsRunning(false);
    };

    // Effet pour gérer l'incrémentation cyclique
    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setCount((prev) => (prev + increment) % (maxValue + 1)); // Incrémente et revient à zéro après maxValue
            }, 1000); 
        }

        // Nettoyage de l'intervalle
        return () => clearInterval(interval);
    }, [isRunning, increment, maxValue]);

    // Réinitialisation du compteur
    const resetCounter = () => {
        setCount(0);
        setIsRunning(false);
    };

    return (
        <div style={{ margin: "20px" }}>
            <h2>Cyclic Counter (max: {maxValue})</h2>
            <p>Value: {count}</p>

            <button onClick={startCounter} disabled={isRunning}>
                Start
            </button>

            <button onClick={stopCounter} disabled={!isRunning}>
                Stop
            </button>
            
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
}

export default CyclicCounter;