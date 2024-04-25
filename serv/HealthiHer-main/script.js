const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime/5)*2
const holdTime = totalTime / 5

breatheAnimation()

// document.addEventListener('DOMContentLoaded', function() {
//     var video = document.getElementById('preview-video');
//     var videoContainer = document.querySelector('.video-container');

//     // Pause the video when the page loads
//     video.pause();

//     // Add event listeners for mouse hover and mouse leave
//     videoContainer.addEventListener('mouseenter', function() {
//         video.play();
//     });

//     videoContainer.addEventListener('mouseleave', function() {
//         video.pause();
//         // Reset video playback time to start from the beginning
//         video.currentTime = 0;
//     });
// });

function breatheAnimation () {
    text.innerHTML = 'Breathe In!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(()=> {
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)
