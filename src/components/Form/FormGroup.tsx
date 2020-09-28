import React, { ReactNode } from 'react'

import styles from './Form.module.scss';

export interface FormGroupProps {
    children: ReactNode
}

const FormGroup: React.FC<FormGroupProps> = ({ children }) => (
    <div className={styles.FormGroup}>{children}</div>
);

export default FormGroup
