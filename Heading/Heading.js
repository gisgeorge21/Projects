import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div class="e-first relative">
            <div class="e-nav">
                <div class="e-padding"></div>
                <div class="e-nav-content">
                    <div class="logo-wrapper pointer">
                        <div class="logo"></div><span class="mrg-left-10px color-white font-medium">Giggle Content</span>
                    </div>
                    <div class="links"><span class="font-book mrg-right-30px color-white pointer">Home</span><span
                            class="font-book mrg-right-30px color-white pointer relative"><span>Services</span><span
                                class="e-drop-down-nav">
                                <div class="content"><a class="no-wrap">Giggle Content</a><a
                                        class="no-wrap margin-top-10px">Giggle Tips</a></div>
                            </span></span><span class="font-book mrg-right-30px color-white pointer">Contact</span><a
                            href="https://cms.giggle.tips/" target="_blank"
                            class="font-book mrg-right-30px color-white pointer">Login</a><span
                            class="font-book mrg-right-30px color-white pointer vdivider relative"><span>En</span><span
                                class="e-drop-down-nav">
                                <div class="content language"><a>English</a><a class="margin-top-10px">German</a></div>
                            </span></span></div>
                    <div class="sidebar-switcher"
                        style="background-image: url(&quot;https://giggle.tips/imgs/3-lines.svg&quot;);"></div>
                </div>
                <div class="e-padding"></div>
            </div>
            
            <div class="h-nav sticky hide">
                <div class="h-padding"></div>
                <div class="h-nav-content">
                    <div class="logo-wrapper pointer">
                        <div class="logo"></div><span class="mrg-left-10px font-medium">Giggle Content</span>
                    </div>
                    <div class="links"><span class="font-book mrg-right-30px pointer">Home</span><span
                            class="font-book mrg-right-30px pointer relative"><span>Services</span><span
                                class="h-drop-down-nav">
                                <div class="content"><a class="no-wrap">Giggle Content</a><a
                                        class="no-wrap margin-top-10px">Giggle Tips</a></div>
                            </span></span><span class="font-book mrg-right-30px pointer">Contact</span><a
                            href="https://cms.giggle.tips/" target="_blank"
                            class="font-book mrg-right-30px pointer">Login</a><span
                            class="font-book mrg-right-30px pointer vdivider relative"><span>En</span><span
                                class="h-drop-down-nav">
                                <div class="content language"><a>English</a><a class="margin-top-10px">German</a></div>
                            </span></span></div>
                </div>
                <div class="h-padding"></div>
            </div>
            <div class="g-side-bar ">
                <div class="g-sider-bar-x"></div>
                <div class="g-side-bar-content"><span class="g-side-bar-content-item font-book pointer"><a
                            href="/">Home</a></span><span
                        class="g-side-bar-content-item font-book pointer items"><a>Services</a>
                        <div class="items" style="max-height: 0px;"><span class="no-wrap margin-top-10px font-book">Giggle
                                Content</span><span class="no-wrap margin-top-10px font-book">Giggle Tips</span></div>
                    </span><span class="g-side-bar-content-item font-book pointer"><a>Contact</a></span><span
                        class="g-side-bar-content-item font-book"><a target="_blank"
                            href="https://cms.giggle.tips/">Login</a></span><span
                        class="g-side-bar-content-item font-book">Search</span></div>
            </div>
            <div class="e-first-content">
                <div class="e-padding"></div>
                <div class="row">
                    <h1 class="em-4 color-white font-book no-wrap margin-0">We Create Emotions</h1>
                    <div class="play-video-wrapper">
                        <div></div><span>Play Video</span>
                    </div>
                </div>
                <div class="e-padding"></div>
            </div>
            <div class="arrow-down-wrapper">
                <div class="e-padding"></div>
                <div class="img"></div>
                <div class="e-padding"></div>
            </div>
        </div>
             );
            }
}