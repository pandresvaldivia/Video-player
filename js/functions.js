import { $videoPlayer, $playBtn, $progressBar } from './selectors.js';

function handlePlay() {
	if ($videoPlayer.paused) {
		$videoPlayer.play();
		$playBtn.children[0].className = 'icon-pause';
		$playBtn.ariaLabel = 'Pausar video';
		$playBtn.title = 'Pausar video';
	} else {
		$videoPlayer.pause();
		$playBtn.children[0].className = 'icon-play';
		$playBtn.ariaLabel = 'Reproducir video';
		$playBtn.title = 'Reproducir video';
	}
}

function handleForward() {
	$videoPlayer.currentTime += 10;
}

function handleBackward() {
	$videoPlayer.currentTime -= 10;
}

function setDuration() {
	$progressBar.max = $videoPlayer.duration;
}

function handleTimeUpdate() {
	$progressBar.value = $videoPlayer.currentTime;
}

function handleProgressBar() {
	$videoPlayer.currentTime = $progressBar.value;
}

export {
	handlePlay,
	handleForward,
	handleBackward,
	setDuration,
	handleTimeUpdate,
	handleProgressBar,
};
