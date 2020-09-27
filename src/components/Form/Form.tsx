
import React from 'react';
import classNames from 'classnames';

import styles from './Form.module.scss';

export interface FormProps {
}

const Form: React.FC<FormProps> = ({
    ...props
}) => <div data-testid={Form} className={styles.Form}></div>;

export default Form;
