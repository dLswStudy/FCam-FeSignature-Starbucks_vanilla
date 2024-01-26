const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function (){
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');

// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', _.throttle(function () {
    // 페이지 스크롤 위치가 500px이 넘으면.
    if (window.scrollY > 500) {
        // Badge 요소 숨기기!
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })

        // 페이지 스크롤 위치가 500px이 넘지 않으면.
    } else {
        // Badge 요소 보이기!
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300));


/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
    // 각 요소들을 순서대로(delay) 보여지게 함!
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    })
})


/**
 * 슬라이드 요소 관리
 */
new Swiper('.notice-line .swiper', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
})
new Swiper('.promotion .swiper', {
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true, // 반복 재생 여부
    autoplay: { // 자동 재생 여부
        delay: 5000 // 5초마다 슬라이드 바뀜
    },
    pagination: { // 페이지 번호 사용 여부
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
        nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
    }
})

/**
 * Promotion 슬라이드 토글 기능
 */
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
    // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
    isHidePromotion = !isHidePromotion
    // 요소를 숨겨야 하면,
    if (isHidePromotion) {
        promotionEl.classList.add('hide')
        // 요소가 보여야 하면,
    } else {
        promotionEl.classList.remove('hide')
    }
})