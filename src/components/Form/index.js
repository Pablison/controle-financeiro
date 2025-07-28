import React, { useState } from "react";
import * as C from "./styles";
import Grid from "../Grid";

const Form = ({handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, SetAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateId = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor deve ser maior que 0!");
            return;
        }

        const transaction = {
            id: generateId(),
            desc: desc,
            amount: Number(amount),
            expense: isExpense,
        };

        handleAdd(transaction);
        
        setDesc("");
        SetAmount("");
    };

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" placeholder="Ex: Salário" />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input value={amount} onChange={(e) => SetAmount(e.target.value)} type="number" placeholder="Ex: 1000" />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setExpense(!isExpense)} />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                    <C.Input type="radio" id="rExpenses" name="group1" onChange={() => setExpense(!isExpense)} />
                    <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>
                <C.Button onClick={handleSave}>ADICIONAR</C.Button>
            </C.Container>
            <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
    );
}

export default Form;
