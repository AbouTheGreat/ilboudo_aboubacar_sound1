while (true) {
    console.log(input.lightLevel())
    if (100 < input.lightLevel()) {
        music.setVolume(1000)
        music.pewPew.playUntilDone()
    }
    
}
