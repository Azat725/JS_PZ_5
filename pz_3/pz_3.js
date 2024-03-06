class News {
    constructor() {
        this.news = []; 
    }

    get count() {
        return this.news.length;
    }

    printNews() {
        if (this.count === 0) {
            document.write('<div>Новостей нет</div>');
        } else {
            this.news.forEach(item => {
                document.write(
                    `<p>${item.title} - ${item.date}</p>` +
                    `<p>${item.text}</p>` +
                    `<p>Теги -> ${item.tags}</p>`
                );
            });
        }
    }

    addNews(title, date, text, tags) {
        this.news.push({title, date, text, tags}); 
    }

    deleteNews(title) {
        this.news = this.news.filter(item => item.title !== title); 
    }

    sortNewsByDate() {
        this.news.sort((a, b) => new Date(b.date) - new Date(a.date)); 
    }

    searchNewsByTag(tag) { 
        return this.news.filter(item => item.tags.includes(tag));
    }
}

let newsFeed = new News();

newsFeed.addNews('Новость 1', '2024-02-28', 'Текст новости 1', ['политика', 'экономика']);
newsFeed.addNews('Новость 2', '2024-02-27', 'Текст новости 2', ['спорт', 'футбол']);
newsFeed.addNews('Новость 3', '2024-02-26', 'Текст новости 3', ['технологии']);

console.log('Всего новостей:', newsFeed.count);
console.log('--- Все новости ---');
newsFeed.printNews();

newsFeed.sortNewsByDate();
console.log('--- Отсортированные новости ---');
newsFeed.printNews();

console.log('--- Поиск новостей по тегу "политика" ---');
let newsWithTag = newsFeed.searchNewsByTag('политика');
newsWithTag.forEach(item => {
    console.log(`${item.title} - ${item.date}`);
});
