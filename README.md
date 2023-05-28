# Welcome to WhiteBase Project 
![Version](https://img.shields.io/badge/version-2.0.0-blue.svg?cacheSeconds=2592000)
#### [Title: web server UI ]

### 🏠 [웹 페이지 링크](http://localhost:3000)
### 🗺 [Gitlab 소스](https://gitlab.wb.mzcstc.com/users/sign_in)
#

## Prerequisites
*
- npm = 9.6.7
- node = 19.7.0

#

## 설치법
*
```sh
npm install

or

npm install --force
```

#

## 로컬 실행법 
*
```sh
npm run start

```

## 구조

> 폴더구조
```
.
├── .idea/
| └── .gitignore
├── public/
| ├── favicon.ico
| ├── index.html
├── src/
| ├── components/
| ├── layout/
| ├── pages/
| | ├── home/
| ├── utils/
| ├── App.js
| ├── index.js
| └── routes.js
├── .gitignore/
├── package.json
└── README.md
```

----

> src > components 폴더
```

< (styled.js) >

(전체 어플리케이션에 적용될 스타일을 설정합니다.)

```

----

> src > layout 폴더
```

< DefaultLayout.js >

(공통 템플릿 소스를 보관하는 곳)


```


----

> src > pages 폴더
```

< (home/home.mjs) >

(최초 화면 이후 나올 페이지 구성)

< (page404/page404.mjs) >

(에러 화면 렌더링 구성)

< (page500/page500.mjs) >

(에러 화면 렌더링 구성)

```

> src > utils 폴더
```

< (utils/utility.mjs) >

(형식적 validation 처리 문)

```

----

> src > 그밖의 파일들
```
- App.js : (설명이 들어갑니다.)
- index.js : (document.getElementById를 사용하여 id가 root인 HTML 요소를 찾고 ( public/index.html 
              App 구성 요소를 렌더링 하고 있다.
- routes.js : (설명이 들어갑니다.)

```

----

> public 폴더
```

< (index.html) >

(메인 프로그램인 index.js에 대응되는 것으로, HTML 템플릿 파일이다.)

```

----
