"use strict";

const quotes = [
  {
    quote: "내일은 우리가 어제로부터 무엇인가 배웠기를 바란다.",
    author: "- 존 웨인",
  },
  {
    quote:
      "목적없는 공부는 기억에 해가 될 뿐이며, 머리속에 들어온 어떤 것도 간직하지 못한다.",
    author: "- 레오나르도 다빈치",
  },
  {
    quote:
      "우리가 해야할 일은 끊임없이 호기심을 갖고 새로운 생각을 시험해보고 새로운 인상을 받는 것이다.",
    author: "- 월터 페이터",
  },
  {
    quote:
      "아이들이 답이 있는 질문을 하기 시작하면 그들이 성장하고 있음을 알 수 있다.",
    author: "- 존 J. 플롬프",
  },
  {
    quote: "내가 가진 감각들이 아니라, 그것으로 하는 무엇인가가 나의 세계다.",
    author: "- 헬렌 켈러",
  },
  {
    quote:
      "주간 고속도로 덕택에, 이제 대륙을 횡단하면서 아무 것도 볼 수 없는 일이 가능해졌다.",
    author: "- 찰스 쿠럴트",
  },
  {
    quote: "삶은 즐겁다. 죽음은 평화롭다. 골칫거리는 바로 그 중간과정이다.",
    author: "- 아이작 아시모프",
  },
  {
    quote: "반성하지 않는 삶은 살 가치가 없다.",
    author: "- 소크라테스",
  },
  {
    quote: "영원한 젊음의 비밀은 발육이 정지되는 것이다.",
    author: "- 앨리스 루즈벨트 롱워스",
  },
  {
    quote: "20대에는 의지, 30대에는 기지, 40대에는 판단이 지배한다.",
    author: "- 벤자민 프랭클린",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
