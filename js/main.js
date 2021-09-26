import {
	$playBtn,
	$forwardBtn,
	$backwardBtn,
	$videoPlayer,
	$progressBar,
} from './selectors.js';

import {
	handlePlay,
	handleForward,
	handleBackward,
	setDuration,
	handleTimeUpdate,
	handleProgressBar,
} from './functions.js';

$playBtn.addEventListener('click', handlePlay);
$forwardBtn.addEventListener('click', handleForward);
$backwardBtn.addEventListener('click', handleBackward);
document.addEventListener('DOMContentLoaded', setDuration);
$videoPlayer.addEventListener('loadedmetadata', setDuration);
$videoPlayer.addEventListener('timeupdate', handleTimeUpdate);
$progressBar.addEventListener('input', handleProgressBar);
