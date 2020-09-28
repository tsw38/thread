
import React, { useState } from 'react';
import classNames from 'classnames';
import { useFormContext, Controller } from "react-hook-form";
import { MultiSelect as MultiSelectInput } from 'carbon-components-react'

import textStyles from '../TextInput/TextInput.module.scss'
import styles from './Multiselect.module.scss';

export interface MultiselectProps {
    id: string,
    name: string,
    items: Array<any>
    labelText: string,
    placeholder: string,
    itemToString?: (item) => string
}

const getText = ({ text }) => text

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
                render={({ onChange, onBlur, value, name }) => (
                    <MultiSelectInput
                        {...props}
                        useTitleInItem={false}
                        onChange={handleOnChange(onChange)}
                        className={classNames(
                            textStyles.TextInput,
                            styles.Multiselect
                        )}
                        label={placeholder}
                        titleText={
                            <span className={textStyles.FormLabel}>
                                {props.labelText}
                            </span>
                        }
                    // name={props.name || props.id}
                    // always pass labels within the items
                    // itemToString={props.itemToString || getText}
                    />
                )} />
        </div>
    )
}

export default Multiselect;


// useTitleInItem = { false}
// label = "MultiSelect Label"
// invalid = { false}
// invalidText = "Invalid Selection"
// onChange = { onChange }
// items = {
//     [
//     { id: 'item-1', text: 'Item 1' },
//     { id: 'item-2', text: 'Item 2' },
//   ]}
// itemToString = { itemToString }
// initialSelectedItems = {
//     [
//     { id: 'item-1', text: 'Item 1' },
//     { id: 'item-2', text: 'Item 2' },
//   ]}