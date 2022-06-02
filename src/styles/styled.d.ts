import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        primary: string;
        secondary: string;
        background: string;
        gradient: string;
        text: string;
        border: string;
        backgroundColor: string;
        secondaryBackground: string;
        hoverBackground: string;
        activeBackground: string;
    }
}