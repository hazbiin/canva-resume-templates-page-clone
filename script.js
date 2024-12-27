const resumesGrid = document.getElementById('resumes-grid');
const resumeStyles = document.getElementById('resume-styles');
const navigationLinks = document.getElementById('navigation-links');

const bodyEl = document.body;
const filterCategoryBtns = document.querySelectorAll('.filter-category-btn');
const styleBtn = document.getElementById('style-btn');
const themeBtn = document.getElementById('theme-btn');
const featureBtn = document.getElementById('feature-btn');
const priceBtn = document.getElementById('price-btn');
const colorBtn = document.getElementById('color-btn');
const languageSelectBtn = document.getElementById('language-select-btn');


getResumeTemplates();
async function getResumeTemplates(){

    const response = await fetch('resumedata.json');
    const data = await response.json();

    showResumeStyles(data.resumeStyles);
    showResumeTemplates(data.resumes);
    showNavigationLinks(data.navigationLinks);
}


function showResumeStyles(resumeStylesData){

    resumeStylesData.forEach((style) => {

        const markup = `
            <div class="nav-item-container">
                <div class="nav-item">
                    <a class="nav-link" href="#">
                        <button class="section-nav-btn">
                            <span class="nav-text">${style}</span>
                        </button>                                                        
                    </a>
                </div>
            </div>
        `;
        resumeStyles.insertAdjacentHTML("beforeend",markup);
    });
}
function showResumeTemplates(resumesData){

    // resumesGrid.innerHTML = '';
    resumesData.forEach((resume) => {

        const resumeEl = document.createElement('div');
        resumeEl.classList.add('resume-wrapper');

        resumeEl.innerHTML = `
            <div class="resume-container">
                <div class="resume-image-section">  
                    <div class="image-section-outer-flex">
                        <div class="image-relative-container">
                            <div class="image-container">
                                <div class="resume-image-section">
                                    <a href="#">
                                        <div class="img-r-container" style="background-color: rgb(248,249,249); padding-bottom: 141.468%;">
                                            <div class="img-a-container">
                                                <div class="resume-image">
                                                    <img class="resume" draggable="false" alt="${resume.title}" srcset="${resume.image.srcset}" sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, (max-width: 1200px) 25vw, (max-width: 1500px) 20vw, 17vw" src="${resume.image.src}">
                                                 </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="image-absolute-container">
                                <span class="icon-absolute-container">
                                    <button class="image-btn">
                                        <span class="image-icon-container">
                                            <img src="assets/svgs/star-icon.svg" alt="">
                                        </span>
                                    </button>
                                    <button class="image-btn">
                                        <span class="image-icon-container">
                                            <img src="assets/svgs/three-dots.svg" alt="">
                                        </span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="resume-info-section">
                    <div class="resume-logo-section">
                        <button class="logo-btn">
                            <span class="logo" style="background-image: url('${resume.author.profilePic}');"></span>
                        </button>
                    </div>
                    <div class="resume-description-section">
                        <a href="#"><p class="title">${resume.title}</p></a>
                        <a href="#"><p class="author">Resume by ${resume.author.name}</p></a> 
                    </div>
                </div>
            </div>                                                  
        `;
        resumesGrid.appendChild(resumeEl);

        // const resumeImages = document.querySelectorAll('.resume-image-section');
        // const imageIcons = document.querySelectorAll('.icon-absolute-container');
        // // hoverOnResumeTemplates(resumeImages,imageIcons);
        
    });
}

// function hoverOnResumeTemplates(resumeImages,imageIcons){
//     resumeImages.forEach((resumeImage,index) => {
//         resumeImage.addEventListener("mouseenter", () => {
//             // console.log(imageIcons[index])
//             imageIcons[index].style.visibility = "visible";
//         });
//     });
// }

function showNavigationLinks(navigationLinksData){

    navigationLinksData.forEach((navigationLink) => {

        const markup = `
            <div class="nav-item-container">
                <div class="nav-item">
                    <a class="nav-link" href="#">
                        <button class="section-nav-btn">
                            <span class="nav-text">${navigationLink}</span>
                        </button>                                                        
                    </a>
                </div>
            </div>
        `;
        navigationLinks.insertAdjacentHTML("beforeend", markup);
    });
}

