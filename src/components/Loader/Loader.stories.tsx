/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Loader from './Loader';

export default {
    title: 'Storybook Knobs',
    decorators: [withKnobs],
};
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

storiesOf('Loader', module).add('default', () => <Loader />);
storiesOf('Loader', module).add('loading', () => <Loader />);
storiesOf('Loader', module).add('disabled', () => <Loader />);
