import {forwardRef} from 'react';
import {CssBaseline, ThemeProvider} from '@mui/material';

import App from './src/App';
import theme from './src/theme';

type AppProps = {
    templateData: any,
}

// Define ref methods interface
interface ChildRef {
    getActiveTemplate: () => {
        template: any,
        html: any
    };
}


export const EmailEditor = forwardRef<ChildRef, AppProps>((props, ref) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App ref={ref} templateData={props.templateData}/>
        </ThemeProvider>
    );
});


// Export the theme if you want users to be able to customize it
export {theme};
