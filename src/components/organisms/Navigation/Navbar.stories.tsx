import React from 'react';
import Navbar  from './Navbar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
    title: "NavigationBar",
    component: Navbar,
    argTypes: {
        // arg types
    },
};

export default meta;

type Story = StoryObj<typeof Navbar>;



// Every Name export in this file represents a story
export const NavigationBar = () => <Navbar/>;

