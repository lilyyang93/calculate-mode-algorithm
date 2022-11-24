def calculate_mode(list):
    most = 0
    mode = []
    my_dict = {}
    for l in list:
        if l in my_dict:
            my_dict[l] += 1
        else: 
            my_dict[l] = 1
    for key, value in my_dict.items():
        if value > most:
            most = value
    for key, value in my_dict.items():
        if value == most:
            mode.append(key)
    return mode 
