import * as React from 'react';
import io from 'socket.io-client';
import Peer from 'peerjs';
import uuid from 'react-uuid';

const socket = io('http://localhost:5000');
const peer = new Peer();


const VideoCall = (props) => {
    const {match: {params}} = props;
    const ROOM_ID = params.roomId;
    const [currentSocketId , setCurrentSocketId] = React.useState('');
    const [videos, setVideos] = React.useState([]);
    const [userSockets, setUserSockets] = React.useState(null);
    React.useEffect(() => {
        socket.on('all-users', users => {
            console.log('all-users');
            console.log(users);
            setUserSockets(users);
        });

        peer.on('open', userId => {
            console.log('1st here is peer is open');
            socket.emit('join-room', ROOM_ID, userId);
            setCurrentSocketId(userId);
        });

        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        }).then(stream => {
            addVideoStream(stream , currentSocketId);
            peer.on('call', call => {
                call.answer(stream);
                call.on('stream', (otherVideoStream) => {
                    addVideoStream(otherVideoStream);
                })
            });
            socket.on('user-connected', userId => {
                console.log('user-connected');
                connectNewUser(userId, stream);
            });
        });

        const connectNewUser = (userId, stream) => {
            let call = peer.call(userId, stream);
            call.on('stream', function (userStream) {
                addVideoStream(userStream , userId);
            });
        };

        const addVideoStream = (stream , userId) => {
            socket.on('user-connected', userId => {
                console.log('user-connected');
                console.log(userId);
                // connectNewUser(userId, stream);
            });

            setVideos(oldArray => [...oldArray, {id: uuid(), stream: stream}]);
        }
    }, []);
    const handelVideo = (id, stream) => {
        console.log(userSockets);
        console.log(videos);
        videos.forEach((videoObj , i) => {
                const video = document.getElementById(id);
                video.srcObject = stream;
        });
    };
    return (
        <div>
            {
                videos.length > 0 ?
                    videos.map((vid) => {
                        return (
                            <video key={vid.id} id={vid.id} ref={() => handelVideo(vid.id, vid.stream)}
                                   playsInline={true} width={'400px'} height={'400px'} autoPlay/>
                        );

                    })
                    : "no stream"
            }
        </div>
    )
};

export default VideoCall;
