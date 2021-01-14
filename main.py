while True:
    print(input.light_level())
    if 100 < input.light_level():   
        music.set_volume(1000)
        music.pew_pew.play_until_done()
        