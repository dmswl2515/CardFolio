<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>API 호출 테스트</title>
</head>
<body>
 <h1>안녕하세요! 제 이름은 김은지 입니다.</h1>
 
<script>
        var xhr = new XMLHttpRequest();
        var url = 'http://apis.data.go.kr/B190030/GetCardProductInfoService/getCardProductList'; // API URL
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'JhAMBD%2FrpbvFxttnO0Og5w3huZxJexP%2FLtbCQ4R%2F%2BQQPEcFSYnOlurJtMl3dNJXu5m6RMmOZOH8wAN9UXQKCFg%3D%3D'; // 서비스 키
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); // 페이지 번호
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); // 한 페이지에 출력할 데이터 수
        queryParams += '&' + encodeURIComponent('sBseDt') + '=' + encodeURIComponent('20210730'); // 시작 날짜
        queryParams += '&' + encodeURIComponent('eBseDt') + '=' + encodeURIComponent('20210730'); // 종료 날짜

        xhr.open('GET', url + queryParams); // GET 요청
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) { // 요청 완료 시
                if (this.status == 200) {
                    // 성공적으로 응답을 받았을 때
                    console.log('Response:', this.responseText); // 응답 본문 출력
                    try {
                        var parser = new DOMParser();
                        var xmlDoc = parser.parseFromString(this.responseText, "text/xml"); // XML 파싱
                        
                        // XML에서 데이터를 추출
                        var items = xmlDoc.getElementsByTagName("item");
                        for (var i = 0; i < items.length; i++) {
                            var prdNm = items[i].getElementsByTagName("prdNm")[0].textContent;
                            var prdOtl = items[i].getElementsByTagName("prdOtl")[0].textContent;
                            var anmfOtl = items[i].getElementsByTagName("anmfOtl")[0].textContent;

                            console.log('제품명: ' + prdNm);
                            console.log('제품 설명: ' + prdOtl);
                            console.log('추가 혜택: ' + anmfOtl);

                            // 화면에 출력 (예시)
                            var productInfo = document.createElement("div");
                            productInfo.innerHTML = `<strong>${prdNm}</strong><br>${prdOtl}<br><em>${anmfOtl}</em><hr>`;
                            document.body.appendChild(productInfo);
                        }
                    } catch (e) {
                        console.error('XML 파싱 오류:', e);
                    }
                } else {
                    // 실패한 경우
                    console.error('API 요청 실패: ' + this.status);
                }
            }
        };

        xhr.send(); // 요청 전송
</script>
</body>
</html>