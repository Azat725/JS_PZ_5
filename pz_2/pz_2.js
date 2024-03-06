class News {
    constructor (title, date, text, tags) {
        this.title = title;
        this.date = new Date(date); 
        this.text = text;
        this.tags = tags;
    }

    print () {
        let currentDate = new Date();
        let diffDate = currentDate - this.date;
        let diffDays = Math.ceil(diffDate / (1000 * 60 * 60 * 24)); 

        let dateString;
        if (diffDays < 1) {
            dateString = "Сегодня"
        } else if (diffDays < 7) {
            dateString = `${diffDays} дней назад`
        } else {
            dateString = `${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}`; 
        } 

        document.open();
        document.write(
            `<h1>${this.title}</h1>`
        );
        document.write(
            `<p>${dateString}</p>`
        );
        document.write(
            `<p>${this.text}</p>`
        );
        document.write(
            `<p>${this.tags}</p>`
        )
        document.close();
    }
}


let news = new News('Заголовок новости', '2024-02-28', 'Текст новости', ['важно', 'политика']); 
news.print();