window.onload = () => {
    const video = document.querySelector("video");
    const thumbsContainer = document.getElementById("videoThumbs");

    for (let file of files) {
        const img = document.createElement("img");
        img.src = `/enhanced-media-player/images/${file}.jpg`;
        img.alt = file;
        img.className = "thumb";
        img.addEventListener("click", () => {
            video.pause();
            video.src = `/enhanced-media-player/media/${file}.mp4`;
            video.load();
            video.play();
        });
        thumbsContainer.appendChild(img);
    }

    const stopBtn = document.getElementById("stop");
    stopBtn.addEventListener("click", () => {
        video.pause();
        video.currentTime = 0;
        document.getElementById("playPause").textContent = "Play";
    });

    const skipButtons = document.querySelectorAll("button[data-skip]");
    skipButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            video.currentTime += parseFloat(btn.dataset.skip);
        });
    });

    const playPause = document.getElementById("playPause");
    playPause.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            playPause.textContent = "Pause";
        } else {
            video.pause();
            playPause.textContent = "Play";
        }
    });
};
