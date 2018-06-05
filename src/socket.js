import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => console.log('Socket connected'));
socket.on('disconnect', () => console.log('Socket disconnected'));

export default socket;
