window.onload = function () {


}

var bt = document.querySelector('button');
bt.onclick = function () {
    video.play();
}
// 播放中
var video = document.querySelector('#video');
var head = document.querySelector('.cm_head');
var cover = document.querySelector('img');
var cm_video = document.querySelector('.cm_video');
// 播放中
head.playing = function () {
    this.style.display = 'none';
    bt.style.display = 'none';
    cover.style.display = 'none';
}
// 播放结束活或者暂停
head.paused = function () {
    this.style.display = 'block';
    bt.style.display = 'block';
    cover.style.display = 'block';
}
// 播放中
video.ontimeupdate = function () {
    head.playing();
}
// 播放完毕
video.onended = function () {
    head.paused();
}
// 播放暂停
video.onpause = function () {
    head.paused();
}
// video.oncanplay = function(){
//     var offscreenCanvas = document.createElement('canvas');
//     var context = offscreenCanvas.getContext('2d');
//     var videoElement = document.getElementById('video');
//     var imgElement = document.getElementById('img');
//     var imgUrl;
//     context.drawImage(videoElement,0,0);
//     imgUrl = offscreenCanvas.toDataURL("image/png");
//     imgElement.src = imgUrl;

// }
video.onclick = function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
