class PrintMashine {
    constructor (fontSize, color, fontFamily) {
        this.fontSize = fontSize;
        this.color = color;
        this.fontFamily = fontFamily;
    }

    print (text) {
        document.open();
        document.write(`<p style="font-size: ${this.fontSize}; color: ${this.color}; font-famly: ${this.fontFamily}">
            ${text}
        </p>`);
        document.close();
    }
}