import React from 'react'
import classNames from 'classnames'
import {useFormContext} from 'react-hook-form'
import Button from 'components/common/Button';

import styles from './FileUploader.module.scss'
import formStyles from 'components/Form/Form.module.scss';
import buttonStyles from 'components/common/Button/Button/Button.module.scss';

export interface FileUploaderProps {
    id: string
    name?: string
    labelText: string
    defaultValue?: any
    className?: string
    buttonText: string
    helperText?: string
    selectMultiple?: boolean
    fileTypes: Array<'.jpg' | '.jpeg' | '.png' | '.pdf'>
}

const FileUploader: React.FC<FileUploaderProps> = ({
    labelText,
    fileTypes,
    helperText,
    buttonText,
    defaultValue,
    selectMultiple,
    ...props
}) => {
    const {register, watch, setValue} = useFormContext()

    const deleteImage = (imageName) => () => {
        const images = watch(props.id)
        console.warn('figure out how to "delete" file')
    }

    return (
        <div className={styles.FileUploader}>
            <label htmlFor={props.id} className={styles.Label}>
                <span className={formStyles.FormLabel}>{labelText}</span>
                <input
                    type="file"
                    id={props.id}
                    ref={register}
                    multiple={selectMultiple}
                    name={props.name || props.id}
                    accept={fileTypes.join(', ')}
                    className={styles.FileInput}
                />
                <div className={styles.buttonWrapper}>
                    <span
                        className={classNames(
                            buttonStyles.Button,
                            buttonStyles['Button--tapestry'],
                            styles.Button
                        )}
                    >
                        Upload Image
                    </span>
                </div>
            </label>
            <ul className={styles.fileList}>
                {Array.from(watch(props.id) || []).map(({name}, index) => (
                    <li
                        className={styles.fileListItem}
                        key={`file-${index}`}
                        onClick={deleteImage(name)}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )

    // return (
    //     <Controller
    //         controller={register}
    //         name={props.name || props.id}
    //         defaultValue={defaultValue || ''}
    //         render={({onChange, onBlur, value, name}) => (
    //             <Component
    //                 {...props}
    //                 accept={fileTypes}
    //                 labelTitle={labelText}
    //                 buttonLabel={buttonText}
    //                 multiple={selectMultiple}
    //                 data-testid="FileUploader"
    //                 labelDescription={helperText}
    //                 onChange={handleOnChange(onChange)}
    //                 className={classNames(styles.FileUploader, props.className)}
    //             />
    //         )}
    //     />
    // )
}

export default FileUploader
