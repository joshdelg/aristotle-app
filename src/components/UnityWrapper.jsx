import { Box, Heading } from "@chakra-ui/react";
import Unity, { UnityContext } from "react-unity-webgl";

function UnityWrapper() {

    let unityContext = new UnityContext({
        loaderUrl: "./unity/Build/aristotle2.loader.js",
        dataUrl: "./unity/Build/aristotle2.data",
        frameworkUrl: "./unity/Build/aristotle2.framework.js",
        codeUrl: "./unity/Build/aristotle2.wasm"
    });

    return (
        <Box p={4} h="100%" borderWidth="1px" borderRadius="lg" textAlign="center">
            <Unity unityContext={unityContext} />
            {/*<iframe width="800px" height="800px" title="hi" src="https://unity-game-proj.herokuapp.com/"></iframe>*/}
        </Box>
    )
};

export default UnityWrapper;