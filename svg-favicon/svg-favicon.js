// 파비콘 요소 선택하기
const favicon = document.querySelector('link[rel="icon"]')

// 다크 모드 조건 생성하기
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

// 다크 모드로 변경되면 faviconChange 함수 실행하기
mediaQuery.addEventListener('change', faviconChange)

// 다크 모드일 때 moon.svg로 라이트 모드일 때 sun-cloud.svg 이미지로 변경되는 함수 작성하기
function faviconChange(event) {
  if (event.matches) {
    favicon.setAttribute('href', 'moon.svg')
  } else {
    favicon.setAttribute('href', 'sun-cloud.svg')
  }
}