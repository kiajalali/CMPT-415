import { css, Global } from '@emotion/react';
import React from 'react';
import AssetLoader from '../../@core/AssetLoader';
import Game from '../../@core/Game';
import Scene from '../../@core/Scene';
import SceneManager from '../../@core/SceneManager';
import useWindowSize from '../../@core/useWindowSize';
import OfficeScene from '../../scenes/OfficeScene';
import OtherScene from '../../scenes/OtherScene';
import RoomScene from '../../scenes/RoomScene';
import soundData from '../../soundData';
import spriteData from '../../spriteData';
import globalStyles from '../../styles/global';

const urls = [
    ...Object.values(spriteData).map(data => data.src),
    ...Object.values(soundData).map(data => data.src),
    // flatten
].reduce<string[]>((acc, val) => acc.concat(val), []);

export default function GameView() {
    const [width, height] = useWindowSize();

    return (
        <>
            <Global styles={globalStyles} />
            <div style={{ "display": "flex", "width": `${width - (width % 2)}px`, "height": `${height - (height % 2)}px`, "justifyContent": "center", "alignItems": "center" }}>
                <Game cameraZoom={80}>
                    <AssetLoader urls={urls} placeholder="Loading assets ...">
                        <SceneManager defaultScene="room">
                            <Scene id="office">
                                <OfficeScene />
                            </Scene>
                            <Scene id="other">
                                <OtherScene />
                            </Scene>
                            <Scene id="room">
                                <RoomScene />
                            </Scene>
                        </SceneManager>
                    </AssetLoader>
                </Game>
            </div>
        </>
    );
}
