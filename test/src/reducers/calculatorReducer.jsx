export const calculatorReducer = (state, action) => {
    switch (action.type) {
      case "SET_NUM1":
        return { 
            ...state,
             num1: action.payload };
      case "SET_NUM2":
        return { 
            ...state, 
            num2: action.payload };
      case "ADD":
        return {
          ...state,
          result: Number(state.num1) + Number(state.num2),
          operationCount: state.operationCount + 1,
          error: "",
        };
      case "MULTIPLY":
        return {
          ...state,
          result: Number(state.num1) * Number(state.num2),
          operationCount: state.operationCount + 1,
          error: "",
        };
      case "RESET":
        return { ...state, 
            num1: "", 
            num2: "", 
            result: null, 
            error: "" };
      case "SET_ERROR":
        return { 
            ...state, 
            error: action.payload };
      case "RESET_COUNT":
        return { 
            ...state, 
            operationCount: 0 };
      default:
        throw new Error("Action non reconnue !");
    }
  };