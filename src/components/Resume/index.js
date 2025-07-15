import React from "react"
import * as C from "./styles"
import ResumeItem from "../ResumeItem"
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from "react-icons/fa"

const Resume = () => {
    return (
        <C.Container>
            <ResumeItem />
            <ResumeItem />
            <ResumeItem />
        </C.Container>)
}

export default Resume