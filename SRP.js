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

    // constructor(title, text) {
    //     this.new  = new News(title, text);
    // }

    html(title, text) {
        return `
            <div class="news">
                <h1>${title}</h1>
                <p>${text}</p>
            </div>
        `
    }

    json(title, text) {
        return JSON.stringify({
            title: title,
            text: text
        }, null, 2)
    }

    xml(title, text) {
        return `
            <news>
                <title>${title}</title>
                <text>${text}</text>
            </news>
        `
    }

}

const news = new News('Un super titre', 'Une super description');
const generate = new Generate();

console.log(generate.html(news.title, news.text));
console.log(generate.json(news.title, news.text));
console.log(generate.xml(news.title, news.text));
news.update('Une description encore mieux !');
console.log(generate.html(news.title, news.text));
console.log(generate.json(news.title, news.text));
console.log(generate.xml(news.title, news.text));
