import React from "react";
import { ReactVideo } from "reactjs-media";
// import demo from "../../images/demo.mp4";
import demo_8_11_21 from "../../images/demo_8_11_21.mp4";
import home from "../../images/home.jpg";

class VideoPlayer extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1,
            },
        };

        return <ReactVideo
            opts={opts}
            src={demo_8_11_21} alt="demo video"
            poster={home}
            primaryColor="var(--sky)"
        // other props
        />
    }
}


// const VideoPlayer = () => {
//     return (
//         <div>
//             <ReactVideo
//                 src={videotest} alt="checkered shirt pic"
//                 poster={home}
//                 primaryColor="red"
//                 // other props
//             />
//         </div>
//     );
// };

export default VideoPlayer;