// You're building a MediaPlayer class that plays different types of media files.

// Create an interface MediaFile with method play()
// Implement AudioFile, VideoFile, and PDFFile
// Create a MediaPlayer class that accepts any MediaFile and calls its play() method
// Expected Output:

// Playing audio file...
// Playing video file...
// Displaying PDF document...

// Goal: Show loose coupling via interface allows plugging in any media type.

interface MediaFile{
    play():void;
}
class AudioFile implements MediaFile{
    play():void{
        console.log("Playing audio file...")
    }
}
class VideoFile implements MediaFile{
    play():void{
        console.log("Playing video file...")
    }
}
class PDFFile implements MediaFile{
    play():void{
        console.log("Displaying PDF content")
    }
}
class MediaPlayer{
    private mediaFile:MediaFile

    constructor(mediaFile:MediaFile){
        this.mediaFile=mediaFile
    }

    play(){
        this.mediaFile.play()

    }
}

const audio=new MediaPlayer(new AudioFile())
const video=new MediaPlayer(new VideoFile())
const PDF=new MediaPlayer(new PDFFile())
audio.play()
video.play()
PDF.play()