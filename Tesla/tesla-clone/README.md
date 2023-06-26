# 설치
### create-react-app
- --template
- redux

### styled-components
* styled-components version이 6로 변경되면서 npm add styled-components 불가
-> yarn을 사용하거나 npm install styled-components@latest 사용하기
- npm 고집하면 vulnerabilities 엄청 높게 설치됨

### material-ui core + icons-material
- icon 사용 위해 설치
❓react icon 쓰몈 편한데 굳이 MUI 설치해가면서 icon을 쓰는 이유가 있나?
- styled-components @latest 설치의 나비효과 발생 : 'ERESOLVE unable to resolve dependency tree'
- 현재 --forced를 함께하여 해결한 상태


에러 메시지 내용
Could not resolve dependency:
npm ERR! peer styled-components@"^5.3.1" from @mui/styled-engine-sc@5.12.0

MUI 공식 문서에서 권장하는 styled-components 버전이 5.3.1인데 현재 내가 설치한 버전이 6.0.0 버전 -> upstream dependency conflict가 발생함

### react reveal
: 리액트로 동적인 효과/animation들 쉽게 해주는 모듈

# Redux
❓왜 redux 사용해야 하는 거지?? - 무슨 장점을 위해 사용해야 하는 지 모르겠다.

- 강의가 21년 강의라 redux 사용에서 에러가 발생했었다.
    - 최근 redux를 사용하기 위해서는 index.js에서 Provider로 감싸주어야 한다.
    - 참고 : https://tobegood.tistory.com/entry/firstproject-DAY6