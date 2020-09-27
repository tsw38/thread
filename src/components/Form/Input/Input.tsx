import React, {useEffect, useState} from 'react'
import classNames from 'classnames'

import styles from './Input.module.scss'
import formStyles from '../Form.module.scss'

export interface InputProps {
    name: string
    label: string
    error?: string
    className?: string
    required?: boolean
    placeholder?: string
    register?: () => void
    type?:
        | 'tel'
        | 'text'
        | 'email'
        | 'password'
        | 'number'
        | 'radio'
        | 'checkbox'
        | 'file'
        | 'hidden'
        | 'date'
}

const Input: React.FC<InputProps> = (props) => {
    const {
        error,
        label,
        register,
        required,
        className,
        placeholder,
        type = 'text',
        ...rest
    } = props
    const [fileName, setFileName] = useState('');

    const isFile = type === 'file'
    const id = styles[`Input--${rest.name}`]
    const name = isFile ? `${rest.name}[]` : rest.name

    if (!register) {
        console.warn(
            'This input is not being controlled by react hook form, is this intentional?'
        )
    }

    const handleChangeFileName = function (e) {
        let uploadingFileName = ''

        if (this?.files?.length > 1) {
            uploadingFileName = (
                this.getAttribute('data-multiple-caption') || ''
            ).replace('{count}', this.files.length)
        } else {
            uploadingFileName = e.target.value.split('\\').pop()
        }

        setFileName(uploadingFileName || '')
    }

    // TODO: this stinks try to use ref with react hook
    const bindChange = () => {
        const input = document.getElementById(id)

        input.addEventListener('change', handleChangeFileName);
    }

    const unbindChange = () => {
        const input = document.getElementById(id)

        input.removeEventListener('change', handleChangeFileName)
    }

    useEffect(() => {
        if(isFile) {
            bindChange();
        }

        return () => {
            if (isFile) {
                unbindChange();
            }
        }
    })

    return (
        <div
            data-testid="Input"
            className={classNames(
                styles.Input,
                styles[`Input--${type}`],
                {
                    [styles.InputError]: !!error,
                },
                className
            )}
        >
            <label htmlFor={id} className={styles.label}>
                <p className={styles.labelText}>
                    {label}
                    {!required && (
                        <span className={styles.optional}>- Optional</span>
                    )}
                </p>
                <input
                    id={id}
                    type={type}
                    name={name}
                    ref={register}
                    placeholder={placeholder}
                    className={classNames(
                        styles.InputField,
                        styles[`InputField--${type}`]
                    )}
                />
                {isFile && (
                    <div className={styles.chooseFile}>
                        <p className={styles.chooseFileText}>
                            Choose a file&hellip;
                        </p>
                        <span className={styles.fileTextArea}>{fileName}</span>
                    </div>
                )}
            </label>

            {error && (
                <p className={classNames(formStyles.error, styles.error)}>
                    {error}
                </p>
            )}
        </div>
    )
}

export default Input
