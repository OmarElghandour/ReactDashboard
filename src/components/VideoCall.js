import * as React from 'react';
import io from 'socket.io-client';
import Peer from 'peerjs';
const socket = io('http://localhost:5000');
const peer = new Peer();

const VideoCall = (props) => {
    const {match: {params}} = props;
    const ROOM_ID = params.roomId;
    const [videos, setVideos] = React.useState([]);
    const streamerVideo = React.useRef();
    React.useEffect( () => {
        socket.on('user-disconnect', user => {
           const video = document.getElementById(user);
           if (video){
               video.remove();
           }
        });
       peer.on('open', userId => {
            socket.emit('join-room', ROOM_ID, userId);
        });
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
            const myVideo = streamerVideo.current;
            myVideo.srcObject = stream;
            myVideo.muted = "muted";
            peer.on('call', call => {
                call.answer(stream);
                call.on('stream', (otherVideoStream ) => {
                    addParticipants(call.peer , stream);
                });
            });
            socket.on('user-connected', user => {
                connectNewUser(user.userId, stream);
            });
        });

        const connectNewUser = (userId, stream) => {
            let call = peer.call(userId, stream);
            call.on('stream', function (userStream) {
                addParticipants(userId , userStream);
            });
        };
    }, []);
    const addParticipants = (userId , stream) => {
        let isExist = videos.find(x => x.id === userId);
        if (!isExist){
            setVideos(oldArray => [...oldArray, {id: userId, stream: stream}]);
        }
    };

    const handelVideo = (id, stream) => {
        videos.forEach(() => {
                const video = document.getElementById(id);
                video.srcObject = stream;
        });
    };
    return (
        <div>
            <div className={'streamer'} >
                <video autoPlay ref={streamerVideo} />
            </div>
            {
                videos.length > 0 ?
                    videos.map((vid) => {
                        return (
                            <video muted="muted" key={vid.id} id={vid.id} ref={() => handelVideo(vid.id, vid.stream)}
                                   playsInline={true} width={'400px'} height={'400px'} autoPlay/>
                        );
                    })
                    : "no stream"
            }
        </div>
    )
};

export default VideoCall;
