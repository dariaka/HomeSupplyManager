import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
    padding: 10px 50px;
    border: none;
    border-radius: 50px;
    color: ${({ theme }) => theme.dark};
    background-color: ${({ color, theme }) => theme[color]};
    font-weight: ${({ theme }) => theme.bold};
    text-transform: uppercase;

    ${({ secondary }) =>
        secondary &&
        css`
            background-color: ${({ theme }) => theme.grey};
        `}
`;

Button.propTypes = {
    color: PropTypes.oneOf(['yellow', 'blue', 'red', 'grey', 'dark']),
};

Button.defaultProps = {
    color: 'grey',
};

export default Button;
