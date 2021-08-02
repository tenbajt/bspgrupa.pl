import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    color: ${props => props.color};
    padding: 0 0.5rem;
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.25rem;
    border-radius: 9999px;
    background-color: ${props => props.background};
`;

const Badge = (props) => (
    <Container className={props.className} color={props.color} background={props.background}>
        {props.children}
    </Container>
);

export default Badge;