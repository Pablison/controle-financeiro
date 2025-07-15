import React from "react";
import * as C from "./styles";

const ResumeItem = () => {
    return (
        <C.ResumeContainer>
            <C.Header>
                <C.HeaderTitle>Resumo</C.HeaderTitle>
            </C.Header>
            <C.Total>R$ 0,00</C.Total>
        </C.ResumeContainer>
    );
}   

export default ResumeItem;