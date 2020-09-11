
import React from 'react';
import classNames from 'classnames';

import './Flag.scss';
import flags from './flags';

export interface FlagProps {
	name: string,
	className?: string
}

const Flag: React.FC<FlagProps> = ({
	name,
	className,
}) => {
	if (!flags?.[name]) {
		return null;
	}

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={classNames(
			'Flag',
			`Flag--${name}`,
			className
		)}>
		{flags[name].map((path, index) => typeof path === 'function' ? path({
			className: `path-${index}`,
			key: `Flag-${name}-${index}`
		}) : (
			<path d={path} key={`Flag-${name}-${index}`} className={`path-${index}`} />
		))}
		</svg>
	);
};

export default Flag;