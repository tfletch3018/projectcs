import React from "react";
import { ReactVideo } from "reactjs-media";
import pviffcover from "../../images/pviffcover.png";

class VideoPlayer2 extends React.Component {
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
            src="https://tfletch3018projectcs.s3.us-east-2.amazonaws.com/chaz+shepherd+-+how+does+it+feel+-+pviff+awards+2021+performance.MP4"
            alt="pviff awards 2021 performance_how does it feel"
            poster={pviffcover}
            primaryColor="var(--sky)"
        />
    }
}

export default VideoPlayer2;