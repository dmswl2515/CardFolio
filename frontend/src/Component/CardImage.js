const cardImages= {
    신한카드 : {
        img: "https://d1c5n4ri2guedi.cloudfront.net/card/13/card_img/28201/13card.png",
        logo: "https://d1c5n4ri2guedi.cloudfront.net/corp/2/logo_img/33324/logo_sh.png",
        color: ""
    },
    삼성카드 : {
        img: "https://d1c5n4ri2guedi.cloudfront.net/card/51/card_img/37691/51card.png",
        logo: "https://d1c5n4ri2guedi.cloudfront.net/corp/1/logo_img/33415/logo_ss.png",
        color: ""
    },
    현대카드 : {
        img: "https://d1c5n4ri2guedi.cloudfront.net/card/2669/card_img/32807/2669card.png",
        logo: "https://d1c5n4ri2guedi.cloudfront.net/corp/7/logo_img/33328/logo_hd.png",
        color: ""
    },
    KB국민카드 : {
        id: 1,
        img: "https://d1c5n4ri2guedi.cloudfront.net/card/2553/card_img/36834/2553card.png",
        logo: "https://d1c5n4ri2guedi.cloudfront.net/corp/3/logo_img/33325/logo_kb.png",
        color: "#79684f"
    },
    우리카드 : {
        id: 2,
        img: "https://d1c5n4ri2guedi.cloudfront.net/card/2441/card_img/37123/2441card_3.png",
        logo: "https://d1c5n4ri2guedi.cloudfront.net/corp/5/logo_img/33329/logo_wr.png",
        color: "#016795"
    },
    롯데카드 : {
        id: 3,
        img: "https://d1c5n4ri2guedi.cloudfront.net/card/2261/card_img/21011/2261card.png",
        logo: "https://d1c5n4ri2guedi.cloudfront.net/corp/4/logo_img/33414/logo_lt.png",
        color: "#6B4AAF"
    },
    하나카드 : {
        id: 4,
        img: "https://d1c5n4ri2guedi.cloudfront.net/card/2657/card_img/32434/2657card.png",
        logo: "https://d1c5n4ri2guedi.cloudfront.net/corp/8/logo_img/33331/logo_hn.png",
        color: "#007C72"
    },
    NH농협카드 : {
        id: 8,
        img: "https://d1c5n4ri2guedi.cloudfront.net/card/666/card_img/21431/666card.png",
        logo: "https://d1c5n4ri2guedi.cloudfront.net/corp/9/logo_img/33330/logo_nh.png",
        color: "#1961a1"
    },
    BC카드 : {
        id: 9,
        img: "https://d1c5n4ri2guedi.cloudfront.net/card/772/card_img/22246/772card.png",
        logo: "https://d1c5n4ri2guedi.cloudfront.net/corp/32/logo_img/33332/logo_bc.png",
        color: "#bb464b"
    },
    IBK기업은행 : {
        id: 10,
        img: "https://d1c5n4ri2guedi.cloudfront.net/card/2346/card_img/32523/2346card.png",
        logo: "https://d1c5n4ri2guedi.cloudfront.net/corp/10/logo_img/33333/logo_ibk.png",
        color: "#2c70b9"
    },
    통신 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29060/tips_p-mobile.jpg"
    },
    주유차량정비 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29061/tips_p-car.jpg"
    },
    쇼핑 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29062/tips_p-shopping.jpg"
    },
    항공마일리지 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29063/tips_p-mileage.jpg"
    },
    공항라운지 : {
        img: "https://d1c5n4ri2guedi.cloudfront.net/corp/2/tips/37728/tips_p-lounge.jpg"
    },
    무실적모든가맹점 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29065/tips_p-all.jpg"
    },
    구독스트리밍 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29066/tips_p-subsc.jpg"
    },
    해외결제 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29067/tips_p-shipping.jpg"
    },
    배달앱간편결제 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29068/tips_p-delivery.jpg"
    },
    병원약국 : {
        img: "https://d1c5n4ri2guedi.cloudfront.net/corp/2/tips/38158/tips_p-medical.jpg"
    },
    공과금 : {
        img: "https://d1c5n4ri2guedi.cloudfront.net/corp/2/tips/37729/tips_p-pee.jpg"
    },
    여행바우처 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29074/tips_p-tour.jpg"
    },
    제휴PLCC : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29073/tips_p-plcc.jpg"
    },
    증권사CMA : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29072/tips_p-cma.jpg"
    },
    할인형 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29077/tips_type_01.png"
    },
    포인트형 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29078/tips_type_02.png"
    },
    마일리지형 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29079/tips_type_03.png"
    },
    조건없음 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29080/tips_month_01.png"
    },
    삼십만원이하 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29081/tips_month_02.png"
    },
    삼십만원초과 : {
        img: "https://api.card-gorilla.com:8080/storage/corp/2/tips/29082/tips_month_03.png"
    },
};

export default cardImages;