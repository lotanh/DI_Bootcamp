// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title , uploader , time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }watch() {
        alert(`${this.uploader} watch all ${this.time} min of ${this.title}`)
    }
}
const video1 = new Video('Greatest rap of the history' , 'adult swin' , 20)
const video2 = new Video('Thunder' , 'AC/DC' , 30)
const video3 = new Video('Lose yourself' , 'eminem' , 5)
const video4 = new Video('In your eyes' , 'The weekend' , 9)
const video5 = new Video('Party monster' , 'The weekend' , 6)

let videoArr = []
videoArr.push(video1 , video2 , video3 , video4 , video5)
console.log(videoArr)
