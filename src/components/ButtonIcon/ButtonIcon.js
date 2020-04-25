import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
    display: block;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50% 50%;
    border: none;

    ${({ xsmall, theme }) =>
        xsmall &&
        css`
            width: ${theme.iconSize.xs};
            height: ${theme.iconSize.xs};
        `}
`;

export default ButtonIcon;
