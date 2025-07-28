import React from "react";
import * as C from "./styles";

const ResumeItem = ({title, Icon, value}) => {

    return (
        <C.ResumeContainer>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
                <Icon />
            </C.Header>
            <C.Total>{value}</C.Total>
        </C.ResumeContainer>
    );
}   

export default ResumeItem;