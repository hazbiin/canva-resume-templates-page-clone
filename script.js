const resumesGrid = document.getElementById('resumes-grid');
const resumeStyles = document.getElementById('resume-styles');
const navigationLinks = document.getElementById('navigation-links');

const bodyEl = document.body;
const filterCategoryBtns = document.querySelectorAll('.filter-category-btn');
const filterBtn = document.getElementById("filter-btn");
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

        hoverOnResumeTemplates(resumeEl);
        
    });
}

function hoverOnResumeTemplates(resume){

    const resumeImage = resume.querySelector('.resume-image-section');
    const imageIcon = resume.querySelector('.icon-absolute-container');

    resumeImage.addEventListener("mouseenter", () => {
        imageIcon.style.display = 'flex';
    });

    resumeImage.addEventListener("mouseleave", () => {
        imageIcon.style.display = 'none';
    });
}

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

// --------------------all-filters-button------------------------------
filterBtn.addEventListener("click", (e) => {

    e.stopPropagation();
    const markup = `
        <div class="pop-up-container">
        <div class="pop-up-overlay">
            <div class="all-filters-absolute-container">
                <div class="all-filters-flex-wrapper">
                    <div class="all-filters-overflow-container">
                        <div class="container-head-section">
                            <div class="filters-head-flex-container">
                                <div class="filters-heading">
                                    <h5>Filters</h5>
                                </div>
                                <div class="close-btn-container">
                                    <button id="close-btn" class="close-btn">
                                        <span class="close-icon">
                                            <img src="assets/svgs/close-icon.svg" alt="close-icon">
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="container-middle-section">
                            <ul>
                                <li>
                                    <button class="inner-filter-btn">
                                        <div class="btn-contents-flex-container">
                                            <h3>Style</h3>
                                            <span class="filter-nav-icon">
                                                <img src="assets/svgs/filter-up-arrow.svg" alt="up-arrow-icon">
                                            </span>
                                        </div>
                                    </button>
                                    <div class="inner-filters-container">
                                        <div id="style-filters" class="inner-filters">
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
                                            <button id="style-view-more-btn" class="view-more-btn">
                                                <span class="view-more-icon">
                                                    <img src="assets/svgs/view-more-plus-sign.svg" alt="view-more-plus-sign">
                                                </span>
                                                <span class="view-more-text">View more</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button class="inner-filter-btn">
                                        <div class="btn-contents-flex-container">
                                            <h3>Theme</h3>
                                            <span class="filter-nav-icon">
                                                <img src="assets/svgs/filter-up-arrow.svg" alt="up-arrow-icon">
                                            </span>
                                        </div>
                                    </button>
                                    <div class="inner-filters-container">
                                        <div id="theme-filters" class="inner-filters">
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
                                            <button id="theme-view-more-btn" class="view-more-btn">
                                                <span class="view-more-icon">
                                                    <img src="assets/svgs/view-more-plus-sign.svg" alt="view-more-plus-sign">
                                                </span>
                                                <span class="view-more-text">View more</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button class="inner-filter-btn">
                                        <div class="btn-contents-flex-container">
                                            <h3>Feature</h3>
                                            <span class="filter-nav-icon">
                                                <img src="assets/svgs/filter-up-arrow.svg" alt="up-arrow-icon">
                                            </span>
                                        </div>
                                    </button>
                                    <div class="inner-filters-container">
                                        <div class="inner-filters">
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
                                </li>
                                <li>
                                    <button class="inner-filter-btn">
                                        <div class="btn-contents-flex-container">
                                            <h3>Grade</h3>
                                            <span class="filter-nav-icon">
                                                <img src="assets/svgs/filter-up-arrow.svg" alt="up-arrow-icon">
                                            </span>
                                        </div>
                                    </button>
                                    <div class="inner-filters-container">
                                        <div class="inner-filters">
                                            <label class="style-category-label">
                                                <div class="checkbox-section">
                                                    <input class="checkbox" type="checkbox">
                                                    <span class="checkbox-box">
                                                        <img class="check-mark" src="assets/svgs/checkbox.svg" alt="">
                                                    </span>
                                                </div>
                                                <span class="small-width"></span>
                                                <div class="text-section">
                                                    <p>Pre-school</p>
                                                    <p class="style-count">&nbsp;(2)</p>
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
                                                    <p>Kindergarten</p>
                                                    <p class="style-count">&nbsp;(1)</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button class="inner-filter-btn">
                                        <div class="btn-contents-flex-container">
                                            <h3>Subject</h3>
                                            <span class="filter-nav-icon">
                                                <img src="assets/svgs/filter-up-arrow.svg" alt="up-arrow-icon">
                                            </span>
                                        </div>
                                    </button>
                                    <div class="inner-filters-container">
                                        <div class="inner-filters">
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
                                                    <p class="style-count">&nbsp;(120)</p>
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
                                                    <p>Design</p>
                                                    <p class="style-count">&nbsp;(29)</p>
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
                                                    <p>Social Studies</p>
                                                    <p class="style-count">&nbsp;(2)</p>
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
                                                    <p>Science</p>
                                                    <p class="style-count">&nbsp;(1)</p>
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
                                                    <p>Technology</p>
                                                    <p class="style-count">&nbsp;(1)</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button class="inner-filter-btn">
                                        <div class="btn-contents-flex-container">
                                            <h3>Topic</h3>
                                            <span class="filter-nav-icon">
                                                <img src="assets/svgs/filter-up-arrow.svg" alt="up-arrow-icon">
                                            </span>
                                        </div>
                                    </button>
                                    <div class="inner-filters-container">
                                        <div id="topic-filters" class="inner-filters">
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
                                                    <p class="style-count">&nbsp;(770)</p>
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
                                                    <p>Digital Marketing</p>
                                                    <p class="style-count">&nbsp;(84)</p>
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
                                                    <p>Finance</p>
                                                    <p class="style-count">&nbsp;(21)</p>
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
                                                    <p>Accounting</p>
                                                    <p class="style-count">&nbsp;(20)</p>
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
                                                    <p>Social Media Marketing</p>
                                                    <p class="style-count">&nbsp;(10)</p>
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
                                                    <p>Advertising</p>
                                                    <p class="style-count">&nbsp;(8)</p>
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
                                                    <p>Brand</p>
                                                    <p class="style-count">&nbsp;(8)</p>
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
                                                    <p>Public Relations</p>
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
                                                    <p>Digital Media</p>
                                                    <p class="style-count">&nbsp;(2)</p>
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
                                                    <p>Engineering</p>
                                                    <p class="style-count">&nbsp;(2)</p>
                                                </div>
                                            </label>
                                            <button id="topic-view-more-btn" class="view-more-btn">
                                                <span class="view-more-icon">
                                                    <img src="assets/svgs/view-more-plus-sign.svg" alt="view-more-plus-sign">
                                                </span>
                                                <span class="view-more-text">View more</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button class="inner-filter-btn">
                                        <div class="btn-contents-flex-container">
                                            <h3>Price</h3>
                                            <span class="filter-nav-icon">
                                                <img src="assets/svgs/filter-up-arrow.svg" alt="up-arrow-icon">
                                            </span>
                                        </div>
                                    </button>
                                    <div class="inner-filters-container">
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
                                </li>
                                <li>
                                    <button class="inner-filter-btn">
                                        <div class="btn-contents-flex-container">
                                            <h3>Color</h3>
                                            <span class="filter-nav-icon">
                                                <img src="assets/svgs/filter-up-arrow.svg" alt="up-arrow-icon">
                                            </span>
                                        </div>
                                    </button>
                                    <div class="inner-filters-container">
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
                                </li>
                            </ul>
                        </div>
                        <div class="container-bottom-section">
                            <div class="filters-btn-container">
                                <button class="btn login-btn">
                                    <span class="header-btn-text login-text">Clear all</span>
                                </button>
                                <button class="btn signup-btn">
                                    <span class="header-btn-text signup-text">Apply</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    addPopUp(markup);

    const popUpOverlay = bodyEl.querySelector('.pop-up-overlay');
    const filtersContainer = bodyEl.querySelector('.all-filters-absolute-container')
    const closeBtn = document.getElementById('close-btn');
    const popUpEl = bodyEl.querySelector('.pop-up-container');
    removeFiltersPopUp(popUpOverlay,popUpEl,filtersContainer,closeBtn);
});

function addPopUp(markup){
   
    const popUpEl = bodyEl.querySelector('.pop-up-container');
    if(!popUpEl){

        bodyEl.insertAdjacentHTML("beforeend", markup);


        if(bodyEl.querySelector('.pop-up-overlay')){
        
            const filtersContainer = bodyEl.querySelector('.all-filters-absolute-container');
            setTimeout(() => {
                filtersContainer.classList.toggle('show');
            }, 10);


            const filterBtns = document.querySelectorAll('.inner-filter-btn');
            const filtersLists = document.querySelectorAll('.inner-filters-container');

            filterBtns.forEach((filterBtn,index) => {

                let isFiltersListVisible = false;
                filterBtn.addEventListener("click",(e) => {

                    e.stopPropagation();

                    isFiltersListVisible = !isFiltersListVisible;

                    if(isFiltersListVisible){

                        filtersLists[index].style.display = "none";

                        const btnIcon = filterBtn.querySelector('.filter-nav-icon');
                        btnIcon.innerHTML = `
                            <img src="assets/svgs/filter-down-arrow.svg" alt="down-arrow-icon">
                        `;
                    } else {
                        filtersLists[index].style.display = "block";

                        const btnIcon = filterBtn.querySelector('.filter-nav-icon');
                        btnIcon.innerHTML = `
                            <img src="assets/svgs/filter-up-arrow.svg" alt="up-arrow-icon">
                        `;
                    }
                });
            });

            let areLabelsVisible = false;
            const styleViewMoreBtn = document.getElementById('style-view-more-btn');
            const themeViewMoreBtn = document.getElementById('theme-view-more-btn');
            const topicViewMoreBtn = document.getElementById('topic-view-more-btn');
           
            styleViewMoreBtn.addEventListener("click", (e) => {

                e.stopPropagation();
                const styleFilters = document.getElementById('style-filters');
                const styleNewLabels = styleFilters.querySelectorAll(".style-category-label:nth-child(n+7):nth-child(-n+10)");
                
                areLabelsVisible = !areLabelsVisible;
                if(areLabelsVisible) {

                    viewMore(styleViewMoreBtn,styleNewLabels);
                } else {

                    viewLess(styleViewMoreBtn,styleNewLabels);
                }
            });
            themeViewMoreBtn.addEventListener("click", (e) => {

                e.stopPropagation();
                const themeFilters = document.getElementById('theme-filters');
                const themeNewLabels = themeFilters.querySelectorAll(".style-category-label:nth-child(n+7):nth-child(-n+10)");

                areLabelsVisible = !areLabelsVisible;
                if(areLabelsVisible) {

                    viewMore(themeViewMoreBtn,themeNewLabels);
                } else {

                    viewLess(themeViewMoreBtn,themeNewLabels);
                }
            });
            topicViewMoreBtn.addEventListener("click", (e) => {

                e.stopPropagation();
                const topicFilters = document.getElementById('topic-filters');
                const topicNewLabels = topicFilters.querySelectorAll(".style-category-label:nth-child(n+7):nth-child(-n+10)");

                areLabelsVisible = !areLabelsVisible;
                if(areLabelsVisible) {

                    viewMore(topicViewMoreBtn,topicNewLabels);
                } else {

                    viewLess(topicViewMoreBtn,topicNewLabels);
                }
            });

            const styleCategoryLabels = bodyEl.querySelectorAll('.style-category-label');
            const checkMarks = bodyEl.querySelectorAll('.check-mark');
            hoverCheckMarks(styleCategoryLabels,checkMarks);
        }
    }
}

function viewMore(viewMoreBtn,newLabels){

    newLabels.forEach((newLabel) => {
        newLabel.style.display = "flex";
    });

    const btnText = viewMoreBtn.querySelector('.view-more-text');
    btnText.innerText = 'View less';

    const btnIcon = viewMoreBtn.querySelector('.view-more-icon');
    btnIcon.innerHTML = `
        <img src="assets/svgs/view-more-minus-sign.svg" alt="view-more-minus-sign"></img>
    `;
}
function viewLess(viewMoreBtn,newLabels){
    newLabels.forEach((newLabel) => {
        newLabel.style.display = "none";
    });

    const btnText = viewMoreBtn.querySelector('.view-more-text');
    btnText.innerText = 'View more';

    const btnIcon = viewMoreBtn.querySelector('.view-more-icon');
    btnIcon.innerHTML = `
        <img src="assets/svgs/view-more-plus-sign.svg" alt="view-more-plus-sign"></img>
    `;
}

function removeFiltersPopUp(popUpOverlay,popUpEl,filtersContainer,closeBtn){

    popUpOverlay.addEventListener("click", (e) => {
        
        if(!filtersContainer.contains(e.target) || closeBtn.contains(e.target)){

            popUpOverlay.classList.add('remove');
            filtersContainer.classList.toggle('show');
            setTimeout(() => {
                popUpEl.remove();
            }, 300);
        }
    });
}

// ---------------------language-select-box-----------------------------
languageSelectBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    getData();
    async function getData(){
        const res = await fetch('resumedata.json');
        const data = await res.json();
        
        const languageList = loadLanguages(data.Languages);
    
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
                    <div class="languages-scroll-section"></div>
                </div>
            </div>
        </div>
    `;

    const popUpEl = bodyEl.querySelector('.pop-up-container');
        
    if(!popUpEl){

        bodyEl.insertAdjacentHTML("afterbegin", markup);
        languageSelectBtn.classList.add('select-box-btn-active-border');

        const languagesScrollableContainer = bodyEl.querySelector('.languages-scroll-section');
        languagesScrollableContainer.appendChild(languageList);
        languagesScrollableContainer.scrollTop = 12;
        
        const searchbarContainer = bodyEl.querySelector('.searchbar-flex-container');
        const searchInput = bodyEl.querySelector('.search-input');
        languageSelectBoxEvents(searchbarContainer,searchInput);
        
    }else{

        popUpEl.remove();
        languageSelectBtn.classList.remove('select-box-btn-active-border');
    }
}
});

function loadLanguages(Languages){

    const ulEl = document.createElement('ul');
    Languages.forEach((language) =>{

        if(language === "English (US)"){
            ulEl.innerHTML += `
                 <li>
                    <a href="#">
                        <div class="language-container">
                            <span class="language-text">
                                <span>${language}</span>
                            </span>
                            <span class="check-mark-container">
                                <img src="assets/svgs/language-selectbox-checkmark.svg" alt="check-mark">
                            </span>
                        </div>
                    </a>
                </li>
            `;
        } else {
            ulEl.innerHTML += `
            <li>
                <a href="#">
                    <div class="language-container">
                        <span class="language-text">
                            <span>${language}</span>
                        </span>
                    </div>
                </a>
            </li>
        `; 
        }
    });
    return ulEl;
}

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