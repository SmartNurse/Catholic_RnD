# 빌드

- 참고: https://cli-gov.ncloud-docs.com/docs/guide-objectstorage

1. [1회 설정] 메인 계정의 `마이페이지 > 계정관리 > 인증키 관리`에 있는 API 인증키로 aws cli 설정
   - https://www.ncloud.com/mypage/manage/authkey
2. 빌드
   - Dev: `yarn publish:dev`
   - Real: `yarn publish`

# 인수인계

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
  - hooks: custom hooks
  - locale: i18n 번역
  - routes: view 컴포넌트
  - store: redux 설정
  - styles Mui Theme
  - utils: 재사용 함수

## components 설명

컴포넌트의 크기는 가리지 않으며 3번 이상 **재사용**되는 컴포넌트가 있다면 components 폴더 하위에 작성해주시면 됩니다

## routes

route에 표시되는 컴포넌트들이며 각 route의 컴포넌트들은 독립적으로 작성됩니다.
각 폴더는 해당 route안에 사용되는 컴포넌트들을 모두 포함하며 다른 route에서 재사용되는 컴포넌트가 있다면,
해당 컴포넌트는 **components** 폴더에 작성합니다.

Router는 BrowserRoute가 아닌 HashRoute를 사용하여 새로고침 시 렌더링이 깨지지 않도록 함

- BrowserRoute, HashRoute차이: https://minjoo-space.tistory.com/61
