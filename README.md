# Momentum-todo

## Process

1. 전략목표 깃에다가 셋팅, scss 셋팅
2. 오전 30분, 오후 30분 ( 오전 루카스, 오후 멀린 )
3. task를 최대한 잘게 쪼개고, 순서를 정해야 한다.

- atomic, scss, 엔자임, 컴포넌트 내 그냥 분기 (시즌 1)
- atomic, css-Modules, 엔자임, className 라이브러리 (시즌 2)
- atomic, styled, test-library, (시즌 3)

4. 시즌 1 부터 완성 시키고 시즌 1을 시즌 2, 3으로 변경 해본다.
5. 첫 코딩은 test 코드, 그다음 로직 코드

## Atomic Rules

- atoms 폴더에는 html tag가 들어간다. (ex, input, label, button)
- atoms 이 모여서 molecules가 된다. (searchBox)
- molecules 가 모여서 organisms 이 된다.
- organisms 이하 컴포넌트에는 page layout style을 구성 하는 position & float & margin & padding 을 가지지 않는다.
- template 컴포넌트에서 page layout style을 갖는다.
- template 컴포넌트는 orgamisns 또는 molecules 의 배치를 할 수 있도록 틀을 만든다. (ex. 컴퓨터의 메인보드)
- page 컴포넌트는 orgamisns 또는 molecules 컴포넌트를 가져와서 template 컴포넌트와 조합하는 기능을 한다.

## Task

- [x] scss 셋팅
- [x] atomic 폴더구성
- [ ] template 구성
- [ ] 헤더 컴포넌트 시간표시
- [ ] 배경화면 랜덤하게 표시하기

---

- [ ] 첫 진입시 name 입력받을 수 있음 → localstorge를 사용해 저장
- [ ] 시간에 따른 인사 변경하기 ( Good morning , Good afternoon, ... .)
- [ ] 명언 랜덤하게 표시하기
- [ ] 오늘의 주 할일 1개 입력, 저장, 수정, 삭제 기능
- [ ] Todo 리스트 입력, 저장, 수정, 삭제 기능
- [ ] 내 위치 날씨 찾기
- [ ] 내 위치 검색하기
- [ ] 위치 날씨 및 5일치 날씨 표시하기
- [ ] 검색창 달기 ( default. google )
- [ ] 검색 엔진 선택 할 수 있게 하기
- [ ] 웹 링크 추가 하기
- [ ] 툴팁 기능

##eslint
# momentum-straegy-atomic
