import React from "React";
import Styled from "styled-components";
import { breakpoint } from "../Utils";

const Container = Styled.div`
    margin: 0 auto;
    padding: 6rem 1rem;
    position: relative;
    max-width: 1200px;

    ${breakpoint.lg} {
        padding: 6rem 1.5rem;
    }
    
    ${breakpoint.xl} {
        padding: 8rem 2rem;
    }
`;

const Section = React.forwardRef((props, ref) => (
    <Container ref={ref} className={props.className}>
        {props.children}
    </Container>
));

export default Section;