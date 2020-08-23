import styled from 'styled-components';

export const Input = styled.input.attrs(() => ({
    type: 'text',
}))`
    padding: 10px;
    margin: 5px;
    color: ${props => props.tc || '#000'};
    background: ${props => props.bgc || '#fafafa'};
    border-radius: 7px;
    font-size: 16px;
    outline: none;
    border: 1px solid #000;
    width: ${props => props.w || '90%'};

    &:focus {
        border: 1px solid blue;
    }
`;
