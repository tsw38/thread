import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const CustomLink = ({children, href, ...otherProps}) => {
    const isPage = () => {
        // if we're in a next.js route, then Router.router will be set
        return Boolean(Router.route || Router.pathname || Router.basePath)
    }

    return isPage() ? <Link href={href} {...otherProps}>{children}</Link> : children
}

export default CustomLink;