import { useState } from "react";
import "./result.css";

function Result({ result }) {
    const [row, setRow] = useState([]);
    const [completed, setCompleted] = useState(false);

    const paymentDetails = (e) => {
        e.preventDefault();
        for (let i = 1; i < result.loanTerm; i++) {
            setRow((row) => [...row,result]);
        }
        setCompleted(true);
    };

    return (
        <div>
            <h1>Result</h1>
            <div>
                <table border="1" className="table">
                    <thead>
                        <tr>
                            <td>Total Credit</td>
                            <td>Interest Rate</td>
                            <td>Monthly Payment</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{result.totalMoney}</td>
                            <td>{result.interestRate}</td>
                            <td>{result.paymentAmount}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div>
                    <button onClick={paymentDetails}>Payment details</button>
                </div>
                <table border="1" className="table">
                    {completed ? (
                        <thead>
                            <tr>
                                <th>Credit Amount</th>
                                <th>Interest Rate</th>
                                <th>Loan Term</th>
                                <th>Monthly Payment</th>
                                <th>Total Money</th>
                            </tr>
                        </thead>
                    ) : null}
                    <tbody>
                        {completed
                            ? row.map((item, index) => (
                                  <tr key={index}>
                                      <td>{item.creditAmount}</td>
                                      <td>{item.interestRate}</td>
                                      <td>{item.loanTerm}</td>
                                      <td>{item.paymentAmount}</td>
                                      <td>{item.totalMoney}</td>
                                  </tr>
                              ))
                            : null}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Result;
