module.exports = class EditorState{
    #content;
    #fontName;
    #fontSize;
    
    constructor(content, fontName, fontSize){
        this.#content = content;
        this.#fontName = fontName;
        this.#fontSize = fontSize;
    }
    getContent(){
        return this.#content;
    }
    getFontName(){
        return this.#fontName;
    }
    getFontSize(){
        return this.#fontSize;
    }
}