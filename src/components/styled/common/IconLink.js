import styled from 'styled-components';

export const IconLink = styled.a`
    width: 32px;
    height: 32px;
    color: unset;
    text-decoration: none;
    outline: none;
    background-color: #fff;
    border-radius: 50%;
    padding:5px;

    &:hover {
        color: dodgerblue;
    }
    &:active {
        transform: translate(1px, 1px);
    }
`;
