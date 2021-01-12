while (true) {
    console.log(input.soundLevel())
    if (20 < input.soundLevel()) {
        light.showAnimation(light.rainbowAnimation, 500)
        pause(5000)
    }
    
}
