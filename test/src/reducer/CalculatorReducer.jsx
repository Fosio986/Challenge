export const initialState = {
    displayValue: "0",
    firstOperand: null,
    operator: null,
    waitingForSecondOperand: false,
    calculationDone : false,
  };
  
  export const calculatorReducer = (state, action) => {
    switch (action.type) {
        case "ADD_DIGIT":
            // Si un calcul vient d'être fait, remplace l'affichage
            if (state.calculationDone) {
              return {
                ...state,
                displayValue: action.payload, // Remplace le résultat par le chiffre tapé
                calculationDone: false,      // Réinitialise l'indicateur
              };
            }
          
            if (state.waitingForSecondOperand) {
              return {
                ...state,
                displayValue: action.payload,
                waitingForSecondOperand: false,
              };
            }
          
            return {
              ...state,
              displayValue:
                state.displayValue === "0" ? action.payload : state.displayValue + action.payload,
            };

      case "SET_OPERATOR":
        if (state.operator && state.waitingForSecondOperand) {
          return { ...state, operator: action.payload };
        }
        if (state.firstOperand == null) {
          return {
            ...state,
            operator: action.payload,
            firstOperand: parseFloat(state.displayValue),
            waitingForSecondOperand: true,
          };
        }
        return {
          ...state,
          operator: action.payload,
          firstOperand: eval(
            `${state.firstOperand} ${state.operator} ${parseFloat(state.displayValue)}`
          ),
          displayValue: String(
            eval(
              `${state.firstOperand} ${state.operator} ${parseFloat(state.displayValue)}`
            )
          ),
          waitingForSecondOperand: true,
        };
  
      case "CALCULATE":
        if (state.operator && state.firstOperand != null) {
            return {
            ...state,
            displayValue: String(
                eval(
                `${state.firstOperand} ${state.operator} ${parseFloat(state.displayValue)}`
                )
            ),
            firstOperand: null,
            operator: null,
            waitingForSecondOperand: false,
            calculationDone: true, // Marque le calcul comme terminé
            };
        }
        return state;
  
      case "RESET":
        return initialState;
  
      default:
        return state;
    }
  };