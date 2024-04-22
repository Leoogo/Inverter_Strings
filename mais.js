function inverterString(text) {
    let textInverted = "";
    for (let i = text.length - 1; i >= 0; i--) {
        textInverted += text[i];
    }
    return textInverted;
}