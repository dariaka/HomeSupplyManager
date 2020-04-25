import React from 'react';
import Button from 'components/Button/Button';

export default {
    title: 'Basic Button',
    component: Button,
};

export const primary = () => <Button onClick={() => console.log('click')}>Hello Button</Button>;
export const secondary = () => (
    <Button secondary onClick={() => console.log('click')}>
        Hello Button
    </Button>
);
