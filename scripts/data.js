import { Serie } from "./serie.js";

var series = [
    {
        id: 1,
        name: 'Breaking Bad',
        seasons: 5,
        channel: 'AMC',
        description: 'Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer',
        link: 'https://www.amc.com/shows/breaking-bad',
        image: 'https://www.seriemaniac.com/wp-content/uploads/2013/10/que-significa-Breaking-Bad.jpg'
    },
    {
        id: 2,
        name: 'Orange Is the New Black',
        seasons: 6,
        channel: 'Netflix',
        description: 'The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary',
        link: 'https://www.netflix.com/co/title/70242311',
        image: 'https://the-booklet.com/wp-content/uploads/2019/08/zentauroepp44241260-television-serie-netflix-orange-the-new-black181019113824-1539942088360.jpg'
    },
    {
        id: 3,
        name: 'Game of Thrones',
        seasons: 7,
        channel: 'HBO',
        description: 'American fantasy drama',
        link: 'https://www.hbo.com/game-of-thrones',
        image: 'https://www.eltiempo.com/files/image_1200_680/uploads/2022/07/19/62d6c68bda149.png'
    },
    {
        id: 4,
        name: 'The Big Bang Theory',
        seasons: 12,
        channel: 'CBS',
        description: 'Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.',
        link: 'https://www.cbs.com/shows/big_bang_theory/about/',
        image: 'https://i.blogs.es/4600c9/the-big-bang-theory/840_560.jpg'
    },
    {
        id: 5,
        name: 'Sherlock',
        seasons: 4,
        channel: 'BBC',
        description: 'Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps',
        link: 'https://www.bbc.co.uk/programmes/b018ttws',
        image: 'https://ntvb.tmsimg.com/assets/p10406404_b_h10_aa.jpg?w=1280&h=720'
    },
    {
        id: 6,
        name: 'A Very English Scandal',
        seasons: 2,
        channel: 'BBC',
        description: 'A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Prestons book of the same name.',
        link: 'https://www.bbc.co.uk/programmes/p065smy4',
        image: 'https://richardpryn.com/content/images/2022/04/british-scandal.jpeg'
    }
];

export var dataSeries = series.map(function (serie) { return new Serie(serie.id, serie.name, serie.seasons, serie.channel, serie.description, serie.link, serie.image); });
