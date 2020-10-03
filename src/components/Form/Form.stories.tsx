
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FormComponent from './Form';
import Input from './TextInput/TextInput';
import FormGroup from './FormGroup';
import Textarea from './Textarea/Textarea';
import Multiselect from './Multiselect/Multiselect';
import FileUploader from './FileUploader/FileUploader';


// uncommment this line to include styles only for the story
// import styles from "./Form.stories.module.scss"

export default {
    title: 'Form/Form',
    component: FormComponent,
    subcomponents: {
        Input, Multiselect, Textarea
    }
} as Meta;

export const Default = (args) => {
    return (
        <FormComponent {...args}>
            <FileUploader id="primaryImage" fileTypes={['.jpeg', '.jpg', '.png']} labelText="Primary Image" buttonText="Add Primary Image" helperText="only .jp(e)g or .png files at 50mb or less" />
            <Multiselect name="languages" labelText="Languages" id="languages" placeholder="Select languages" items={[{
                id: 'usa',
                label: 'English (US)'
            }, {
                id: 'spain',
                label: 'Spanish'
            }]} />
            <FormGroup>
                <Input type="text" id="firstName" name="firstName" labelText="First Name" />
                <Input type="text" id="lastName" name="lastName" labelText="Last Name" />
            </FormGroup>

            <Input type="number" labelText="Age" id="age" />

            <Input type="tel" id="telephone" name="telephone" labelText="Phone Number" />
            <Input type="email" id="email" name="email" labelText="Email" />
            <Input type="password" id="password" name="password" labelText="Password" />

            <Textarea id="notes" labelText="Additional Notes" />
            <Textarea id="description" labelText="Pattern Description" />
        </FormComponent>
    )
}
