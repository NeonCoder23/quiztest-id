let questionLimit = 10;
let bal = 4.5

const quiz = [
    {
        q: 'Matnlarni rangini belgilash uchun qaysi xossa ishlatiladi?',
        option: ['background-color','border-color','color','text-color'],
        answer: 2,
    },
    {
        q: 'left xossasi bilan margin-left xossasining farqi nimada?',
        option: [
            'Farqi yo\'q',
            'margin-left o\'zidan keyingi elementlarni ham o\'zi bilan suradi, left esa faqat elementni o\'zini suradi',
            'left o\'zidan keyingi elementlarni ham o\'zi bilan suradi, margin-left esa faqat elementni o\'zini suradi',
        ],
        answer: 1,
    },
    {
        q: 'Saytni responsive qilish uchun qaysi kalit so\'zi kerak?',
        option: ['@keyframes','@includes','@import','@media'],
        answer: 3,
    },
    {
        q: 'HTML ga mos ta\'rifni toping',
        option: [
            'Hyper Text Markup Language',
            'Hyper Text Marketing Language',
            'Hight Text Markup Language',
            'Hyper Tools Markup Language'
        ],
        answer: 0,
    },
    {
        q: 'CSS faylni HTML hujjatimizga qaysi teg orqali ulaymiz?',
        option: ['script','link','head','iframe'],
        answer: 1,
    },
    {
        q: 'Quyidagi mulohazalarning qaysi biri noto\'g\'ri?',
        option: [
            'CSS fayl HTML hujjatiga link tagi orqali ulanadi',
            'Inline stil\'ni CSS faylidan ham o\'zgartirib bo\'lmaydi',
            'JavaScriptda <i>filter</i> tushunchasi yo\'q',
            'justify-content xossasining <i>space-around</i> qiymati bor'
        ],
        answer: 2,
    },
    {
        q: 'HTML hujjatda jadvallar asosan qaysi teglar yordamida yaratiladi?',
        option: [
            'table, tbody, thead, meta',
            'link, style, ol, h1',
            'thead, tbody, tr, td, table, th',
            'iframe, center, bold, table, th',
            'table, th, td, ol, li, ul'],
        answer: 2,
    },
    {
        q: 'JS faylni HTML hujjatimizga qanday ulaymiz?',
        option: ['script','link','head','iframe'],
        answer: 0,
    },
    {
        q: 'border xossasining vazifasi qanday?',
        option: [
            'Chegara ni belgilaydi',
            'Balanadlikni belgilaydi',
            'Kenglikni belgilaydi',
            'Chegara bilan contentning orasidagi masofani belgilaydi.'
        ],
        answer: 0,
    },
    {
        q: 'Quyidagilardan qaysi biri kutubxona sanalmaydi?',
        option: ['SCSS','Bootstrap','TailwindCSS','Django'],
        answer: 0,
    },
    {
        q: 'Quyidagi mulohazaga baho bering: <br> Transform:rotate(); bu xossa elementni kattalashtirish yoki kichiklashtirish uchun ishlatiladi.',
        option: ['True','False'],
        answer: 1,
    },
    {
        q: 'Qaysi usul bilan stil berish tavsiya etilmaydi?',
        option: [
            'class yordamida stil berish',
            'inline stil berish',
            'attribut yordamida stil berish',
            'universal stil berish',
            'ID yordamida stil berish',
            'Tag nomi bilan stil berish'
        ],
        answer: 1,
    },
    {
        q: 'Nimaning logosi? <br>',
        option: ['Tailwind','Sass','Html','VueJs'],
        answer: 1,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTaVbrzCwCfnybnnVEq9bXNHX9IOnz05lRw&usqp=CAU',
    },
    {
        q: 'border-radius xossasi nima vazifani bajaradi?',
        option: [
            'Element shaklini uchburchakka aylantiradi.',
            'Element qirralarini og\'diradi, ya\'ni silliqlaydi',
            'Element chegarasini kengligini ta\'minlaydi',
            'Elementga soya beradi'
        ],
        answer: 1,
    },
    {
        q: 'box-shadow xossasi nima vazifani bajaradi?',
        option: [
            'Elementga soya beradi',
            'Elementni kichraytiradi',
            'Element chegarasini kengligini ta\'minlaydi',
            'Elementga rang beradi'
        ],
        answer: 0,
    },
    {
        q: 'teal nima?',
        option: [
            'o\'lchov birligi',
            'rang',
            'xossa',
            'tag'
        ],
        answer: 1,
    },
]