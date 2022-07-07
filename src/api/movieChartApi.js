function movieChartApi() {
  const key = process.env.REACT_APP_MOVIE_KEY;

  // 어제 날짜 구하기
  let today = new Date();
  let yesterday = new Date(today.setDate(today.getDate() - 1));
  let yesterdayY = yesterday.getFullYear();
  let yesterdayM = yesterday.getMonth() + 1;
  let yesterdayD = yesterday.getDate();
  // 만약 yesterdayM가 1자리일 경우, 앞에 0 붙이기
  if (String(yesterdayM).length === 1) yesterdayM = "0" + yesterdayM;
  // 만약 yesterdayD가 1자리일 경우, 앞에 0 붙이기
  if (String(yesterdayD).length === 1) yesterdayD = "0" + yesterdayD;
  yesterday = `${yesterdayY}${yesterdayM}${yesterdayD}`;

  // 일별 박스오피스 API
  let dayApi = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${yesterday}&itemPerPage=9`;

  return dayApi;
}

export default movieChartApi;
