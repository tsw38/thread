import classNames from 'classnames'
import React, {ReactNode} from 'react'
import { useFormContext } from "react-hook-form";
import {TextInput} from 'carbon-components-react'

import styles from './TextInput.module.scss'

export interface InputProps {
    // Specifies the serialized field value being stored
    name?: string
    // Specify an optional className to be applied to the <input> node
    className?: string
    // Optionally provide the default value of the <input>
    defaultValue?: string | number
    // Specify whether the <input> should be disabled
    disabled?: boolean
    // Provide text that is used alongside the control label for additional help
    helperText?: ReactNode
    // Specify whether you want the underlying label to be visually hidden
    hideLabel?: boolean
    // Specify a custom id for the <input>
    id: string
    // true to use the inline version.
    inline?: boolean
    // Specify whether the control is currently invalid
    invalid?: boolean
    // Provide the text that is displayed when the control is in an invalid state
    invalidText?: string
    // Provide the text that will be read by a screen reader when visiting this control
    labelText: ReactNode
    // Optionally provide an onChange handler that is called whenever <input> is updated
    onChange?: () => void
    // Optionally provide an onClick handler that is called whenever the <input> is clicked
    onClick?: () => void
    // Specify the placeholder attribute for the <input>
    placeholder?: string
    // Specify the type of the <input>
    type?:
        | 'tel'
        | 'text'
        | 'email'
        | 'password'
        | 'number'
        | 'hidden'
    // Specify the value of the <input>
    value?: string | number
    // Specify whether the control is currently in warning state
    warn?: boolean
    /**
     * Provide the text that is displayed when the control is in warning state
     */
    warnText?: string
}

const Input: React.FC<InputProps> = (props) => {
    const { register } = useFormContext();

    return (
        <TextInput
            {...props}
            name={props.name || props.id}
            data-testid="TextInput"
            ref={register}
            labelText={
                <span className={styles.FormLabel}>
                    {props.labelText}
                </span>
            }
            className={classNames(styles.TextInput, props.className)}
        />
    );
};

export default Input
