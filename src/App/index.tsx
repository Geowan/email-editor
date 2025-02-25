import {forwardRef, useEffect, useImperativeHandle, useMemo} from 'react';

import {Stack, useTheme} from '@mui/material';

import {
    resetDocument,
    useDocument,
    useInspectorDrawerOpen,
    useSamplesDrawerOpen
} from '../documents/editor/EditorContext';

import InspectorDrawer, {INSPECTOR_DRAWER_WIDTH} from './InspectorDrawer';
import SamplesDrawer, {SAMPLES_DRAWER_WIDTH} from './SamplesDrawer';
import TemplatePanel from './TemplatePanel';
import EMPTY_EMAIL_MESSAGE from "../getConfiguration/sample/empty-email-message";
import { renderToStaticMarkup } from '../components/email-builder';

function useDrawerTransition(cssProperty: 'margin-left' | 'margin-right', open: boolean) {
    const {transitions} = useTheme();
    return transitions.create(cssProperty, {
        easing: !open ? transitions.easing.sharp : transitions.easing.easeOut,
        duration: !open ? transitions.duration.leavingScreen : transitions.duration.enteringScreen,
    });
}

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


const App = forwardRef<ChildRef, AppProps>(({templateData}, ref) => {
    const inspectorDrawerOpen = useInspectorDrawerOpen();
    const samplesDrawerOpen = useSamplesDrawerOpen();


    const marginLeftTransition = useDrawerTransition('margin-left', samplesDrawerOpen);
    const marginRightTransition = useDrawerTransition('margin-right', inspectorDrawerOpen);
    const document = useDocument();

    const templateJson =  useMemo(() => JSON.stringify(document, null, '  '), [document]);
    const htmlCode = useMemo(() => renderToStaticMarkup(document, { rootBlockId: 'root' }), [document]);

    useImperativeHandle(ref, () => ({
        getActiveTemplate
    }));

    const getActiveTemplate = () => {

        return {
            template: templateJson,
            html:htmlCode
        }
    }


    useEffect(() => {
        if (templateData) {
            resetDocument({
                ...templateData
            })
        } else {
            resetDocument({
                ...EMPTY_EMAIL_MESSAGE
            })
        }

        //resetDocument(getConfiguration("#sample/reservation-reminder"));

    }, [])
    return (
        <>
            <InspectorDrawer/>
            <SamplesDrawer/>

            <Stack
                sx={{
                    marginRight: inspectorDrawerOpen ? `${INSPECTOR_DRAWER_WIDTH}px` : 0,
                    marginLeft: samplesDrawerOpen ? `${SAMPLES_DRAWER_WIDTH}px` : 0,
                    transition: [marginLeftTransition, marginRightTransition].join(', '),
                }}
            >
                <TemplatePanel/>
            </Stack>
        </>
    );
})

export default App
/*
export default function App({templateData = ONE_TIME_PASSCODE}: AppProps) {
    const inspectorDrawerOpen = useInspectorDrawerOpen();
    const samplesDrawerOpen = useSamplesDrawerOpen();


    const marginLeftTransition = useDrawerTransition('margin-left', samplesDrawerOpen);
    const marginRightTransition = useDrawerTransition('margin-right', inspectorDrawerOpen);
    useEffect(() => {
        if (templateData) {
            resetDocument({
                ...templateData
            })
        } else {
            resetDocument({
                ...EMPTY_EMAIL_MESSAGE
            })
        }

        //resetDocument(getConfiguration("#sample/reservation-reminder"));

    }, [])
    return (
        <>

            <button onClick={() => {
                console.log("clicked ", editorStateStore.getState().document)
            }} style={{backgroundColor: "red", margin: 10}}>document val
            </button>

            <InspectorDrawer/>
            <SamplesDrawer/>

            <Stack
                sx={{
                    marginRight: inspectorDrawerOpen ? `${INSPECTOR_DRAWER_WIDTH}px` : 0,
                    marginLeft: samplesDrawerOpen ? `${SAMPLES_DRAWER_WIDTH}px` : 0,
                    transition: [marginLeftTransition, marginRightTransition].join(', '),
                }}
            >
                <TemplatePanel/>
            </Stack>
        </>
    );
}*/
