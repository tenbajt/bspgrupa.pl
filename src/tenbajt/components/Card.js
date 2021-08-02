import React from "react"
import Styled from "styled-components"
import { color, shadow, breakpoint } from "../Utils"

const Container = Styled.div`
    padding: 1.25rem 1rem;
    box-shadow: ${shadow.base};
    border-radius: 0.75rem;
    background-color: ${color.white()};

    ${breakpoint.sm} {
        padding: 1.5rem;
    }
`

const Card = ({ className, children }) => {
    return (
        <Container className={className}>
            {children}
        </Container>
    )
}

export default Card