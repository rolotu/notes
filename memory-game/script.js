const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
// 锁住面板
let lockBoard = false;
// 第一张牌，第二张牌
let firstCard, secondCard;

function flipCard() {
  if(lockBoard) return;
  //不能重复点击
  if (this === firstCard) return;

  this.classList.add('flip');

  if(!hasFlippedCard) {
    // 第一次翻牌
    hasFlippedCard = true;
    firstCard = this;
    
    return;
  }

  // 第二次翻牌
  secondCard = this;

  checkForMatch();
}

// 判断牌面是否一致
function checkForMatch() {
  let isMatch = firstCard.dataset.framework == secondCard.dataset.framework;
  isMatch? disableCards() : unflipCards();
}

// 牌面一致
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}
// 牌面不一致
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

// 重置面板
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function(){
  cards.forEach(el => {
    let randomPos = Math.floor(Math.random() * 12);
    el.style.order = randomPos;
  })
})()

cards.forEach(el => {el.addEventListener('click', flipCard)});