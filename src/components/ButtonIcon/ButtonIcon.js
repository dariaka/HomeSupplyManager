import styled from 'styled-components';

const ButtonIcon = styled.button`
    display: block;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    background-color: transparent;
    background-image: url(${({ icon }) => icon});
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border: none;
`;

export default ButtonIcon;
