import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import GlobalStyle from '../src/styles/global-style';
import * as React from "react";


const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'dark',
                    value: '#000',
                },
                {
                    name: 'light',
                    value: '#fff',
                },
            ],
        },
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <GlobalStyle>
                <Story />
            </GlobalStyle>
        )
    ]
};

export default preview;
