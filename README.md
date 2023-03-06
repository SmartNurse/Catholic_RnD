# SmartNurse Front-end README.md

## 주요 패키지

- react
- typescript
- axios: api 요청
- @mui(core, icons-material, lab, x-data-grid, x-date-pickers): 컴포넌트 디자인 시스템
- @emotion(react, styled): mui 스타일 연동
- react-intl: 번역
- react-hook-form: 폼 상태 관리
- react-router-dom: 라우트 관리
- camelcase-keys: API 요청/응답 스테이크 케이스 key -> 케멀 케이스 key 변환
- date-fns: 날짜 형식
- notistack: @mui snackbar 관련
- query-string: route query 관련 툴
- react-redux: 스토어
- @reduxjs/toolkit: redux를 편하게 사용

## 폴더 구조

- src
    - apis: (axios) API 요청들 (Get, Post, Delete)
    - components: 재사용 컴포넌트
        - 컴포넌트의 크기는 가리지 않으며 3번 이상 재사용되는 컴포넌트가 있다면 components 폴더 하위에 작성
    - hooks: custom hooks
    - locale: i18n 번역
    - routes: view 컴포넌트
        - route에 표시되는 컴포넌트들이며 각 route의 컴포넌트들은 독립적으로 작성
        - 각 폴더는 해당 route안에 사용되는 컴포넌트들을 모두 포함하며 다른 route에서 재사용되는 컴포넌트가 있다면, 해당 컴포넌트는 components 폴더에 작성
        - Router는 BrowserRoute가 아닌 HashRoute를 사용하여 새로고침 시 렌더링이 깨지지 않도록 함 (참고: BrowserRoute, HashRoute차이 [https://minjoo-space.tistory.com/61](https://minjoo-space.tistory.com/61))
    - store: redux 설정
    - styles Mui Theme
    - utils: 재사용 함수

## 기록지 퍼블리싱

- `src/routes/Main/Survey/initialStates.ts`
    - 비어 있는 초기값들을 갖는 `initial기록지` 형식 이름의 Object 작성
- `src/routes/Main/Survey/type.ts`
    - `enum MENU` 에 추가할 기록지 상수 추가
    - `initial기록지` Object를 `import` 하여 해당 인터페이스의 타입을 `T기록지DefaultValues` 와 같이 선언
- `src/routes/Main/Survey/DisplaySurvey.ts`
    - 기록지 컴포넌트를 `import` 하고 `MENU.기록지` 케이스에 대한 분기문 작성
- `src/routes/Main/Survey/hooks/useDefaultValues.ts`
    - `initial기록지` 및 `해당 기록지 GET 요청 API 함수`를 `import` 하고 `MENU.기록지` 케이스에 대한 분기문 작성

## 기록지 API 연동

- `src/apis/survey/index.ts`
    - `IGetSurvey` 인터페이스를 확장하는 형태로 `IUpdate기록지명` 형식 이름의 인터페이스 작성
- `src/apis/survey/type.ts`
    - `../axios` 에 선언되어 있는 axios 인스턴스(`apiGateway`)를 활용하여 API 요청 함수 작성
- `src/routes/Main/Survey/hooks/useDefaultValues.ts`
    - convertDataToStates의 첫 번째 인자를 API에 맞춰서 수정
- `src/routes/Main/Survey/initialStates.ts`
    - API DOCS와 다르게 작성한 부분이 있을 경우 맞춰서 수정
- `src/routes/Main/Survey/index.ts`
    - initialStates 수정된 부분이 있을 경우 register 변수명 또한 맞춰서 수정
    - onSubmit 함수 API 요청 함수 포함하여 수정

## 빌드 및 배포

- **초기 1회 AWS CLI 설정하기**
    - NCP
        - 참고: [https://cli-gov.ncloud-docs.com/docs/guide-objectstorage](https://cli-gov.ncloud-docs.com/docs/guide-objectstorage)
        - 메인 계정(서브 계정 X)의 `마이페이지 > 계정관리 > 인증키 관리` ([https://www.ncloud.com/mypage/manage/authkey](https://www.ncloud.com/mypage/manage/authkey))에 있는 API 인증키로 aws cli 설정
    - AWS
        - 참고: [https://inpa.tistory.com/entry/AWS-📚-AWS-CLI-설치-사용법-쉽고-빠르게#cli_인증_설정](https://inpa.tistory.com/entry/AWS-%F0%9F%93%9A-AWS-CLI-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%89%BD%EA%B3%A0-%EB%B9%A0%EB%A5%B4%EA%B2%8C#cli_%EC%9D%B8%EC%A6%9D_%EC%84%A4%EC%A0%95)
        - `aws configure --profile 원하는이름` 과 같이 aws cli 설정 (다중 계정을 구축하여 프리 버전과 다른 프로필로 배포하기 위함)
        - `package.json` 의 `publish:dev` 스크립트 마지막 부분에 `--profile=원하는이름` 부분에 이름 작성
- **환경변수 파일 작성하기**
    - 최상단에 `.env.development` 파일을 버전 별로 알맞게 (JANDI 프론트엔드 토픽 참고) 작성한 후 빌드
- **배포 경로 확인**
    - `package.json` 파일에 `publish:dev` 스크립트 맨 뒷부분에 `s3://버킷이름` 부분에 버킷이름이 정확하게 입력되어 있는지 체크
- **터미널에 빌드 및 배포 스크립트 입력**
    - `yarn add react-script` (추가적인 개발을 진행하여 이미 react-script가 생성되어 있는 경우 생략 가능)
    - `yarn publish:dev`

## Github 다른 레포지토리의 커밋 사항 합치기

- 참고: [https://velog.io/@wnduq8/다른-repository-commit-합치기](https://velog.io/@wnduq8/%EB%8B%A4%EB%A5%B8-repository-commit-%ED%95%A9%EC%B9%98%EA%B8%B0)
    - `git remote add 레포이름 레포경로`
    - `git fetch 레포이름 —no-tags`
    - `git merge —allow-unrelated-histories 레포이름/브랜치명`
        - 또는 특정 커밋만 합치고 싶을 경우 `git cherry-pick 커밋ID`
    - `git push origin 브랜치명`
