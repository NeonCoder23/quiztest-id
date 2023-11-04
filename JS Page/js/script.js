let questionLimit = 10;
let bal = 2.5;


const quiz = [
    {
        q: "Quyidagilarning qaysi biri ma'lumot turi emas: <br>\
        Boolean, Number, Array, BigInt, Function, String\
        ",
        option: [
            'Boolean',
            'Number',
            'BigInt',
            'Hammasi ma\'lumot turi'
        ],
        answer: 3,
    },
    {
        q: "Array metodini toping",
        option: [
            'push()',
            'alert()',
            'lenght()',
            'add()'
        ],
        answer: 0,
    },
    {
        q: "Array metodlariga tegishli bo'lmagan variantni ko'rsating",
        option: [
            'push()',
            'filter()',
            'forEach()',
            'add()'
        ],
        answer: 3,
    },
    {
        q: "unshift() metodining vazifasi nima?",
        option: [
            'array\'ning boshiga element qo\'shadi',
            'array\'ning boshidan element o\'chiradi',
            'array\'ning oxiriga element qo\'shadi',
            'array\'ning oxiridan element o\'chiradi'
        ],
        answer: 0,
    },
    {
        q: "shift() metodining vazifasi nima?",
        option: [
            'array\'ning boshiga element qo\'shadi',
            'array\'ning boshidan element o\'chiradi',
            'array\'ning oxiriga element qo\'shadi',
            'array\'ning oxiridan element o\'chiradi'
        ],
        answer: 3,
    },
    {
        q: "prompt() ning vazifasi nima?",
        option: [
            'User\'ni biron bir xabardan ogohlantiradi',
            'User\'dan ma\'lumot qabul qiladi',
            'User\'ga ma\'lumot beradi',
            'User\'ga ma\'lumot berishni to\'xtatib turadi'
        ],
        answer: 1,
    },
    {
        q: "prompt() funksiyasi user'dan qanday ma'lumot qabul qiladi?",
        option: [
            'Faqat Number turdagi ma\'lumotlarni',
            'Barcha turdagi ma\'lumotlarni',
            'String turdagi ma\'lumotlarni',
            'Boolean turdagi ma\'lumotlarni'
        ],
        answer: 1,
    },
    {
        q: "Quyidagi kodga to'g'ri tahlilni toping: \
        <br> if(a>15){<br>\
        &nbsp;&nbsp console.log(a) <br> \
        } \
        ",
        option: [
            'agar a o\'zgaruvchi 15 dan kichik bo\'lsa, konsolga a\'ning qiymatini chiqarish;',
            'agar a o\'zgaruvchi 15 ga teng bo\'lsa, konsolga a\'ning qiymatini chiqarish;',
            'agar a o\'zgaruvchi 15 dan katta bo\'lsa, konsolga a\'ning qiymatini chiqarish;',
            'agar a o\'zgaruvchi 15 dan kichik bo\'lsa, konsolga a\'ning qiymatini chiqarish; aks holda a konsolga chiqarilmasin'
        ],
        answer: 2,
    },
    {
        q: "O'zgaruvchilarni necha xil usulda e'lon qilish mumkin?",
        option: [
            '2 xil',
            '3 xil',
            '4 xil',
            'Istalgancha'
        ],
        answer: 1,
    },
    {
        q: "<b>for</b> operatoriga mos ta'rifni toping",
        option: [
            'for operatori biror bir shart asosida array elementlarini birma-bir o\'chiradi',
            'for operatori biror bir shart asosida ma\'lum kodlarni takrorlaydi',
            'for operatori biror bir shart asosida funksiyalar ishlab chiqaradi',
            'to\'g\'ri javob mavjud emas'
        ],
        answer: 1,
    },
    {
        q: "<b>.forEach()</b> metodiga mos ta'rifni toping",
        option: [
            '.forEach() metodi Array elementlari bilan alohida, birma-bir ishlaydi',
            '.forEach() metodi Array elementlari bilan ma\'lum bir shart bo\'yicha birma-bir ishlaydi',
            '.forEach() metodi Objectdagi keys bilan alohida ishlaydi',
            '.forEach() metodi Array elementlariga qo\'shimcha kontentlarni qo\'shib, yangi Array yaratadi.'
        ],
        answer: 1,
    },
    {
        q: "To'g'ri yozilgan kodni toping",
        option: [
            'let son1 - 15,\
                 son2 - 50',
            'let son1 = 15,\
                 son2 = 50',
            'for(let a = 0;a<48) {<br> \
                console.log("Hello) <br>\
            }',
            'let fruits = new Array("apple";"pear";"cherry")'
        ],
        answer: 1,
    },
    {
        q: "Noto'g'ri yozilgan kodni toping",
        option: [
            'Barcha kodlar to\'g\'ri',
            'let son1 = 15,\
                 son2 = 50',
            'for(let a = 0;a<48;a++) {<br> \
                console.log("Hello") <br>\
            }',
            'let fruits = new Array("apple","pear","cherry")'
        ],
        answer: 0,
    },
    {
        q: "Noto'g'ri yozilgan kodni toping",
        option: [
            'Barcha kodlar to\'g\'ri',
            'let son1 = 15,\
                 son2 = 50',
            'for(let a = 0;a<48;a++) {<br> \
                console.log("Hello") <br>\
            }',
            'let fruits = new Arr("apple","pear","cherry")'
        ],
        answer: 3,
    },
    {
        q: "Quyidagi kodning natijasini toping: <br>\
        let mevalar = ['olma',nok','banan','limon'] <br>\
        mevalar.pop() <br>\
        console.log(mevalar)",
        option: [
            '[\'olma\',\'nok\',\'limon\']',
            '[\'olma\',\'nok\',\'banan\']',
            '[\'nok\',\'banan\',\'limon\']',
            '[\'olma\',\'nok\',\'limon\',\'anjir\']'
        ],
        answer: 1,
    },
    {
        q: "Quyidagi kodning natijasini toping: <br>\
        let mevalar = ['olma',nok','banan','limon'] <br>\
        mevalar.unshift('olma') <br>\
        console.log(mevalar)",
        option: [
            '[\'olma\',\'nok\',\'limon\']',
            '[\'olma\',\'olma\',\'nok\',\'banan\',\'limon\']',
            '[\'nok\',\'banan\',\'limon\']',
            '[\'olma\',\'nok\',\'limon\',\'anjir\']'
        ],
        answer: 1,
    },
    {
        q: "Quyidagi kodning natijasini toping: <br>\
        let mevalar = ['olma',nok','banan','limon'] <br>\
        mevalar.unshift('olma') <br>\
        console.log(mevalars)",
        option: [
            '[\'olma\',\'nok\',\'limon\']',
            '[\'olma\',\'olma\',\'nok\',\'banan\',\'limon\']',
            '[\'nok\',\'banan\',\'limon\']',
            'mevalars is not defined'
        ],
        answer: 3,
    },
]

// console.log(me);