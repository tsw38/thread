import React from 'react'
import classNames from 'classnames'

import styles from './Icon.module.scss'
import icons from './icons'

export interface IconProps {
	name: string
	className?: string
}

const Icon: React.FC<IconProps> = ({name, className, ...props}) => {
	if (!icons?.[name]?.path) {
		return null
	}

	return (
		<svg
			data-testid={`Icon-${name}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${icons[name].size || '84'} 85`}
			className={classNames('Icon', `Icon--${name}`, className)}
		>
			{icons[name].path.map((path, index) => (
				<path d={path} key={`Icon-${name}-${index}`} />
			))}
			{icons[name].extra?.()}
		</svg>
	)
}

export default Icon
