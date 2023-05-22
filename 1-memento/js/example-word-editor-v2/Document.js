module.exports = class Document {
    #content = "";
    #fontName = "";
    #fontSize = "";

    constructor(content, fontName, fontSize) {
        this.#content = content;
        this.#fontName = fontName;
        this.#fontSize = fontSize;
    }

    print() {
        console.log(`content: ${this.#content}, fontName: ${this.#fontName}, fontSize: ${this.#fontSize}`);
    }
}