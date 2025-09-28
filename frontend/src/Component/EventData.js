const EventData = [
    {
        id: 1,
        company: "신한카드",
        provider: "캐나다 온·오프라인 가맹점 이용 시",
        benefit: "최대 1만원 할인",
        period: "2025-09-01 ~ 2025-10-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1108/logo_img/44435/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%EC%A0%84-11.29.05.png",
        url: "https://www.samsungcard.com/personal/event/ing/UHPPBE1403M0.jsp?cms_id=3708350"
    },
    {
        id: 2,
        company: "삼성카드",
        provider: "최대 30% 현장할인",
        benefit: "반얀트리/앙사나/카시아",
        period: "2025-08-01 ~ 2026-08-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1038/logo_img/44027/P_thumb_572x550.png",
        url: "https://www.samsungcard.com/personal/services/link/UHPPBE0406M0.jsp"
    },
    {
        id: 3,
        company: "현대카드",
        provider: "신광 미츠코시 백화점 '관광객 VIP 카드' 제공",
        benefit: "대만 이벤트Ⅰ",
        period: "2025-09-01 ~ 2025-12-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1092/logo_img/44333/PCLogo_skm_SQ_560_1756341498045.png",
        url: "https://www.hyundaicard.com/cpb/ev/CPBEV0101_06.hc?bnftWebEvntCd=RD9830&searchWord="
    },
    {
        id: 4,
        company: "KB국민카드",
        provider: "홍콩 왕복항공권 + 호텔숙박권",
        benefit: "트래블러스 체크 홍콩 출시 기념",
        period: "2024-12-01 ~ 2025-03-16",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1141/logo_img/44603/250826_travelHK_olive.png",
        url: "https://card.kbcard.com/BON/DVIEW/HBBMCXCRVNEC0001?mainCC=a&eventNum=287017"
    },
    {
        id: 5,
        company: "우리카드",
        provider: "5천원 캐시백 + 인기 대형마트 30% 캐시백",
        benefit: "미국 결제 혜택",
        period: "2025-09-01 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1129/logo_img/44465/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%ED%9B%84-4.35.46.png",
        url: "https://pc.wooricard.com/dcpc/yh1/bnf/bnf02/prgevnt/H1BNF202S20.do?evntSrno=30004655"
    },
    {
        id: 6,
        company: "롯데카드",
        provider: "JCB",
        benefit: "웹투어 댕댕이 동반 숙박상품 5% 즉시 할인",
        period: "2025-05-13 ~ 2026-05-12",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1113/logo_img/44445/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%EC%A0%84-11.55.36.png",
        url: "https://www.lottecard.co.kr/app/LPBNFDA_V300.lc?evnBultSeq=8215&evnCtgSeq=4&bigTabGubun=2"
    },
    {
        id: 7,
        company: "NH농협카드",
        provider: "호텔스닷컴 최대 10% 할인",
        benefit: "NH농협 카드 혜택",
        period: "2025-01-01 ~ 2025-12-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1124/logo_img/44460/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%ED%9B%84-4.04.32.png",
        url: "https://card.nonghyup.com/servlet/IpCb2002R.act?EVT_CRT_SQNO=4120"
    },
    {
        id: 8,
        company: "NH농협카드",
        provider: "KTX 최대 18% 할인 혜택",
        benefit: "NH농협 카드 혜택",
        period: "2025-01-01 ~ 2025-12-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1122/logo_img/44458/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%ED%9B%84-4.01.55.png",
        url: "https://card.nonghyup.com/servlet/IpCb2002R.act?EVT_CRT_SQNO=5111"
    },
    {
        id: 10,
        company: "IBK기업은행",
        provider: "최대 10% 즉시할인",
        benefit: "하나투어 항공권",
        period: "2025-04-01 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/797/logo_img/41499/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2025-04-07-%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE-6.37.11.png",
        url: "https://www.ibk.co.kr/event/ingDetailEvent.ibk?evnt_srno=103470&evnt_dscd=H&pageId=CM01060100"
    },
    {
        id: 11,
        company: "신한카드",
        provider: "5성급 인스파이어 엔터테인먼트 리조트 혜택",
        benefit: "하나투어 항공권",
        period: "2025-09-01 ~ 2025-10-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1106/logo_img/44436/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%EC%A0%84-11.30.28.png",
        url: "https://www.shinhancard.com/pconts/html/benefit/event/1235470_2239.html"
    },
    {
        id: 12,
        company: "삼성카드",
        provider: "현장할인 및 선물증정",
        benefit: "시그니엘 서울 더 라운지",
        period: "2025-08-01 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1039/logo_img/44028/P_thumb_286x275_B_v1.png",
        url: "https://www.samsungcard.com/personal/event/ing/UHPPBE1403M0.jsp?cms_id=3707580"
    },
    {
        id: 13,
        company: "현대카드",
        provider: "에슬라이트 최대 10% 할인",
        benefit: "대만 이벤트Ⅱ",
        period: "2025-09-01 ~ 2025-12-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1091/logo_img/44332/PCLogo_eslite_SQ_560_1756341256423.png",
        url: "https://www.hyundaicard.com/cpb/ev/CPBEV0101_06.hc?bnftWebEvntCd=BGX829&searchWord="
    },
    {
        id: 14,
        company: "KB국민카드",
        provider: "10% 즉시 할인",
        benefit: "유니온페이 해외",
        period: "2025-09-01 ~ 2025-11-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1098/logo_img/44339/250828_Unionpay_purple.png",
        url: "https://card.kbcard.com/BON/DVIEW/HBBMCXCRVNEC0001?mainCC=a&eventNum=287087"
    },
    {
        id: 15,
        company: "우리카드",
        provider: "해외 결제 시 네이버페이 상품권 최대 5만원 지급",
        benefit: "위비트래블 체크카드",
        period: "2025-09-01 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1128/logo_img/44464/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%ED%9B%84-4.32.55.png",
        url: "https://pc.wooricard.com/dcpc/yh1/bnf/bnf02/prgevnt/H1BNF202S20.do?evntSrno=30004682"
    },
    {
        id: 16,
        company: "롯데카드",
        provider: "일본, 오사카 혜택 모음",
        benefit: "JCB브랜드 카드 혜택",
        period: "2025-07-01 ~ 2025-10-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1112/logo_img/44444/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%EC%A0%84-11.51.33.png",
        url: "https://www.lottecard.co.kr/app/LPBNFDA_V300.lc?evnBultSeq=8192&evnCtgSeq=4&bigTabGubun=2"
    },
    {
        id: 17,
        company: "신한카드",
        provider: "신한카드 결제 혜택",
        benefit: "아고다  최대 10% 즉시 할인",
        period: "2025-07-11 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1111/logo_img/44443/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%EC%A0%84-11.45.47.png",
        url: "https://www.shinhancard.com/pconts/html/benefit/event/1234715_2239.html"
    },
    {
        id: 18,
        company: "신한카드",
        provider: "그랜드 인터컨티넨탈 서울",
        benefit: "객실 & 히노츠키 프로모션",
        period: "2025-09-03 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1105/logo_img/44437/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%EC%A0%84-11.30.20.png",
        url: "https://www.shinhancard.com/pconts/html/benefit/event/1235441_2239.html"
    },
    {
        id: 19,
        company: "삼성카드",
        provider: "특급호텔 특급혜택",
        benefit: "HOTEL WEEK",
        period: "2025-08-01 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1105/logo_img/44437/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%EC%A0%84-11.30.20.png",
        url: "https://www.samsungcard.com/personal/event/ing/UHPPBE1403M0.jsp?cms_id=3707580"
    },
    {
        id: 20,
        company: "삼성카드",
        provider: "최대 15만원 할인",
        benefit: "면세점에서 삼성카드 쓰면",
        period: "2025-09-11 ~ 2025-09-20",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1102/logo_img/44401/P_thumb_286x275.png",
        url: "https://www.samsungcard.com/personal/event/ing/UHPPBE1403M0.jsp?cms_id=3715644"
    },
    {
        id: 21,
        company: "삼성카드",
        provider: "최대 3만원 상품권",
        benefit: "자동차보험 가입 시",
        period: "2025-04-01 ~ 2025-12-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/780/logo_img/41482/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2025-04-07-%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE-5.59.53.png",
        url: "https://www.samsungcard.com/personal/event/ing/UHPPBE1403M0.jsp?cms_id=3692359"
    },
    {
        id: 22,
        company: "현대카드",
        provider: "미츠코시 백화점 5% 할인 쿠폰",
        benefit: "일본 이벤트Ⅱ",
        period: "2025-09-01 ~ 2026-03-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1093/logo_img/44334/PCLogo_mitsukoshi_SQ_560_1756370619525.png",
        url: "https://www.hyundaicard.com/cpb/ev/CPBEV0101_06.hc?bnftWebEvntCd=8LG836&searchWord="
    },
    {
        id: 23,
        company: "현대카드",
        provider: "'Tap to Pay' 결제 혜택",
        benefit: "베트남 스타벅스",
        period: "2025-08-04 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1041/logo_img/44030/PC-%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3-%E1%84%85%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3-%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5-%E1%84%83%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A9%E1%86%A8_1754032911751.png",
        url: "https://www.hyundaicard.com/cpb/ev/CPBEV0101_06.hc?bnftWebEvntCd=C38816&searchWord="
    },
    {
        id: 24,
        company: "현대카드",
        provider: "최대 5만동 결제 혜택",
        benefit: "베트남 Grab",
        period: "2025-08-04 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1042/logo_img/44031/PC-%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3-%E1%84%85%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3-%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5-%E1%84%83%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A9%E1%86%A8_1754032586941.png",
        url: "https://www.hyundaicard.com/cpb/ev/CPBEV0101_06.hc?bnftWebEvntCd=XXW815&searchWord="
    },
    {
        id: 25,
        company: "현대카드",
        provider: "호텔 최대 10% 할인",
        benefit: "아고다",
        period: "2025-07-01 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/995/logo_img/43618/agoda_pcmo_1744695418785.png",
        url: "https://www.hyundaicard.com/cpb/ev/CPBEV0101_06.hc?bnftWebEvntCd=3OX751&searchWord="
    },
    {
        id: 26,
        company: "KB국민카드",
        provider: "최대 10% 혜택",
        benefit: "돈기호테",
        period: "2025-09-01 ~ 2025-11-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1099/logo_img/44340/250825_Donquijote_red.png",
        url: "https://card.kbcard.com/BON/DVIEW/HBBMCXCRVNEC0001?mainCC=a&eventNum=287075"
    },
    {
        id: 27,
        company: "KB국민카드",
        provider: "최대 10만엔",
        benefit: "해외이용 챌린지",
        period: "2025-09-01 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1100/logo_img/44341/250808_JPY_blue.png",
        url: "https://card.kbcard.com/BON/DVIEW/HBBMCXCRVNEC0001?mainCC=a&eventNum=287059"
    },
    {
        id: 28,
        company: "우리카드",
        provider: "10% 즉시 할인",
        benefit: "호텔스닷컴",
        period: "2025-01-10 ~ 2025-12-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/353/logo_img/39403/afdf2b87-a42e-401b-b91c-41796c9aaf69.png",
        url: "https://pc.wooricard.com/dcpc/yh1/bnf/bnf02/prgevnt/H1BNF202S01.do?evntSrno=30002910"
    },
    {
        id: 29,
        company: "우리카드",
        provider: "최대 8% 할인",
        benefit: "트립닷컴",
        period: "2025-01-06 ~ 2025-12-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/361/logo_img/39405/d18a972c-061b-48d8-ba3f-b958c1876643.png",
        url: "https://pc.wooricard.com/dcpc/yh1/bnf/bnf02/prgevnt/H1BNF202S01.do?evntSrno=30003101"
    },
    {
        id: 30,
        company: "롯데카드",
        provider: "무이자/부분무이자 할부 혜택",
        benefit: "여행사, 항공 업종",
        period: "2025-08-01 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1073/logo_img/44082/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-08-05-%EC%98%A4%ED%9B%84-12.28.12.png",
        url: "https://www.lottecard.co.kr/app/LPBNFDA_V300.lc?evnBultSeq=8296"
    },
    {
        id: 31,
        company: "롯데카드",
        provider: "5~15% 할인 혜택",
        benefit: "롯데, 신라아이파크 면세점",
        period: "2025-07-01 ~ 2025-12-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1003/logo_img/43626/PC_BN_20241231155731_4621_%EB%A1%AF%EB%8D%B0%2C%EC%8B%A0%EB%9D%BC%EC%95%84%EC%9D%B4%ED%8C%8C%ED%81%AC%EB%A9%B4%EC%84%B8%EC%A0%90_pc_310x200.png",
        url: "https://www.lottecard.co.kr/app/LPBNFDA_V300.lc?evnBultSeq=7638&evnCtgSeq=9999&bigTabGubun=2"
    },
    {
        id: 32,
        company: "롯데카드",
        provider: "40~50% 할인 혜택",
        benefit: "롯데월드, 경주월드, 대전오월드 이용권",
        period: "2025-07-01 ~ 2025-12-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1000/logo_img/43623/PC_BN_20241231155732_7633_4611_%EB%86%80%EC%9D%B4%EA%B3%B5%EC%9B%90_pc_310x200.png",
        url: "https://www.lottecard.co.kr/app/LPBNFDA_V300.lc?evnBultSeq=7633&evnCtgSeq=9999&bigTabGubun=2"
    },
    {
        id: 33,
        company: "NH농협카드",
        provider: "9월 해외 프로모션",
        benefit: "농협카드",
        period: "2025-09-01 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1123/logo_img/44459/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%ED%9B%84-4.03.49.png",
        url: "https://card.nonghyup.com/servlet/IpCb2002R.act?EVT_CRT_SQNO=4455"
    },
    {
        id: 34,
        company: "NH농협카드",
        provider: "아고다 전세계 호텔 최대 10% 할인",
        benefit: "NH농협 해외겸용 카드 혜택",
        period: "2025-07-04 ~ 2025-12-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1120/logo_img/44456/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2025-09-12-%EC%98%A4%ED%9B%84-3.57.43.png",
        url: "https://card.nonghyup.com/servlet/IpCb2002R.act?EVT_CRT_SQNO=4123"
    },
    {
        id: 34,
        company: "IBK기업은행",
        provider: "아고다 호텔 예약 15% 할인",
        benefit: "IBK유니온페이카드",
        period: "2025-05-19 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/1021/logo_img/43650/IBK%EC%9C%A0%EB%8B%88%EC%98%A8%ED%8E%98%EC%9D%B4%EC%B9%B4%EB%93%9C.png",
        url: "https://www.ibk.co.kr/event/ingDetailEvent.ibk?evnt_srno=103470&evnt_dscd=H&pageId=CM01060100"
    },
];

export default EventData;