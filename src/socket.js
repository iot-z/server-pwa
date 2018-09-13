import io from 'socket.io-client';

const socket = io(`${window.location.protocol}//${window.location.hostname}:3000`);

export default socket;
