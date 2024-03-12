
def displayRanger(lower, upper):
    if (lower == upper):
        return upper
    else:
        print(lower)
        return displayRanger(lower + 1, upper)


print(displayRanger(2, 20))
