import socketio from 'socket.io-client';

const socket = socketio('Endereço IP com a porta do Local Host do Backend', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };
    
    socket.connect();

}

function disconnect() {
    if(socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};