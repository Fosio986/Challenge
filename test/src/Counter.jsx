import React, { useState, useEffect } from "react";

function Counter({ increment }) {
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

    // Effet pour gérer l'incrémentation automatique
    useEffect(() => {
        let interval = null;

        if (isRunning && count < 20) {
            interval = setInterval(() => {
                setCount((prev) => prev + increment);
            }, 1000); // Incrémente toutes les secondes
        }

        // Nettoyage
        if (count >= 20) {
            stopCounter();
        }

        return () => clearInterval(interval);
    }, [isRunning, count, increment]);

    // Réinitialisation 
    const resetCounter = () => {
        setCount(0);
        setIsRunning(false);
    };

    return (
        <div style={{ margin: "20px" }}>
            <h2>Counter ({increment})</h2>
            <p>Value: {count}</p>
            <button onClick={startCounter} disabled={isRunning || count >= 20}>
                Start
            </button>
            <button onClick={stopCounter} disabled={!isRunning}>
                Stop
            </button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
}

export default Counter;