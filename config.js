module.exports = {
    app: {
        token: 'OTc5MTUxMTE5MjE1MzgyNTc4.GRyErr.eH_Ya1T7XNTR8gi6q7YUztQInBBl7vOzJ4HoAE',
        playing: 'by Nils#2045 ❤️',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: true,
            roleName: 'Furry DJ',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
