import { default as React } from 'react';
type AppProps = {
    templateData: any;
};
interface ChildRef {
    getActiveTemplate: () => {
        template: any;
        html: any;
    };
}
declare const App: React.ForwardRefExoticComponent<AppProps & React.RefAttributes<ChildRef>>;
export default App;
//# sourceMappingURL=index.d.ts.map