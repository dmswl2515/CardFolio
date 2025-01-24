const EventData = [
    {
        id: 1,
        company: "신한카드",
        provider: "티웨이 항공",
        benefit: "최대 1만원 할인",
        period: "2024-07-01 ~ 2025-06-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/319/logo_img/38312/EID319.jpg",
        url: "https://www.shinhancard.com/pconts/html/benefit/event/1227931_2239.html"
    },
    {
        id: 2,
        company: "삼성카드",
        provider: "파리바게뜨",
        benefit: "1,500원 할인",
        period: "2025-01-01 ~ 2025-01-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/495/logo_img/38875/EID495.png",
        url: "https://www.samsungcard.com/personal/services/link/UHPPBE0406M0.jsp"
    },
    {
        id: 3,
        company: "현대카드",
        provider: "Amex",
        benefit: "카타르항공권 최대 10% 할인",
        period: "2024-12-01 ~ 2025-03-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/341/logo_img/38339/EID336.png",
        url: "https://www.hyundaicard.com/cpb/ev/CPBEV0101_06.hc?bnftWebEvntCd=4J7667&searchWord="
    },
    {
        id: 4,
        company: "KB국민카드",
        provider: "레고랜드",
        benefit: "33% 할인",
        period: "2024-12-01 ~ 2025-03-16",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/366/logo_img/38379/EID366.png",
        url: "https://card.kbcard.com/BON/DVIEW/HBBMCXCRVNEC0001?mainCC=a&eventNum=284642"
    },
    {
        id: 5,
        company: "우리카드",
        provider: "중국,일본,베트남",
        benefit: "11% 즉시 할인",
        period: "2024-12-11 ~ 2025-03-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/489/logo_img/38865/EID489.png",
        url: "https://pc.wooricard.com/dcpc/yh1/bnf/bnf02/prgevnt/H1BNF202S01.do?evntSrno=30003718"
    },
    {
        id: 6,
        company: "롯데카드",
        provider: "JCB",
        benefit: "훗카이도 여행 혜택",
        period: "2024-10-01 ~ 2025-03-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/338/logo_img/38336/JCB.png",
        url: "https://www.lottecard.co.kr/app/LPBNFDA_V300.lc?evnBultSeq=8083&evnCtgSeq=9999&bigTabGubun=2"
    },
    {
        id: 7,
        company: "하나카드",
        provider: "대형마트",
        benefit: "최대 50% 할인",
        period: "2024-12-10 ~ 2025-01-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/350/logo_img/38348/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2024-12-06-%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE-6.13.25.png",
        url: "https://www.hanacard.co.kr/OPP35000001D.web?schID=ncd&mID=OPP35000001D&EVN_SEQ=8393"
    },
    {
        id: 8,
        company: "NH농협카드",
        provider: "한국잡월드",
        benefit: "최대 44% 할인",
        period: "2025-01-01 ~ 2025-02-28",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/523/logo_img/38917/4884_thum.png",
        url: "https://card.nonghyup.com/servlet/IpCb2002R.act?EVT_CRT_SQNO=5057"
    },
    {
        id: 9,
        company: "BC카드",
        provider: "",
        benefit: "이벤트 준비중",
        period: "2025-01-01 ~ 2025-01-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/448/logo_img/38838/image-%281%29.png",
        url: ""
    },
    {
        id: 10,
        company: "IBK기업은행",
        provider: "IBK기업은행 카드앱 출시",
        benefit: "최대 3만 포인트 적립",
        period: "2024-12-26 ~ 2025-06-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/528/logo_img/38922/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2025-01-02-%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE-12.36.50.png",
        url: "https://www.ibk.co.kr/event/ingDetailEvent.ibk?evnt_srno=103437&evnt_dscd=H&pageId=CM01060100"
    },
    {
        id: 11,
        company: "신한카드",
        provider: "홍콩 스타벅스",
        benefit: "45HKD 할인",
        period: "2024-12-01 ~ 2025-05-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/485/logo_img/38861/EID485.jpg",
        url: "https://www.shinhancard.com/pconts/html/benefit/event/1231026_2239.html"
    },
    {
        id: 12,
        company: "삼성카드",
        provider: "할리스",
        benefit: "2,000원 할인",
        period: "2025-01-01 ~ 2025-01-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/498/logo_img/38877/EID496.png",
        url: "https://www.samsungcard.com/personal/services/link/UHPPBE0406M0.jsp"
    },
    {
        id: 13,
        company: "현대카드",
        provider: "블루밍데일스",
        benefit: "최대 15% 즉시 할인",
        period: "2024-12-01 ~ 2025-02-28",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/345/logo_img/38343/EID337.png",
        url: "https://www.hyundaicard.com/cpb/ev/CPBEV0101_06.hc?bnftWebEvntCd=L19626&searchWord="
    },
    {
        id: 14,
        company: "KB국민카드",
        provider: "Visa카드",
        benefit: "괌 할인",
        period: "2024-12-01 ~ 2025-02-28",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/367/logo_img/38380/EID367.png",
        url: "https://card.kbcard.com/BON/DVIEW/HBBMCXCRVNEC0001?mainCC=a&eventNum=284657"
    },
    {
        id: 15,
        company: "우리카드",
        provider: "L7호텔, 롯데시티호텔",
        benefit: "할인",
        period: "2025-01-01 ~ 2025-03-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/530/logo_img/38924/EID517.png",
        url: "https://pc.wooricard.com/dcpc/yh1/bnf/bnf02/prgevnt/H1BNF202S01.do?evntSrno=30003768"
    },
    {
        id: 16,
        company: "롯데카드",
        provider: "롯데백화점",
        benefit: "5% 할인 쿠폰 혜택",
        period: "2024-10-01 ~ 2025-09-30",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/346/logo_img/38344/%E1%84%85%E1%85%A9%E1%86%BA%E1%84%83%E1%85%A6%E1%84%87%E1%85%A2%E1%86%A8%E1%84%92%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%B7.png",
        url: "https://www.lottecard.co.kr/app/LPBNFDA_V300.lc?evnBultSeq=7642&evnCtgSeq=9999&bigTabGubun=2"
    },
    {
        id: 17,
        company: "신한카드",
        provider: "파파존스",
        benefit: "35% 할인",
        period: "2025-01-01 ~ 2025-12-31",
        img: "https://d1c5n4ri2guedi.cloudfront.net/event/514/logo_img/38902/EID514.jpg",
        url: "https://www.shinhancard.com/pconts/html/benefit/event/1231308_2239.html"
    },

];

export default EventData;