
import React, {useEffect} from 'react';
import {createPortal} from 'react-dom';

import styles from './LoadingPortal.module.scss';
import {Logo} from '../Icon';

export interface ModalProps {
    dark?: boolean,
    children: React.ReactNode
}

export interface LoadingPortalProps {
    dark?: boolean
}

const Portal: React.FC<ModalProps> = ({children, dark}) => {
    if(!global.document) {
        return null;
    }

    const mount = document.body;
    const el = document.createElement('div')

    el.classList.add(...[styles.LoadingPortal, dark && styles['LoadingPortal--dark']].filter(Boolean));

    useEffect(() => {
        mount.appendChild(el)
        return () => mount.removeChild(el)
    }, [el, mount]);

    return createPortal(children, el)
}

const LoadingPortal: React.FC<LoadingPortalProps> = ({dark}) => {
    return (
        <Portal dark={dark}>
            <Logo loading mono color={dark ? 'bizarre' : 'tickle_me_pink'} className={styles.Logo} />
        </Portal>
    )
}


export default LoadingPortal;
