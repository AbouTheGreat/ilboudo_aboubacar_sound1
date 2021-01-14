while True:
    print(input.light_level())
    if 110 < input.sound_level():   
        music.set_volume(100)
        music.pew_pew.play()
        