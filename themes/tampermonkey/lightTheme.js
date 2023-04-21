// ==UserScript==
// @name         Blacket Light Theme
// @namespace    https://github.com/BlacketWare/v2
// @version      1.2.1
// @description  An eye-ruining light theme for Blacket. This was the theme used on April Fools!
// @author       BlacketWare
// @match        https://blacket.org/*
// @icon         https://avatars.githubusercontent.com/u/107235566?s=200&v=4
// @require      https://code.jquery.com/jquery-3.6.4.min.js
// @grant        none
// ==/UserScript==

$("head").append(`<style>

.styles__sidebar___1XqWi-camelCase,
.styles__left___9beun-camelCase,
.styles__postsContainer___39_IQ-camelCase,
.styles__middleWrapper___hjUyY-camelCase,
.styles__header___22Ne2-camelCase,
.styles__container___2VzTy-camelCase,
.styles__input___2XTSp-camelCase,
.styles__editHeaderContainer___2G1ji-camelCase,
.styles__container___1BPm9-camelCase {
  background-color: #dcd9d9;
}

.styles__background___2J-JA-camelCase,
.styles__background___2J-JA-camelCase,
.styles__blookGridContainer___AK47P-camelCase {
  background-color: #b5b5b5;
}

.styles__headerBadges___ffKa4-camelCase,
.styles__statsContainer___QnrRB-camelCase,
.styles__profileContainer___CSuIE-camelCase,
.styles__tokenBalance___1FHgT-camelCase,
.styles__infoContainer___2uI-S-camelCase,
.styles__header___2O21B-camelCase,
.styles__cardContainer___NGmjp-camelCase,
.styles__plan___1OEy4-camelCase,
.styles__perkContainer___2rw2I-camelCase,
.styles__headerSide___1r1-b-camelCase,
.styles__signUpButton___3_ch3-camelCase,
.styles__loginButton___1e3jI-camelCase,
.styles__chatEmojiButton___8RFa2-camelCase,
.styles__button___2hNZo-camelCase,
.styles__tradingContainer___B1ABS-camelCase,
.styles__otherTokenAmount___SEGGS-camelCase,
.styles__myTokenAmount___ANKHA-camelCase,
.styles__horizontalBlookGridLine___4SAvz-camelCase,
.styles__verticalBlookGridLine___rQWaZ-camelCase,
.styles__profileDropdownMenu___2jUAA-camelCase,
.styles__profileDropdownOption___ljZXD-camelCase,
.styles__chatRooms___o5ASb-camelCase,
.styles__chatCurrentRoom___MCaV4-camelCase,
.styles__instantButton___2ezEk-camelCase,
.styles__tokenContainer___3yBv--camelCase {
  background-color: #9d9d9d;
}

.styles__button___2hNZo-camelCase {
  color: #3a3a3a;
}

.styles__pageButton___1wFuu-camelCase,
.styles__bottomIcon___3Fswk-camelCase,
.styles__containerHeaderInside___2omQm-camelCase,
.styles__statNum___5RYSd-camelCase,
.styles__shadow___3GMdH-camelCase {
  color: #5f5a5a;
}

.styles__statContainer___QKuOF-camelCase,
.styles__containerHeaderInside___2omQm-camelCase,
.styles__containerHeader___3xghM-camelCase,
.styles__containerHeaderRight___3xghM-camelCase {
  background-color: #d5d4d4;
}

#chatBox,
.styles__chatInputContainer___gkR4A-camelCase  {
  background-color: #d2cccc;
}

.styles__setText___1PQLQ-camelCase {
  color: #3a3939;
}

.styles__edge___3eWfq-camelCase,
.styles__buttonFilled___23Dcn-camelCase {
  background-color: #ffffff;
  border-color: #ffffff;
}

.styles__lockedBlook___3oGaX-camelCase {
  filter: brightness(0.3);
}

#packSelector::-webkit-scrollbar {
  display: none;
}

#blookSelector::-webkit-scrollbar {
  display: none;
}

.styles__bazaarItems___KmNa2-camelCase::-webkit-scrollbar {
  display: none;
}

.styles__bazaarItems___KmNa2-camelCase {
  background-color: rgba(0, 0, 0, 0.33);
}

.styles__bazaarItem___Meg69-camelCase {
  background-color: #9d9d9d;
}

.styles__bazaarItem___Meg69-camelCase:hover {
  background-color: #3a3939;
}

.styles__container___3St5B-camelCase {
  background-color: #808080;
}
</style>`);

/* Gotta fix some things with element.style level CSS */
if (document.getElementsByClassName('styles__topRightRow___dQvxc-camelCase')[0] && location.pathname === '/market') {
  document.getElementsByClassName('styles__topRightRow___dQvxc-camelCase')[0].children[0].style.backgroundColor = '#9d9d9d';
};

if (document.getElementsByClassName('styles__front___vcvuy-camelCase')[0] && location.pathname === '/blooks' || location.pathname === '/store' || location.pathname === '/bazaar' || location.pathname === '/stats') {
  Array.from(document.getElementsByClassName('styles__front___vcvuy-camelCase')).forEach(a => {
    a.style.backgroundColor = '#9d9d9d';
  });

  Array.from(document.getElementsByClassName('styles__edge___3eWfq-camelCase')).forEach(a => {
    a.style.backgroundColor = '#9d9a9a';
  });

  setInterval(() => {
    Array.from(document.getElementsByClassName('styles__front___vcvuy-camelCase')).forEach(a => {
      a.style.backgroundColor = '#9d9d9d';
    });

    Array.from(document.getElementsByClassName('styles__edge___3eWfq-camelCase')).forEach(a => {
      a.style.backgroundColor = '#9d9a9a';
    });
  }, 25);
};

if (location.pathname === '/chat') {
  document.querySelectorAll('hr').forEach(a => a.style.backgroundColor = '#d5d4d4');
};

if (document.getElementsByTagName('div')[0] && location.pathname === '/404' || location.pathname === '/502/' || location.pathname === '/blacklisted') {
  document.getElementsByTagName('div')[0].style.backgroundColor = '#b5b5b5';
  document.getElementsByTagName('div')[2].style.backgroundColor = '#d5d4d4';
  document.getElementsByTagName('div')[2].style.filter = 'drop-shadow(white 0px 1px 3px)';
};

if (document.getElementsByClassName('styles__background___2J-JA-camelCase')[0] && location.pathname === '/trade' || location.pathname === '/store') {
  document.getElementsByClassName('styles__background___2J-JA-camelCase')[0].style.backgroundColor = '#b5b5b5';
};

setInterval(() => {
  document.querySelectorAll('input').forEach(n => n.style.backgroundColor = '#9d9d9d');
}, 25);

if (location.pathname === '/store') {
  document.querySelectorAll('.styles__middleWrapper___hjUyY-camelCase')[1].style.backgroundColor = '';
}