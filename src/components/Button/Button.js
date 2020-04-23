import styled, { css } from 'styled-components';

const Button = styled.button`
    padding: 10px 50px;
    border: none;
    border-radius: 50px;
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.yellow};
    font-weight: ${({ theme }) => theme.bold};
    text-transform: uppercase;

    ${({ secondary }) =>
        secondary &&
        css`
            background-color: ${({ theme }) => theme.grey};
        `}
`;

export default Button;
