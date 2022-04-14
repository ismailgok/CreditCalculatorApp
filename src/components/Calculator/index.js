
function Calculator({state, onChange,onClickButton}) {
    
    return (
        <div>
            <input
                type="number"
                name="creditAmount"
                step="1000"
                min="1000"
                max="1000000"
                placeholder="Kredi Tutarı"
                value={state.creditAmount}
                onChange={onChange}
            />
            <input
                type="number"
                name="interestRate"
                step="0.05"
                min="0.45"
                max="2.5"
                placeholder="Faiz Oranı"
                value={state.interestRate}
                onChange={onChange}
            />
            <select name="loanTerm" value={state.loanTerm} onChange={onChange}>
                <option value={12}>12 ay</option>
                <option value="24">24 ay</option>
                <option value="36">36 ay</option>
            </select>
            <button onClick={onClickButton}>Kredi Hesapla</button>
        </div>
    );
}

export default Calculator;
