export class Post {
    
    private authorName: string;
    private contentPost: string;

    constructor(authorName, contentPost){
        this.authorName = authorName;
        this.contentPost = contentPost;
    }

    public getAuthor() {
        return this.authorName;
    }

    public getContent() {
        return this.contentPost;
    }
}