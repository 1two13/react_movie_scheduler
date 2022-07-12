## 리액트로 만든 영화를 좋아하는 사람들을 위한 무비 스케쥴러입니다.

[🙇🏻‍♀️ 노션 링크 바로 가기](https://www.notion.so/1two13/react-df093c30af1d460ca6bb7e3b5d6c1230)

<br/>
💡 파일 구조

    .
    └── /src
      └── /api
          │  └── /comingCharApi.js
          │  └── /movieChartApi.js
          │  └── /posterApi.js
          │
          └── /components
              └── /ComingChart.js
              └── /MovieChart.js
              └── /Poster.js
              └── /Top.js


<br/>
💡 참고 자료

> 아이디어 참고

- [https://movie.daum.net/premovie/theater?flag=C](https://movie.daum.net/premovie/theater?flag=C)
- [http://www.cgv.co.kr/movies/](http://www.cgv.co.kr/movies/)

> API 사용

- 영화 진흥 위원회 [https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do](https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do)
  - 박스 오피스 및 개봉 예정작을 가져오는데 사용했습니다.
- TMDB [https://developers.themoviedb.org/3/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)
  - 영화 포스터를 가져오는데 사용했습니다.

> etc

- [https://create-react-app.dev/docs/adding-custom-environment-variables/](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [https://ko.reactjs.org/docs/faq-structure.html](https://ko.reactjs.org/docs/faq-structure.html)
- [https://sezzled.tistory.com/173](https://sezzled.tistory.com/173)
- [https://reactjs.org/docs/strict-mode.html](https://reactjs.org/docs/strict-mode.html)
- [https://react.vlpt.us/basic/13-array-insert.html](https://react.vlpt.us/basic/13-array-insert.html)
- [https://www.taniarascia.com/react-architecture-directory-structure/](https://www.taniarascia.com/react-architecture-directory-structure/)
