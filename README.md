# Wendy-WebJob
소규모 게임 개발팀을 위한 게임 서버 [Wendy](https://github.com/totuworld/Wendy)용 WebJob

## 소개
Azure 웹앱을 활용해 운영되는 Wendy에서 Google의 권한을 획득한 경우 일정 주기로 업데이트가 필요합니다. 업데이트를 주기적으로 시도하기 위해 제작된 WebJob입니다.

## 사용방법

yarn 패키지 매니저를 통해 설치를 진행합니다. yarn이 이미 설치되어있다면 첫번째 명령은 넘어가도 좋습니다.

```bash
$ npm install -g yarn
$ yarn install
```

server.js 파일에서 다음 3가지 부분을 반드시 수정합니다.

```javascript
let email = '';
let password = '';
let hostname = '';
```

수정이 완료되면 전체 폴더를 압축하여 Azure 웹앱의 WebJob으로 등록합니다.