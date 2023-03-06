import { writable } from 'svelte/store';

export const langObj = writable({
    "webTitle": {
        "en": "CG ko Malik",
        "np": "सीजी को मालिक"
    },
    "sharePage": {
        "en": "Share this page?",
        "np": "यो पेज सेयर गर्नुहोस्"
    },
    "createdBy": {
        "en": "Created by",
        "np": "सिर्जनाकर्ता"
    },
    "creator":{
        "en": "Rubek",
        "np": "रुबेक"
    },
    "inspiredBy": {
        "en": "Inspired by",
        "np": "प्रेरणादायक"
    },
    "inspiror": {
        "en": "neal.fun/spend",
        "np": "नील.फन/स्पेन्द"
    },
    "item": {
        "en": "item",
        "np": "चिज"
    },
    "view": {
        "en": "view",
        "np": "हेर्नुहोस्"
    },
    "rupees": {
        "en": "Rs.",
        "np": "रु"
    },
    "priLi": {
        "en": "Pvt. Ltd.",
        "np": "प्रा. लि."
    },
    "billNo": {
        "en": "Bill no.",
        "np": "बिल नम्"
    },
    "date": {
        "en": "Date",
        "np": "मिति"
    },
    "total": {
        "en": "Total",
        "np": "कुल"
    },
    "refundable": {
        "en": "Not refundable",
        "np": "फिर्ता योग्य छैन"
    }
});

export const itemObj=writable([
    {
        enName:  'Wai wai',
        npName: 'वाइ वाइ',
        img: './imgs/waiwai.jpg',
        price: 25,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Egg',
        npName: 'अन्दा',
        img: './imgs/egg.jpg',
        price: 15,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Iphone',
        npName: 'आइफोन',
        img: './imgs/iphone.png',
        price: 150000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Laptop',
        npName: 'ल्यापतप',
        img: './imgs/laptop.jpg',
        price: 125000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Momo',
        npName: 'म:म:',
        img: './imgs/momo.jpg',
        price: 120,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Kathmandu ma Ghar',
        npName: 'काठमाडौँ मा घर',
        img: './imgs/kathmandu-ghar.jpg',
        price: 30000000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Helicopter',
        npName: 'हेलिकप्टर',
        img: './imgs/helicopter.png',
        price: 150000000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Aeroplane',
        npName: 'हवाईजहाज',
        img: './imgs/aeroplane.png',
        price: 400000000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Bungalow',
        npName: 'बंगलो',
        img: './imgs/bungalow.jpg',
        price: 100000000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Old monk',
        npName: 'ओल्ड मोंक',
        img: './imgs/old-monk.png',
        price: 1900,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Gold',
        npName: 'सुन',
        img: './imgs/gold.png',
        price: 102300,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Tesla',
        npName: 'टेस्ला',
        img: './imgs/tesla.png',
        price: 15000000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Hyundai',
        npName: 'ह्युन्दै ',
        img: './imgs/hyundai.png',
        price: 6096000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'CRF',
        npName: 'सी आर एफ',
        img: './imgs/crf.png',
        price: 1750000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Dio',
        npName: 'दियो',
        img: './imgs/dio.png',
        price: 227000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Apple Watch',
        npName: 'एप्पल घडी',
        img: './imgs/apple-watch.png',
        price: 44900,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Tempo',
        npName: 'टेम्पो',
        img: './imgs/tempo.png',
        price: 140000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Kalinchowk Tour Package',
        npName: 'कालिञ्चोक टुर प्याकेज',
        img: './imgs/kalinchowk.jpg',
        price: 5000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'E Scooter',
        npName: 'ई स्कूटर',
        img: './imgs/e-scooter.png',
        price: 350000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Gaming PC',
        npName: 'गेमिङ पीसी',
        img: './imgs/gaming-pc.png',
        price: 120000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Yatri',
        npName: 'यात्री',
        img: './imgs/yatri.png',
        price: 565000,
        ordered: null,
        maxOrder: 99
    },
    {
        enName:  'Android',
        npName: 'एन्ड्रोइड',
        img: './imgs/android.png',
        price: 80000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Thakali Khana Set',
        npName: 'थकाली खाना सेट',
        img: './imgs/thakali-khana.png',
        price: 250,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'RONB promotion',
        npName: 'आर ओ एन बी विज्ञापन',
        img: './imgs/ronb.png',
        price: 70000,
        ordered: null,
        maxOrder: 999
    },
    {
        enName:  'Air Jordan',
        npName: 'एयर जोर्डन',
        img: './imgs/air-jordan.png',
        price: 23500,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Louis Vuitton',
        npName: 'लुइ भितों',
        img: './imgs/louis-vuitton.png',
        price: 300000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Gucci',
        npName: 'गुच्ची',
        img: './imgs/gucci.png',
        price: 200000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Supreme',
        npName: 'सुप्रिम',
        img: './imgs/supreme.png',
        price: 100000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Goldstar',
        npName: 'गोल्डस्टार',
        img: './imgs/goldstar.png',
        price: 1200,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  '1 aana Jagga',
        npName: '1 आना जग्गा',
        img: './imgs/kathmandu-land.jpg',
        price: 3500000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Bidya Devi Bhandari car',
        npName: 'विद्या देवी भण्डारी कार',
        img: './imgs/bidya-devi-car.png',
        price: 180000000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Water',
        npName: 'पानी',
        img: './imgs/water.png',
        price: 25,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Playstation 5',
        npName: 'प्लेस्टेशन 5',
        img: './imgs/playstation.png',
        price: 105000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Armani',
        npName: 'अरमानी ',
        img: './imgs/armani.png',
        price: 50000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Trip to Bali',
        npName: 'बाली को यात्रा',
        img: './imgs/bali.jpg',
        price: 50000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Basmati',
        npName: 'बासमती',
        img: './imgs/basmati.png',
        price: 3500,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Gautam Buddha Intl Stadium',
        npName: 'गौतम बुद्ध अन्तर्राष्ट्रिय रंगशाला',
        img: './imgs/gautam-buddha-stadium.jpg',
        price: 3000000000,
        ordered: null,
        maxOrder: 1
    },
    {
        enName:  'Dharahara',
        npName: 'धरहरा',
        img: './imgs/dharahara.png',
        price: 3080000000,
        ordered: null,
        maxOrder: 1
    },
    {
        enName:  'Dasharath rangashala',
        npName: 'दशरथ रंगशाला',
        img: './imgs/dasarath-rangashala.jpg',
        price: 2050000000,
        ordered: null,
        maxOrder: 1
    },
    {
        enName:  'Yeti Airlines Ticket',
        npName: 'यति एयरलाइन्स टिकट',
        img: './imgs/yeti-ticket.jpg',
        price: 7000,
        ordered: null,
        maxOrder: 9999
    },
    {
        enName:  'Jack Daniels',
        npName: 'ज्याक डेनियल',
        img: './imgs/jack-daniels.png',
        price: 8160,
        ordered: null,
        maxOrder: 9999
    }
]);