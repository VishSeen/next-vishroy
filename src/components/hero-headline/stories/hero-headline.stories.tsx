
import { Meta, StoryObj } from "@storybook/react";
import HeroHeadline from "../hero-headline";


const meta = {
    title: 'Hero Headline',
    component: HeroHeadline,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof HeroHeadline>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Main: Story = {
    args: {
        className: '',
        title: 'Vishroy Seenarain',
        subTitle: 'Software engineer'
    }
}

