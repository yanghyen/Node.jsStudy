console.log("안녕하세요.");

console.log("숫자입니다. %d", 10);
console.log("문자열입니다. %s", '안녕');

var cat = {
  name: "나미",
  age: 13
};
console.log("자바스크립트 객체입니다. %j", cat);
// console은 전역 객체 = 어디서든 사용 가능한 객체

// 다른 사람이 만든 객체의 속성을 체크할 때
console.dir(cat);

// 시간이 얼마나 걸렸는지 체크할 때
console.time('duration_time');

var result = 0;
for (var i = 0; i < 10000; i++) {
  result += i;
}
console.timeEnd('duration_time');

// 어떤 파일의 위치 체크할 때
console.log('파일 이름: %s', __filename);
console.log('패스: %s', __dirname);