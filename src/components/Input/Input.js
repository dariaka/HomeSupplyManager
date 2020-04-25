import styled, { css } from 'styled-components';

const Input = styled.input`
    padding: 15px 30px;
    border: none;
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.regular};
    background-color: ${({ theme }) => theme.grey};

    ::placeholder {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.dark};
    }

    ${({ search }) =>
        search &&
        css`
            color: ${({ theme }) => theme.red};
        `}
`;

export default Input;
