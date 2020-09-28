
import classNames from 'classnames';
import React, { ReactNode } from 'react'
import { useFormContext } from "react-hook-form";
import { TextArea } from 'carbon-components-react'

import {InputProps} from '../TextInput/TextInput';
import styles from '../TextInput/TextInput.module.scss';

export interface TextareaProps extends InputProps {
    cols?: number
    rows?: number
}

const Textarea: React.FC<TextareaProps> = (props) => {
    const { register } = useFormContext();
    return (
        <TextArea
            {...props}
            ref={register}
            data-testid="Textarea"
            name={props.name || props.id}
            labelText={
                <span className={styles.FormLabel}>
                    {props.labelText}
                </span>
            }
            className={classNames(styles.TextInput, props.className)}
        />
    )
}

export default Textarea;
