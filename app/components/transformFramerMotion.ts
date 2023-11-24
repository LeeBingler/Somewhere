function transformFramerMotion(
    inputValue: number,
    inputRange: Array<number>,
    outputRange: Array<number>
) {
    let inputRangeMin = inputRange[0];
    let inputRangeMax = inputRange[1];
    let outputRangeMin = outputRange[0];
    let outputRangeMax = outputRange[1];

    return (
        ((inputValue - inputRangeMin) / (inputRangeMax - inputRangeMin)) *
            (outputRangeMax - outputRangeMin) +
        outputRangeMin
    );
}

export default transformFramerMotion;
