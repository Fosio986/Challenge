import React, { useReducer, useEffect } from "react";
import { calculatorReducer } from "../reducers/calculatorReducer";

function Calculator() {

    const initialState = {
        num1: "",
        num2: "",
        result: null,
        operationCount: 0,
        error: "",
    };

    // Utilisation du reducer
    const [state, dispatch] = useReducer(calculatorReducer, initialState);

    // Validation des entrées utilisateur
    const validateInputs = () => {
        if (isNaN(state.num1) || isNaN(state.num2) || state.num1 === "" || state.num2 === "") {
            dispatch({ type: "SET_ERROR", payload: "Veuillez entrer des nombres valides." });
            return false;
        }
        return true;
    };

    // useEffect pour gérer les alertes après 10 opérations
    useEffect(() => {
      if (state.operationCount === 10) {
          alert("Vous avez effectué 10 calculs !");
          dispatch({ type: "RESET_COUNT" });
      }
    }, [state.operationCount]);

    return (
      <div>
        <h1>Calculatrice avec Reducer</h1>
        <div>
          <label>
            Num1 :
            <input
              type="text"
              value={state.num1}
              onChange={(e) => dispatch({ type: "SET_NUM1", payload: e.target.value })}
              style={{marginRight: "10px", marginLeft: "5px" }}
            />
          </label>
          <label>
            Num2 :
            <input
              type="text"
              value={state.num2}
              onChange={(e) => dispatch({ type: "SET_NUM2", payload: e.target.value })}
              style={{marginLeft: "5px" }}
            />
          </label>
        </div>
        <div>
          <button
            style={{marginTop: "10px", marginRight:"5px" }}
            onClick={() => {
              if (validateInputs()) {
                dispatch({ type: "ADD" });
              }
            }}
          >
            +
          </button>
          <button
            style={{marginRight:"5px"}}
            onClick={() => {
              if (validateInputs()) {
                dispatch({ type: "MULTIPLY" });
              }
            }}
          >
            *
          </button>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        {state.result !== null && <p>Résultat : {state.result}</p>}
        <p>Opérations effectuées : {state.operationCount}</p>
      </div>
    );
}

export default Calculator;