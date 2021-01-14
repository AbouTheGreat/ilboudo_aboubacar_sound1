while (true) {
    console.log(input.lightLevel())
    if (110 < input.soundLevel()) {
        music.setVolume(100)
        music.pewPew.play()
    }
    
}
