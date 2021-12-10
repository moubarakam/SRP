class News {
    constructor(title, text) {
        this.title  = title;
        this.text = text;
        this.modified = false;
    }

    update(text)  {
        this.text = text;
        this.modified  = true;
    }

    
}

class Generate{

    html() {
        return `
            <div class="news">
                <h1>${this.title}</h1>
                <p>${this.text}</p>
            </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.title,
            text: this.text,
            modified: this.modified
        }, null, 2)
    }

    xml() {
        return `
            <news>
                <title>${this.title}</title>
                <text>${this.text}</text>
            </news>
        `
    }

}

const news = new News('Un super titre', 'Une super description');
console.log(news.html());
console.log(news.json());
console.log(news.xml());
news.update('Une description encore mieux !');
console.log(news.html());
console.log(news.json());
console.log(news.xml());
