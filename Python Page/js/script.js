let questionLimit = 10;
let bal = 6.5

const quiz = [
    {
        q: 'Pythonda qanday sikllar mavjud?',
        option: [
            'for, while, do while',
            'if, else, switch',
            'for, while',
            'for, forEach'
        ],
        answer: 2,
    },
    {
        q: 'Pythonda tarmoqlanuvchi operatorlar qanday?',
        option: [
            'if, else, switch',
            'if, else, switch. case',
            'if, elif, else, try, catch, expend',
            'if, switch, case'
        ],
        answer: 2,
    },
    {
        q: 'Pythonda matnlarni nima ichiga yozish kerak? Va bu qat\'iy qoida hisoblanadi',
        option: [
            'birtirnoq va qo\'shtirnoq ichiga',
            'to\'rtburchak qavslar ichiga',
            'uchburchak qavslar ichiga',
            'yumaloq qavslar ichiga'
        ],
        answer: 0,
    },
    {
        q: 'Pythonda oddiy ro\'yxatlar qanday qavslar bilan yaratiladi?',
        option: [
            'gulli qavslar bilan',
            'to\'rtburchak qavslar bilan',
            'uchburchak qavslar bilan',
            'yumaloq qavslar bilan'
        ],
        answer: 1,
    },
    {
        q: 'Pythonda lug\'atlar qanday qavslar bilan yaratiladi?',
        option: [
            'gulli qavslar bilan',
            'to\'rtburchak qavslar bilan',
            'uchburchak qavslar bilan',
            'yumaloq qavslar bilan'
        ],
        answer: 0,
    },
    {
        q: 'Pythonda o\'zgarmas(tuple) ro\'yxatlar qanday qavslar bilan yaratiladi?',
        option: [
            'gulli qavslar bilan',
            'to\'rtburchak qavslar bilan',
            'uchburchak qavslar bilan',
            'yumaloq qavslar bilan'
        ],
        answer: 3,
    },
    {
        q: 'Quyidagi kodning natijasi qanday? <br>  print("Hello World)',
        option: [
            'Syntex Error',
            'Hello world',
            'EOL',
            'NaN'
        ],
        answer: 0,
    },
    {
        q: 'Quyidagi kodning natijasi qanday? <br>  print("Hello World")',
        option: [
            'Syntex Error',
            'Hello world',
            'EOL',
            'NaN'
        ],
        answer: 1,
    },
    {
        q: 'Quyidagi kodning natijasi qanday? <br>  mevalar.append("olcha")',
        option: [
            'Syntex Error',
            '["olcha"]',
            'mevalar is not defined',
            'NaN'
        ],
        answer: 2,
    },
    {
        q: 'Quyidagi kodning natijasi qanday? <br> mevalar = [] <br> mevalar.append("olcha")',
        option: [
            'Syntex Error',
            'mevalar is not defined',
            '["olcha"]',
            'NaN'
        ],
        answer: 2,
    },
    {
        q: 'Quyidagi kodning natijasi qanday? <br> mevalar = [] <br> mevalar.pop("olcha")',
        option: [
            'Syntex Error',
            '"olcha" is not defined',
            '[]',
            'NaN'
        ],
        answer: 1,
    },
]