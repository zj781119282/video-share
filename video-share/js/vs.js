window.onload = function () {


}

var bt = document.querySelector('button');
bt.onclick = function () {
    video.play();
}
// ������
var video = document.querySelector('#video');
var head = document.querySelector('.cm_head');
var cover = document.querySelector('img');
var cm_video = document.querySelector('.cm_video');
// ������
head.playing = function () {
    this.style.display = 'none';
    bt.style.display = 'none';
    cover.style.display = 'none';
}
// ���Ž����������ͣ
head.paused = function () {
    this.style.display = 'block';
    bt.style.display = 'block';
    cover.style.display = 'block';
}
// ������
video.ontimeupdate = function () {
    head.playing();
}
// �������
video.onended = function () {
    head.paused();
}
// ������ͣ
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
