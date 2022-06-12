// 자바스크립트로 생성된 html components
function header () {
    return `
    <header id="main-header">
        <div class="main-header-bar">
            <h1>
                <a href="index.html">
                    <img src="./images/logo.svg" alt="로고">
                </a>
            </h1>
            <div class="toggle-menu">
                <a class="toggle-menu-btn mobile-only">
                    <img src="./images/toggle-menu-btn.svg" alt="모바일메뉴버튼">
                </a>
            </div>
                <nav id="gnb">
                    <ul>
                        <li class="gnb-about">
                            <a href="about.html"> ABOUT </a>
                        </li>
                        <li class="gnb-skills">
                            <a href="skills.html"> SKILLS </a>
                        </li>
                        <li class="gnb-portfolio">
                            <a href="portfolio-home.html"> PORTFOLIO </a>
                        </li>
                        <li class="gnb-contact">
                            <a href="contact.html"> CONTACT </a>
                        </li>
                     </ul>
                </nav>
        </div>
    </header>
    `
 }
  
  // 문서에 html 생성
  const headerName = '.header-component'; // class 요소명
  document.querySelector(headerName).innerHTML = header();