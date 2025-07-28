import React from "react"
import * as C from "./styles"
import ResumeItem from "../ResumeItem"
import {
    FaArrowAltCircleUp,
    FaArrowAltCircleDown,
    FaDollarSign
} from "react-icons/fa"

const Resume = ({income, expense, total}) => {
    return (
        <C.Container>
            <ResumeItem title="Entradas" Icon={FaArrowAltCircleUp} value={income}/>
            <ResumeItem title="Saídas" Icon={FaArrowAltCircleDown} value={expense}/>
            <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
        </C.Container>
    )
}


export default Resume;