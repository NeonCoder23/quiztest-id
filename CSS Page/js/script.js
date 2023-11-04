let questionLimit = 10,
    bal = 2;
const quiz = [
    {
        q: "CSS ning to'liq nomini nima?",
        option: [
            'Cascading Style Sheets',
            'Cascading Source Sheets',
            'Classic Style Sheets',
            'Cascading Size Sheets'
        ],
        answer: 0,

    },
    {
        q: "Selectors nima?",
        option: [
            'HTML elementlari',
            'JavaScript funksiyalari',
            'Tanlab oluvchilar',
            'Tanlab beruvchilar'
        ],
        answer: 2,

    },
    {
        q: "Box model deganda nima tushuniladi?",
        option: [
            'CSS HTML elementlarini box modelga aylantirib qo\'yishi',
            'CSS barcha HTML elementlarini "box model", ya\'ni quti ostida ko\'radi',
            '"Elementlarni modellashtirish"',
            'To\'g\'ri javob mavjud emas'
        ],
        answer: 1,

    },
    {
        q: "margin xossasi qanday vazifani bajaradi?",
        option: [
            'Contentdan chegaragacha bo\'lgan masofani belgilaydi',
            'Elementning chegarasini belgilaydi',
            'Elementlar orasidagi masofani belgilaydi',
            'To\'g\'ri javob mavjud emas'
        ],
        answer: 2,

    },
    {
        q: "content'dan chegaragacha bo'lgan masofani qaysi CSS xossasi belgilaydi?",
        option: [
            'margin-collapse',
            'padding',
            'margin',
            'box-sizing'
        ],
        answer: 1,

    },
    {
        q: "chegara qalinligiga qaysi CSS xossasi javobgar?",
        option: [
            'border-weight',
            'border-width',
            'border-style',
            'border-color'
        ],
        answer: 1,

    },
    {
        q: "solid, inset, ridge, dashed, dotted, double; ushbu terminlar nimani anglatmoqda?",
        option: [
            'border-weight',
            'border-width',
            'border-style',
            'border-color'
        ],
        answer: 2,

    },
    {
        q: "Jadvalning kataklari orasidagi bo'shliqni boshqaradigan CSS xossasi qaysi?",
        option: [
            'padding',
            'margin',
            'filter',
            'margin-collapse'
        ],
        answer: 3,

    },
    {
        q: "Float xossasi nima vazifani bajaradi?",
        option: [
            'Block elementlarni chap yoki o\'ng tomonga surib, o\'zidan keyingi kelgan elementlarga joy bo\'shatadi',
            'Block elementlarni tepaga yoki pastga joylashtiradi',
            'Inline elementlarni block elementlarga aylantiradi',
            'Barcha javoblar to\'g\'ri'
        ],
        answer: 0,

    },
    {
        q: "text-align xossasi qanday vazifani bajaradi?",
        option: [
            'Block yoki inline element ichidagi barcha elementlar va matnlarni gorizontal joylashuvini belgilaydi',
            'Block yoki inline element ichidagi faqat inline elementlar va matnlarni gorizontal joylashuvini belgilaydi',
            'Block yoki inline element ichidagi faqat block elementlarni gorizontal joylashuvini belgilaydi',
            'Block yoki inline element ichidagi faqat inline elementlar va matnlarni vertikal joylashuvini belgilaydi'
        ],
        answer: 1,

    },
    {
        q: "Position nima?",
        option: [
            'inline elementlarning joylashuvi',
            'block elementlarning joylashuvi',
            'matnlarning joylashuvi',
            'block va inline elementlarning joylashuvi'
        ],
        answer: 3,

    },
    {
        q: "Position nima?",
        option: [
            'inline elementlarning joylashuvi',
            'block elementlarning joylashuvi',
            'matnlarning joylashuvi',
            'block va inline elementlarning joylashuvi'
        ],
        answer: 3,

    },
]