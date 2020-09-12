
import React, {useEffect} from 'react';
import {createPortal} from 'react-dom';

import './LoadingPortal.scss';
import {Logo} from '../../Icon';

export interface ModalProps {
    dark?: boolean,
    children: React.ReactNode
}

export interface LoadingPortalProps {
    dark?: boolean
}

const Portal: React.FC<ModalProps> = ({children, dark}) => {
    const mount = document.body;
    const el = document.createElement('div')

    el.classList.add(...['LoadingPortal', dark && 'LoadingPortal--dark'].filter(Boolean));

    useEffect(() => {
        mount.appendChild(el)
        return () => mount.removeChild(el)
    }, [el, mount]);

    return createPortal(children, el)
}

const LoadingPortal: React.FC<LoadingPortalProps> = ({dark}) => {
    return (
        <Portal dark={dark}>
            <Logo loading mono color={dark ? 'bizarre' : 'tickle_me_pink'} />
        </Portal>
    )
}


export default LoadingPortal;
