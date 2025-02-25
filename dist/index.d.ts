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
export declare const EmailEditor: import('react').ForwardRefExoticComponent<AppProps & import('react').RefAttributes<ChildRef>>;
export { theme };
//# sourceMappingURL=index.d.ts.map