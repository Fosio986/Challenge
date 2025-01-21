// src/BinaryCounter.jsx
import React, { useState, useEffect } from "react";

function BinaryCounter({ increment, bitLength }) {
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

    // Effet pour gérer l'incrémentation binaire
    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setCount((prev) => (prev + increment) % (2 ** bitLength)); // Incrémente et revient à zéro après avoir atteint la valeur max en binaire
            }, 1000); 
        }

        // Nettoyage de l'intervalle
        return () => clearInterval(interval);
    }, [isRunning, increment, bitLength]);

    // Réinitialisation du compteur
    const resetCounter = () => {
        setCount(0);
        setIsRunning(false);
    };

    return (
        <div style={{ margin: "20px" }}>
            <h2>Binary Counter ({bitLength}-bit)</h2>
            <p>Value: {count.toString(2).padStart(bitLength, '0')}</p>

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

export default BinaryCounter;