import type { Meta, StoryObj } from '@storybook/react';
import Logo from '../logo';

const meta = {
    title: 'Logo',
    component: Logo
} satisfies Meta<typeof Logo>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        className: '',
        title: 'Vishroy Seenarain',
        href: "#"
    },
};