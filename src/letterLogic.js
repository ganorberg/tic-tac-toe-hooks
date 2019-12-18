const getOppositeLetter = (letter) => {
    const map = {
        "X": "O",
        "O": "X"
    }

    return map[letter];
}

export default getOppositeLetter;