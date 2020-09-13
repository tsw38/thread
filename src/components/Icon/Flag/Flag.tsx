
import React from 'react';
import classNames from 'classnames';

import styles from './Flag.module.scss';
import flags from './flags';


export interface FlagProps {
	/**
	 * The name of the flag
	 */
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
			styles.Flag,
			styles[`Flag--${name}`],
			className
		)}>
		{flags[name].map((path, index) => typeof path === 'function' ? path({
			className: styles[`path-${index}`],
			key: `Flag-${name}-${index}`
		}) : (
			<path d={path} key={`Flag-${name}-${index}`} className={styles[`path-${index}`]} />
		))}
		</svg>
	);
};

export default Flag;