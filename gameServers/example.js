module.exports.Game = class {


    initalize(io){
        //create a socket listener
        const canvas = io.of('/canvas');
            

        canvas.on('connection', function(socket){
            socket.on('mouse', (data) => {
                socket.broadcast.emit('mouseNormalizedFromServer', data);
            });
        });

    }

    doGameLoop(){

    }



};