filterCategoryBtns.forEach((filterCategoryBtn) => {

    filterCategoryBtn.addEventListener("click", () => {
        
        // removeBackgroundToggleClass();
        // filterCategoryBtn.classList.toggle('background-toggle');

        if(filterCategoryBtn.classList.contains('background-toggle')){
            filterCategoryBtn.classList.remove('background-toggle');
        }else{
            removeBackgroundToggleClass();
            filterCategoryBtn.classList.add('background-toggle');
        }
    });
});

function removeBackgroundToggleClass(){

    filterCategoryBtns.forEach((filterCategoryBtn) => {
        filterCategoryBtn.classList.remove("background-toggle");
    });
}


function hoverCheckMarks(styleCategoryLabels,checkMarks){

    styleCategoryLabels.forEach((label,index) => {
        
        label.addEventListener("mouseover", () => {
            removeCheckMarks();
            checkMarks[index].classList.add('check-mark-visible');
        });
    
        label.addEventListener("mouseout", () => {
            removeCheckMarks();
        });
    });

    function removeCheckMarks(){
        checkMarks.forEach((checkMark) => {
            checkMark.classList.remove('check-mark-visible');
        });
    }
}

// -------------------style filter btn-------------------------------
styleBtn.addEventListener("click", (e) => {

    e.stopPropagation();
    const markup = `
        <div class="pop-up-container">
        <div class="pop-up" style="transform: translate(160px, 93.6px);">
            <div class="pop-up-background">
                <div class="scrollbar-section">
                    <div class="scroll-item-container">
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Professional</p>
                                <p class="style-count">&nbsp;(10K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Modern</p>
                                <p class="style-count">&nbsp;(9.2K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Simple</p>
                                <p class="style-count">&nbsp;(7.2K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Minimalist</p>
                                <p class="style-count">&nbsp;(7.2K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Corporate</p>
                                <p class="style-count">&nbsp;(5.3K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Creative</p>
                                <p class="style-count">&nbsp;(4.7K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Elegant</p>
                                <p class="style-count">&nbsp;(2.7K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Clean</p>
                                <p class="style-count">&nbsp;(2.4K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Minimal</p>
                                <p class="style-count">&nbsp;(1.5K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Aesthetic</p>
                                <p class="style-count">&nbsp;(1.1K)</p>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="btn-section">
                    <hr class="horizontal-line">
                    <div class="btn-container">
                        <button class="clear-btn">
                            <span class="clear-text">Clear</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    const popUpEl = bodyEl.querySelector('.pop-up-container');

    if(!popUpEl){

        bodyEl.insertAdjacentHTML("afterbegin", markup);

        const styleCategoryLabels = bodyEl.querySelectorAll('.style-category-label');
        const checkMarks = bodyEl.querySelectorAll('.check-mark');
        hoverCheckMarks(styleCategoryLabels,checkMarks);
        
    }else{
        popUpEl.remove();
    }
});

// -------------------theme filter btn -------------------
themeBtn.addEventListener("click", (e) => {

    e.stopPropagation();
    const markup = `
        <div class="pop-up-container">
        <div class="pop-up" style="transform: translate(248.8px, 93.6px);">
            <div class="pop-up-background">
                <div class="scrollbar-section">
                    <div class="scroll-item-container">
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Work</p>
                                <p class="style-count">&nbsp;(6K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Corporate</p>
                                <p class="style-count">&nbsp;(5.3K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Business</p>
                                <p class="style-count">&nbsp;(4.1K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Black</p>
                                <p class="style-count">&nbsp;(4K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Portfolio</p>
                                <p class="style-count">&nbsp;(2.8K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>hiring</p>
                                <p class="style-count">&nbsp;(2.3K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Company</p>
                                <p class="style-count">&nbsp;(2.2K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Career</p>
                                <p class="style-count">&nbsp;(1.9K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Graphic Design</p>
                                <p class="style-count">&nbsp;(1.7K)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Pink</p>
                                <p class="style-count">&nbsp;(1.3K)</p>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="btn-section">
                    <hr class="horizontal-line">
                    <div class="btn-container">
                        <button class="clear-btn">
                            <span class="clear-text">Clear</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    const popUpEl = bodyEl.querySelector('.pop-up-container');

    if(!popUpEl){

        bodyEl.insertAdjacentHTML("afterbegin", markup);

        const styleCategoryLabels = bodyEl.querySelectorAll('.style-category-label');
        const checkMarks = bodyEl.querySelectorAll('.check-mark');
        hoverCheckMarks(styleCategoryLabels,checkMarks);

    }else{
        popUpEl.remove();
    }
});

// ------------------feature-filter-btn----------------------
featureBtn.addEventListener("click", (e) => {

    e.stopPropagation();
    const markup = `
        <div class="pop-up-container">
        <div class="pop-up" style="transform: translate(348px, 520px);">
            <div class="pop-up-background">
                <div class="scrollbar-section">
                    <div class="scroll-item-container">
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Animation</p>
                                <p class="style-count">&nbsp;(4)</p>
                            </div>
                        </label>
                        <label class="style-category-label">
                            <div class="checkbox-section">
                                <input class="checkbox" type="checkbox">
                                <span class="checkbox-box">
                                    <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                </span>
                            </div>
                            <span class="small-width"></span>
                            <div class="text-section">
                                <p>Audio</p>
                                <p class="style-count">&nbsp;(1)</p>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="btn-section">
                    <hr class="horizontal-line">
                    <div class="btn-container">
                        <button class="clear-btn">
                            <span class="clear-text">Clear</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    const popUpEl = bodyEl.querySelector('.pop-up-container');

    if(!popUpEl){

        bodyEl.insertAdjacentHTML("afterbegin", markup);

        const styleCategoryLabels = bodyEl.querySelectorAll('.style-category-label');
        const checkMarks = bodyEl.querySelectorAll('.check-mark');
        hoverCheckMarks(styleCategoryLabels,checkMarks);
       
    }else{
        popUpEl.remove();
    }
});

// ---------------------price-filter-btn------------------------------
priceBtn.addEventListener("click" , (e) => {

    e.stopPropagation();
    const markup = `
        <div class="pop-up-container">
            <div class="pop-up" style="transform: translate(453.6px, 520px);">
                <div class="pop-up-background">
                    <div class="price-filter-container">
                        <div class="price-filter-grid">
                            <div class="free-section">
                                <button class="price-filter-btn">
                                    <div class="price-filter-wrapper">
                                        <div class="filter-btn-contents-grid">
                                            <span class="price-filter-icon">
                                                <img src="assets/svgs/free-icon.svg" alt="free-icon">
                                            </span>
                                            <p class="price-text">Free</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class="pro-section">
                                <button class="price-filter-btn">
                                    <div class="price-filter-wrapper">
                                        <div class="filter-btn-contents-grid">
                                            <span class="price-filter-icon">
                                                <img src="assets/svgs/pro-icon.svg" alt="pro-icon">
                                            </span>
                                            <p class="price-text">Pro</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    addPopUp(markup);
});

// ---------------------color-filter-btn------------------------
colorBtn.addEventListener("click", (e) => {

    e.stopPropagation();
    const markup = `
        <div class="pop-up-container">
        <div class="pop-up" style="transform: translate(541.6px, 520px);">
            <div class="pop-up-background">
                <div class="colors-grid-container">
                    <button class="color-btn">
                        <span class="color choose-color">
                            <span class="multi-color"></span>
                            <span class="plus-sign-absolute-container">
                                <span class="plus-sign-container">
                                    <span class="plus-svg">
                                        <img src="assets/svgs/color-plus-sign.svg" alt="plus-sign">
                                    </span>
                                </span>
                            </span>
                        </span>
                    </button>
                    <button class="color-btn">
                        <span id="#15181B" class="color c-15181B"></span>
                    </button>
                    <button class="color-btn">
                        <span id="#B612FB" class="color c-B612FB"></span>
                    </button>
                    <button class="color-btn">
                        <span id="#4A66FB" class="color c-4A66FB"></span>
                    </button>
                    <button class="color-btn">
                        <span id="#C1C6CB" class="color c-C1C6CB"></span>
                    </button>
                    <button class="color-btn">
                        <span id="#FFFFFF"class="color c-FFFFFF"></span>
                    </button>
                    <button class="color-btn">
                        <span id="#55DBE0" class="color c-55DBE0"></span>
                    </button>
                    <button class="color-btn">
                        <span id="#74D353" class="color c-74D353"></span>
                    </button>
                    <button class="color-btn">
                        <span id="#FED958" class="color c-FED958"></span>
                    </button>
                    <button class="color-btn">
                        <span id="#FE884C" class="color c-FE884C"></span>
                    </button>
                    <button class="color-btn">
                        <span id="#FD5152" class="color c-FD5152"></span>
                    </button>
                    <button class="color-btn">
                        <span id="#FD5EBB" class="color c-FD5EBB"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;

    addPopUp(markup);
}); 

function addPopUp(markup){
    const popUpEl = bodyEl.querySelector('.pop-up-container');

    if(!popUpEl){

        bodyEl.insertAdjacentHTML("beforeend", markup);
    }else{
        popUpEl.remove();
        console.log("removed");
    }

}
// ---------------------language-select-box-----------------------------
languageSelectBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    const markup = `
        <div class="pop-up-container">
            <div class="pop-up" style="transform: translate(32px, 362.4px);">
                <div class="pop-up-background bottom-pop-up">
                    <header class="searchbar-header">
                        <div class="searchbar-flex-container">
                            <div class="search-btn-container">
                                <span class="search-btn-icon">
                                    <img src="assets/svgs/language-search-icon.svg" alt="search-icon">
                                </span>
                            </div>
                            <input class="search-input" type="text">
                        </div>
                    </header>
                    <div class="languages-scroll-section">
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="language-container">
                                        <span class="language-text">
                                            <span dir="rtl">العربية (مصر)</span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="language-container">
                                        <span class="language-text">
                                            <span>中文 (中國香港特別行政區)</span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="language-container">
                                        <span class="language-text">
                                            <span>中文 (台灣)</span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="language-container">
                                        <span class="language-text">
                                            <span>Dansk (Danmark)</span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="language-container">
                                        <span class="language-text">
                                            <span>Nederlands (Nederland)</span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="language-container">
                                        <span class="language-text">
                                            <span>English (US)</span>
                                        </span>
                                        <span class="check-mark-container">
                                            <img src="assets/svgs/language-selectbox-checkmark.svg" alt="check-mark">
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="language-container">
                                        <span class="language-text">
                                            <span>Français (France)</span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="language-container">
                                        <span class="language-text">
                                            <span>Deutsch (Deutschland)</span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="language-container">
                                        <span class="language-text">
                                            <span>हिन्दी (भारत)</span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="language-container">
                                        <span class="language-text">
                                            <span>Bahasa Indonesia (Indonesia)</span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="language-container">
                                        <span class="language-text">
                                            <span>Italiano (Italia)</span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="language-container">
                                        <span class="language-text">
                                            <span>日本語 (日本)</span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    const popUpEl = bodyEl.querySelector('.pop-up-container');

    if(!popUpEl){

        bodyEl.insertAdjacentHTML("afterbegin", markup);
        languageSelectBtn.classList.add('select-box-btn-active-border');

        const searchbarContainer = bodyEl.querySelector('.searchbar-flex-container');
        const searchInput = bodyEl.querySelector('.search-input');
        languageSelectBoxEvents(searchbarContainer,searchInput);
    
    }else{

        popUpEl.remove();
        languageSelectBtn.classList.remove('select-box-btn-active-border');
    }
    
});

function languageSelectBoxEvents(searchbarContainer, searchInput){

    searchInput.focus();
    searchbarContainer.style.borderColor = "#8b3dff";

    searchInput.addEventListener("focus", () => {
        searchbarContainer.style.borderColor = "#8b3dff";
    });

    searchInput.addEventListener("blur", () => {
        searchbarContainer.style.borderColor = "rgba(53,71,90,.2)"; 
    });
}


// ----------------removing popups on window click --------------
window.addEventListener("click", (e) => {

    const popUpEl = bodyEl.querySelector('.pop-up-container');

    if(popUpEl && !popUpEl.contains(e.target)){
        popUpEl.remove();
        removeBackgroundToggleClass();

        if(bodyEl.contains(languageSelectBtn)){
            languageSelectBtn.classList.remove('select-box-btn-active-border');
        }

    }

});