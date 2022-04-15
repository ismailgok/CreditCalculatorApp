import "./App.css";
import Calculator from "./components/Calculator";
import Result from "./components/Result";
import { useState, useEffect } from "react";

function App() {
    const [state, setState] = useState({
        creditAmount: 1000,
        interestRate: 0.45,
        loanTerm: 12,
    });

    const [result, setResult] = useState(null);
    const onClickButton = (e) => {
        e.preventDefault();

        const totalCredit =
            ((state.creditAmount * state.interestRate) / 100) * state.loanTerm +
            state.creditAmount;

        const paymentAmount = totalCredit / state.loanTerm;

        setResult({
            creditAmount: state.creditAmount,
            totalMoney: totalCredit,
            interestRate: state.interestRate,
            paymentAmount: Math.floor(paymentAmount),
            loanTerm: state.loanTerm,
        });
    };
    const onChange = (e) => {
        setState((lastState) => ({
            ...lastState,
            [e.target.name]: parseFloat(e.target.value),
        }));
    };
    useEffect(() => {
        console.log(state);
    }, [state]);

    return (
        <div className="App">
            <Calculator
                onChange={onChange}
                onClickButton={onClickButton}
                state={state}
            />
            {result !== null ? <Result result={result} /> : null}
        </div>
    );
}

export default App;
