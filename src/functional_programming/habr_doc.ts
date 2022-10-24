let locationUrl;

// Объект пользователя
let joeUser = {
    name: 'joe',
    email: 'joe@example.com',
    prefs: {
        languages: {
            primary: 'sp',
            secondary: 'en'
        }
    }
};
// Список стартовых страниц в зависимости от выбранного языка
let indexURLs = {
    'en': 'http://mysite.com/en',  // Английский
    'sp': 'http://mysite.com/sp', // Испанский
    'jp': 'http://mysite.com/jp'   // Японский
}
// Перезаписываем window.location
const showIndexPage = (url) => { locationUrl = url };

const getUrlForUser = (user) => {
    if (user == null) { // не залогинен
        return indexURLs['en']; // возвращаем страницу по умолчанию
    }
    if (user.prefs.languages.primary && user.prefs.languages.primary != 'undefined') {
        if (indexURLs[user.prefs.languages.primary]) { // Если существует перевод
            return indexURLs[user.prefs.languages.primary];
        } else {
            return indexURLs['en'];
        }
    }
}

// вызов
showIndexPage(getUrlForUser(joeUser));

const Maybe = require('ramda-fantasy').Maybe;

const getURLForUser = (user) => {
    return Maybe(user) // Оборачиваем пользователя в объект Maybe
        .map(path(['prefs', 'languages', 'primary'])) // Используем Ramda чтобы получить язык
        .chain(maybeGetUrl); // передаем язык в maybeGetUrl; получаем url или Монаду null
}

const maybeGetUrl = R.curry(function(allUrls, language) { // Каррируем для того, чтобы превратить в функцию с одним параметром
    return Maybe(allUrls[language]); // Возвращаем Монаду(url или null)
})(indexURLs); // Передаем indexURLs вместо того, чтобы обращаться к глобальной переменной


function boot(user, defaultURL) {
    showIndexPage(getURLForUser(user).getOrElse(defaultURL));
}

boot(joeUser, 'http://site.com/en'); // 'http://site.com/sp'
