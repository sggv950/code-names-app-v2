import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    width: ${props => (props.lg ? '180px' : '120px')};
    height: ${props => (props.lg ? '60px' : '40px')};
    font-size: ${props => (props.lg ? '22px' : '16px')};
    font-weight: bold;
    border-radius: 7px;
    border: none;
    outline: none;
    background-color: ${props => props.bgc || 'dodgerblue'};
    color: ${props => props.btc || 'white'};
    margin: 10px;
    svg {
        width: 20px;
    }

    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: translate(2px, 2px) scale(1.05);
    }
`;
