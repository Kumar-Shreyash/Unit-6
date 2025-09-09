"use strict";
// You're building a MediaPlayer class that plays different types of media files.
Object.defineProperty(exports, "__esModule", { value: true });
class AudioFile {
    play() {
        console.log("Playing audio file...");
    }
}
class VideoFile {
    play() {
        console.log("Playing video file...");
    }
}
class PDFFile {
    play() {
        console.log("Displaying PDF content");
    }
}
class MediaPlayer {
    mediaFile;
    constructor(mediaFile) {
        this.mediaFile = mediaFile;
    }
    play() {
        this.mediaFile.play();
    }
}
const audio = new MediaPlayer(new AudioFile());
const video = new MediaPlayer(new VideoFile());
const PDF = new MediaPlayer(new PDFFile());
audio.play();
video.play();
PDF.play();
//# sourceMappingURL=index.js.map