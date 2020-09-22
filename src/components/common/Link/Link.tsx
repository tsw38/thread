import React from 'react';
import NextLink from 'next/link';

export interface LinkProps {
    href: string
    children?: React.ReactNode | string
}
const Link: React.FC<LinkProps> = ({children, href}) => {
    return (
        <NextLink href={href}>
            {children}
        </NextLink>
    )
}

export default Link;