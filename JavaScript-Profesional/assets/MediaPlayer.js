function MediaPlayer(config) {
    this.media = config.element;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}

MediaPlayer.prototype.playVideo = function() {
    this.media.play();
}

MediaPlayer.prototype.pauseVideo = function() {
    this.media.pause();
}

MediaPlayer.prototype.muteVideo = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmuteVideo = function() {
    this.media.muted = false;
}

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.media.play();
    } else {
        this.media.pause();
    }
}

MediaPlayer.prototype.toggleMute = function() {
    if (this.media.muted) {
        this.media.muted = false;
    }
    else {
        this.media.muted = true;
    }
}
export default MediaPlayer;