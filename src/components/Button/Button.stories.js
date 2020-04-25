import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from 'components/Button/Button';

export default {
    title: 'Basic Button',
    component: Button,
    decorators: [withKnobs],
};

export const primary = () => {
    const label = 'Colors';
    const options = ['yellow', 'blue', 'red', 'grey', 'dark'];
    const defaultValue = 'yellow';
    const groupId = 'GROUP-ID1';
    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>Hello Button</Button>;
};

export const secondary = () => <Button secondary>Hello Button</Button>;
