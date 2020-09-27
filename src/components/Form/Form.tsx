
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useForm, FormProvider } from 'react-hook-form'

import FormDetails from './FormDetails';

import styles from './Form.module.scss';

export interface FormProps {
    id: string
    className?: string
    children: ReactNode
    onSubmit: (formValues) => void
}

const Form: React.FC<FormProps> = ({
    id,
    onSubmit,
    children,
    className,
    ...props
}) => {
    const methods = useForm()

    const handleOnSubmit = (values) => {
        if (!onSubmit) {
            console.warn('there is no submit function');
        }

        onSubmit(values);
    }

    return (
        <FormProvider {...methods}>
            <FormDetails watch={methods.watch} />
            <form
                data-testid={`Form-${id}`}
                className={classNames(styles.Form, className)}
                onSubmit={methods.handleSubmit(handleOnSubmit)}
            >
                {children}
            </form>
        </FormProvider>
    )
}

export default Form;
