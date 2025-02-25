type AppProps = {
    templateData: any;
};
interface ChildRef {
    getActiveTemplate: () => {
        template: any;
        html: any;
    };
}
declare const App: import('react').ForwardRefExoticComponent<AppProps & import('react').RefAttributes<ChildRef>>;
export default App;
//# sourceMappingURL=index.d.ts.map