import React, { ReactNode } from 'react'

export interface FormDetailsProps {
    watch: () => {}
}

const FormDetails: React.FC<FormDetailsProps> = ({ watch }) => {
    console.log(watch());

    return (
        process.env.NODE_ENV !== 'production' && (
            <details>
                <summary>Details</summary>
                <pre>{JSON.stringify(watch(), null, 4)}</pre>
            </details>
        )
    )
}
export default FormDetails
