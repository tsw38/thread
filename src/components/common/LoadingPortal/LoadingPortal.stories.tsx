
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import LoadingPortalComponent from './LoadingPortal';

export default {
    title: 'Common/LoadingPortal',
    component: LoadingPortalComponent
} as Meta;

export const Default = (args) => <LoadingPortalComponent {...args} />
