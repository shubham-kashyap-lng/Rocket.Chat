import React from 'react';
import type { ReactElement } from "react";
import { useThemeMode } from '@rocket.chat/ui-theming/src/hooks/useThemeMode';
import './style.css';

const HomePageVideo = (): ReactElement => {
    const videoSrc = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    const [, , theme] = useThemeMode();

    return (
        <section className={`home-video ${theme === 'dark' ? 'dark' : 'light'}`}>
            <div className='home-container'>
                <div className='home-row'>
                    <div className='col-md-12'>
                        <h2 className={theme === 'dark' ? 'text-dark' : 'text-light'}>Know more about us</h2>
                        <video
                            src={videoSrc}
                            loop
                            muted
                            autoPlay
                            controls
                            preload='auto'>
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePageVideo;