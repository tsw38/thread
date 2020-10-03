import React, { ReactNode } from 'react'

export interface FormDetailsProps {
    logWatch?: boolean,
    watch: () => {}
}

const FormDetails: React.FC<FormDetailsProps> = ({ watch, logWatch}) => {

    if (logWatch) {
        console.log(watch());
    }

    return (
        process.env.NODE_ENV !== 'production' && (
            <details open>
                <summary>Details</summary>
                <pre>{JSON.stringify(watch(), null, 4)}</pre>
            </details>
        )
    )
}
export default FormDetails
