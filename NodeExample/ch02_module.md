### 모듈
- 별도의 파일로 분리된 독립 기능
- 함수를 변수에 할당할 수 있음
- 객체를 할당할 땐 **module.exports** 사용
```javascript
// main.js
var module1 = require('module1');
module1.함수이름();

//module1.js
exports.함수이름 = 함수정의;
```
