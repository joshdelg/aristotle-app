import { Box, Heading } from "@chakra-ui/react";
import Unity, { UnityContext } from "react-unity-webgl";

function UnityWrapper() {

    let unityContext = new UnityContext({
        loaderUrl: "./unity/Build/AristotleBuild.loader.js",
        dataUrl: "./unity/Build/AristotleBuild.data.br",
        frameworkUrl: "./unity/Build/AristotleBuild.framework.js.br",
        codeUrl: "./unity/Build/AristotleBuild.wasm.br"
    });

    return (
        <Box p={4} h="100%" borderWidth="1px" borderRadius="lg" textAlign="center">
            {/*<Unity unityContext={unityContext} />*/}
            <iframe width="800px" height="800px" title="hi" src="https://unity-game-proj.herokuapp.com/"></iframe>
        </Box>
    )
};

export default UnityWrapper;