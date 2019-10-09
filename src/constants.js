import socketIOClient from 'socket.io-client';
export const socket = socketIOClient("http://localhost:4000");
export const baseURL = 'http://localhost:4000';
