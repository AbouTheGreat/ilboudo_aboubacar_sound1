while True:
    print(input.sound_level())
    if 20 < input.sound_level():
        light.show_animation(light.rainbowAnimation, 500)
        pause(5000)
      