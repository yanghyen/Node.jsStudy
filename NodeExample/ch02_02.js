// argv 자바스크립트 파일을 노드로 실행할 때 2개의 파라미터로 실행됨(argv 파라미터 수: 2)
// 전역 객체 process
console.log('argv 속성의 파라미터 수: ' + process.argv.length);
console.dir(process.argv);

process.argv.forEach(function(item, index) {
  console.log(index + ':' + item);
});