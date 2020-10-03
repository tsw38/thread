
import React, { useState } from 'react';
import classNames from 'classnames';
import { useFormContext, Controller } from "react-hook-form";
import { MultiSelect as MultiSelectInput } from 'carbon-components-react'

import textStyles from '../TextInput/TextInput.module.scss'
import styles from './Multiselect.module.scss';

export interface MultiselectProps {
    id: string
    name?: string
    labelText: string
    defaultValue?: any
    placeholder: string
    items: Array<{label: string, id: string}>
}

const Multiselect: React.FC<MultiselectProps> = (props) => {
    const [placeholder, setPlaceholder] = useState(props.placeholder);
    const { register } = useFormContext();

    const handleOnChange = onChange => ({ selectedItems }) => {
        onChange(selectedItems);

        setPlaceholder(selectedItems.length ? selectedItems.map(({ label }) => label).join(', ') : props.placeholder)
    }

    return (
        <div className={styles.MultiSelectWrapper}>
            <Controller
                controller={register}
                name={props.name || props.id}
                defaultValue={props.defaultValue || ''}
                render={({onChange, onBlur, value, name}) => (
                    <MultiSelectInput
                        {...props}
                        useTitleInItem={false}
                        onChange={handleOnChange(onChange)}
                        className={classNames(
                            textStyles.TextInput,
                            styles.Multiselect
                        )}
                        label={placeholder}
                        titleText={props.labelText}
                    />
                )}
            />
        </div>
    )
}

export default Multiselect;