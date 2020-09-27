
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import FormComponent from './Form';
import Input from './Input/Input';


// uncommment this line to include styles only for the story
// import styles from "./Form.stories.module.scss"

export default {
    title: 'Form/Form',
    component: FormComponent
} as Meta;

export const Default = (args) => {
    return (
        <FormComponent {...args}>
            <Input type="text" id="firstName" labelText="firstName" />
        </FormComponent>
    )
}
