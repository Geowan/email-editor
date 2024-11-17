import { default as React } from 'react';
import { default as theme } from './src/theme';
type AppProps = {
    templateData: any;
};
interface ChildRef {
    getActiveTemplate: () => {
        template: any;
        html: any;
    };
}
export declare const EmailEditor: React.ForwardRefExoticComponent<AppProps & React.RefAttributes<ChildRef>>;
export { theme };
//# sourceMappingURL=index.d.ts.map