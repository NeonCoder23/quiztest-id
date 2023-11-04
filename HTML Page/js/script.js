let questionLimit = 10;
let bal = 1.5

const quiz = [
    {
        q: 'HTML ning ma\'nosi nima?',
        option: [
            'Giper Matnni Chopish Tili',
            'Giper Matnni Belgilash Tashkiloti',
            'Giper Matnni Belgilash Tili',
            'Multi Matnni Belgilash Tili'
        ],
        answer: 2,
    },
    {
        q: 'Paragraph tegini toping',
        option: [
            '< p>< /p>',
            '< table>< /table>',
            '< h1>< /h1>',
            '< head>< /head>'
        ],
        answer: 0,
    },
    {
        q: 'Tartibli ro\'yxat, ya\'ni raqamli ro\'yxat qaysi teg bilan yaratiladi?',
        option: [
            '< ul>< /ul>',
            '< ol>< /ol>',
            '< h9>< /h9>',
            '< tr>< /tr>'
        ],
        answer: 1,
    },
    {
        q: '< !DOCTYPE > - Bu HTML tegi hisoblanadi.',
        option: [
            'To\'g\'ri',
            'Noto\'g\'ri',
        ],
        answer: 1,
    },
    {
        q: 'HTML da musiqa, qo\'shiqlar qaysi element orqali brauzerga chiqariladi?',
        option: [
            '< head>< /head>',
            '< video>< /video>',
            '< iframe>< /iframe>',
            '< audio>< /audio>',
        ],
        answer: 3,
    },
    {
        q: 'HTML da ilovalar, ya\'ni Linklar qanday yaratiladi?',
        option: [
            '@ "kuchukcha" yordamida',
            '< a>< /a> tegi yordamida',
            '< i>< /i> tegi yordamida',
            '< b>< /b> tegi yordamida',
        ],
        answer: 1,
    },
    {
        q: 'Favikon <i>"favicon"</i> nima?',
        option: [
            'Teg',
            'Dasturlash tili',
            'Brauzerning logosi',
            'Bunday tushuncha mavjud emas',
        ],
        answer: 2,
    },
    {
        q: '< b>< /b> tegi qanaqa xususiyatga ega?',
        option: [
            'Matnlarni qalinlashtiradi',
            'Matnlarni qiyaroq holatga olib keladi',
            'Matnlarning barcha harfini katta harfga o\'zgartiradi',
            'Matnlarni o\'lchamini kattalashtiradi',
        ],
        answer: 0,
    },
    {
        q: '< img> tegi qanaqa xususiyatga ega?',
        option: [
            'Saytga video joylaydi',
            'Saytga rasm joylaydi',
            'Saytga audio joylaydi',
            'Saytga you tube videolarini yuklaydi',
        ],
        answer: 1,
    },
    {
        q: 'Rasmlar qanday joylanadi?',
        option: [
            '< image> tegi yordamida',
            '< img> tegi yordamida',
            '< hr> tegi yordamida',
            '< br> tegi yordamida',
        ],
        answer: 1,
    },
    {
        q: 'Quyidagilarning qaysi biri HTML tegi emas: <br>\
        < center>, < br>, < h1>, < iframe>, < label>, < nav>, < mark>, < del>\
        ',
        option: [
            '< center>',
            '< br>',
            '< iframe>',
            '< mark> ',
            'Barchasi HTML tegi'
        ],
        answer: 4,
    },
    {
        q: 'Quyidagilarning qaysi biri HTML tegi emas: <br>\
        < sub>, < hr>, < h6>, < table>, < html>, < column>, < link>, < p>\
        ',
        option: [
            '< center>',
            '< br>',
            '< column>',
            '< mark> ',
            'Barchasi HTML tegi'
        ],
        answer: 2,
    },
    {
        q: 'HTML da < meta> tegining vazifasi qanday?',
        option: [
            'Saytga tashqaridan resurs yuklashda yordam beradi',
            'Serverga sayt haqida ma\'lumot beradi',
            'Saytni ishga tushirishda yordam beradi',
            'Bu tegning vazifasi mavjud emas',
            'To\'g\'ri javob mavjud emas'
        ],
        answer: 1,
    },
    {
        q: 'HTML da < input> tegining vazifasi qanday?',
        option: [
            'Foydalanuvchidan ma\'lumot qabul qiladi',
            'Rasm yuklaydi',
            'Saytga xatboshilarni yuklashda yordam beradi',
            'To\'g\'ri javob mavjud emas'
        ],
        answer: 0,
    },
]