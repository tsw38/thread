import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import className from 'classnames';

export default {
  title: 'Variables'
} as Meta;

import './colors.scss';

export const Colors = () => {
    const colors = ['bianca', 'bizarre', 'manz','atomic_tangerine','tickle_me_pink', 'corduroy','tapestry','nugget','flamingo','maroon_flush','tuna'];

    return (
        <ul className="ColorWrapper">
            {colors.map((name, index) => (
                <li key={`color-${name}`} className={className(
                    'Color',
                    `Color-${name}`
                )}>
                    <div className="background" />
                    <span>$color_{name}</span>
                </li>
            ))}
        </ul>
    )
};


// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
