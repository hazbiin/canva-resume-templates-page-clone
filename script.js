const headImageContainer = document.querySelector('.head-image-relative-container');
const headBackGroundImage = document.querySelector('picture img');
const imageRotatingContainer = document.querySelector('.actual-image-absolute-container');
const actualImageContainer =  document.querySelector('.actual-image-container');
const actualImage = document.querySelector('.actual-image-container img');

const designSpotlightBtn = document.getElementById('design-spotlight');
const dummyArea = document.querySelector('.dummy-area');
const designSpotlightHoverCard = document.getElementById('design-spotlight-hover-card');

const filtersStickyContainer = document.querySelector('.filters-sticky-container');

const resumesGrid = document.getElementById('resumes-grid');
const resumeStyles = document.getElementById('resume-styles');
const navigationLinks = document.getElementById('navigation-links');

const bodyEl = document.body;
const allfiltersPopup = document.querySelector('.pop-up-overlay');
const filterCategoryBtns = document.querySelectorAll('.filter-category-btn');
const filterBtn = document.getElementById("filter-btn");
const styleBtn = document.getElementById('style-btn');
const themeBtn = document.getElementById('theme-btn');
const featureBtn = document.getElementById('feature-btn');
const priceBtn = document.getElementById('price-btn');
const colorBtn = document.getElementById('color-btn');
const languageSelectBtn = document.getElementById('language-select-btn');

const slidingTabTop = document.getElementById('resume-styles');
const topNextBtn = document.getElementById('top-next-button');
const topPrevBtn = document.getElementById('top-prev-button');

const slidingTabBottom = document.getElementById('navigation-links');
const bottomNextBtn = document.getElementById('bottom-next-button');
const bottomPrevBtn = document.getElementById('bottom-prev-button');

// -----------------changing the styles of head image--------------------
function changeHeadImage(){
    if(window.innerWidth >= 768){
        headImageContainer.style.width = `${330.6666666666667}px`;
        headImageContainer.style.height = `${248}px`

        headBackGroundImage.style.width = `${330.6666666666667}px`;
        headBackGroundImage.style.height = `${248}px`;

        imageRotatingContainer.style.transform = `matrix3d(0.5865753889083862, 0.10541275888681412, 0, -0.00006608919647987932, -0.18261802196502686, 0.49206262826919556, 0, -0.00016587467689532787, 0, 0, 1, 0, 110.22222137451172, 33.98518371582031, 0, 1)`;
       
        actualImageContainer.style.width = `${259.94074074074075}px`;
        actualImageContainer.style.height = `${367.4074074074074}px`;

        actualImage.style.width = `${259.94074074074075}px`;
        actualImage.style.height = `${367.4074074074074}px`
    }else{
        headImageContainer.style.width = `${426.667}px`;
        headImageContainer.style.height = `${320}px`;

        headBackGroundImage.style.width = `${426.667}px`;
        headBackGroundImage.style.height = `${320}px`;

        imageRotatingContainer.style.transform = "transform: matrix3d(0.586575, 0.105413, 0, -5.12e-05, -0.182618, 0.492063, 0, -0.0001285, 0, 0, 1, 0, 142.222, 43.8519, 0, 1)";

        actualImageContainer.style.width = `${335.407}px`;
        actualImageContainer.style.height = `${474.074}px`;

        actualImage.style.width = `${335.407}px`;
        actualImage.style.height = `${474.074}px`;
    }
}
window.onresize = changeHeadImage;
window.onload = changeHeadImage;

// ------------------header button hovers------------------------
function showHoverCard(){
    designSpotlightHoverCard.classList.add('visible');
}
function hideHoverCard(e){
    if(!designSpotlightBtn.contains(e.relatedTarget) && !designSpotlightHoverCard.contains(e.relatedTarget) && !dummyArea.contains(e.relatedTarget)){
        designSpotlightHoverCard.classList.remove('visible');
    }
}

designSpotlightBtn.addEventListener('mouseenter', showHoverCard);
designSpotlightBtn.addEventListener('mouseleave', hideHoverCard);

designSpotlightHoverCard.addEventListener('mouseenter', showHoverCard);
designSpotlightHoverCard.addEventListener('mouseleave', hideHoverCard);

// ----------------------behaviour of sticky header---------------------
let lastScorllY = window.scrollY;
function stickyHeaderChanges(){

    const currentScrollY = window.scrollY;
    if(currentScrollY < 473) {

        filtersStickyContainer.classList.remove('hide');
        filtersStickyContainer.classList.remove('show-box-shadow');
    }else {
        filtersStickyContainer.classList.add('show-box-shadow');

        const popUpEl = document.querySelector('.pop-up-container');
        if(lastScorllY < currentScrollY && !popUpEl){
            filtersStickyContainer.classList.add('hide');
        }else {
            filtersStickyContainer.classList.remove('hide');
        }
    }
    lastScorllY = currentScrollY;
}  
window.addEventListener("scroll",stickyHeaderChanges);

function removeStickyHeaderIfVisible(){
    if(window.scrollY > 473){
        filtersStickyContainer.classList.add('hide');
    }
}

// -------------------initial fetch--------------------------
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

// ---------------------navigations slider----------------------------
topNextBtn.classList.add('active');
bottomNextBtn.classList.add('active');

function handleSlider(slidingTab,prevBtn,nextBtn){
    slidingTab.addEventListener("scroll",() => {
        let maxScrollWidth = slidingTab.scrollWidth - slidingTab.clientWidth;

        // toggling previous btns visibility
        if(slidingTab.scrollLeft > 0){
            prevBtn.classList.add('active');
        }else {
            prevBtn.classList.remove('active');
        }
        //toggling next btns visibility
        if(slidingTab.scrollLeft >= maxScrollWidth){
            nextBtn.classList.remove('active');
        }else {
            nextBtn.classList.add('active');
        }
    });

    // next and previous btns functionality
    nextBtn.addEventListener("click", () => {
        slidingTab.scrollLeft += 1341;
    });
    prevBtn.addEventListener("click", () => {
        slidingTab.scrollLeft -= 1382;
    });
}
handleSlider(slidingTabTop,topPrevBtn,topNextBtn);
handleSlider(slidingTabBottom,bottomPrevBtn,bottomNextBtn);

// ---------------------------updating resumes templates gird---------------------------
function addBlankResumeContainer(){
    const markup = `
        <div class="blank-resume-container">
            <div class="blank-container-relative">
                <div class="blank-container-absolute">
                    <div class="extra-div">
                        <div class="blank-container-flex">
                            <div class="blank-contents">
                                <span class="create-icon-container">
                                    <img class="create-icon" src="assets/svgs/create-blank-icon.svg" alt="">
                                </span>
                                <p class="create-blank-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    resumesGrid.insertAdjacentHTML("afterbegin", markup);
}

function showResumeTemplates(resumesData){
   
    resumesGrid.innerHTML = '';
    addBlankResumeContainer();

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

        if(resume.pricePlan === "Pro") {

            const imageAbsoluteContainer = resumeEl.querySelector('.image-absolute-container');
            const markup = `
                <span class="pro-label-container">
                    <span class="pro-icon-container">
                        <span class="pro-icon">
                            <img src="assets/svgs/resume-pro-icon.svg" alt="">
                        </span>
                        <span class="pro-text-container">
                            Pro
                        </span>
                    </span>
                </span>
            `;
            imageAbsoluteContainer.insertAdjacentHTML("beforebegin", markup);
        }
        hoverOnResumeTemplates(resumeEl);
    });
}
// ----------------hover on resumes -------------------------
function hoverOnResumeTemplates(resume){

    const resumeImage = resume.querySelector('.resume-image-section');
    const imageIcon = resume.querySelector('.icon-absolute-container');
    const proText = resume.querySelector('.pro-text-container');

    resumeImage.addEventListener("mouseenter", () => {
        imageIcon.style.display = 'flex';
        if(proText){
            proText.style.display = "inline";
        }
    });
    resumeImage.addEventListener("mouseleave", () => {
        imageIcon.style.display = 'none';
        if(proText){
            proText.style.display = "none";
        }
    });
}
// ------------------------click events on filter category buttons ------------------
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
// ----------------make the popups scroll ---------------------
function makePopUpsScrollToo(popUp,xOffset){
    window.addEventListener("scroll", () => {
        // scrollp >=0 && scrollp < 85

        const currentStickyHeaderBottom = filtersStickyContainer.getBoundingClientRect().bottom;
        const fixedY = 120;
        const scrollPosition = window.scrollY;

        if(scrollPosition >= 0 && scrollPosition < 400){
            popUp.style.transform = `translate(${xOffset}px, ${currentStickyHeaderBottom}px)`;
        }else{
            popUp.style.transform = `translate(${xOffset}px, ${fixedY}px)`;
        }
    });
}
// --------------------filtering functions---------------------------
let activeFilters = [];
async function getFilteredResumeTemplates(){

    const res = await fetch('resumedata.json');
    const data = await res.json();
    const resumes= data.resumes;

    if(activeFilters.length === 0){
        showResumeTemplates(resumes);
        return;
    }

    const filteredResumes = resumes.filter(resume => {
        return activeFilters.every(filter => {
            if(filter === 'Pro' || filter === 'Free'){
                return resume.pricePlan === filter;
            }else {
                return resume.filters?.includes(filter);
            }
        });
    });

    if(!document.getElementById('all-filters-popup')){
        resumesGrid.innerHTML = ``;
        showResumeTemplates(filteredResumes);
    }
}

function showActiveFilters(styleCategoryLabels,checkBoxes,checkMarks,checkMarkIcons,checkboxInputs,clickedFilterCategory){
    styleCategoryLabels.forEach((label,index) => {
        const filter = label.id;
        
        // initial check for the filter in the activeFilters array and apply the necessary visual states 
        if(activeFilters.includes((filter))){
            checkboxInputs[index].checked = true;
            checkBoxes[index].classList.add('active');
            checkMarks[index].classList.add('check-mark-visible');
            checkMarkIcons[index].classList.add('active');
        }else {
            checkboxInputs[index].checked = false;
            checkBoxes[index].classList.remove('active');
            checkMarks[index].classList.remove('check-mark-visible');
            checkMarkIcons[index].classList.remove('active');
        }

        label.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
           
            // ---------------------------visual changes to happen------------------------
            // toggle the checked state of checkboxes
            checkboxInputs[index].checked = !checkboxInputs[index].checked;
            const isChecked = checkboxInputs[index].checked;
            
            // update the activeFilters array on label clicking
            if(isChecked){
                activeFilters.push(filter);
            }else {
                const filterIndex = activeFilters.indexOf(filter);
                if(filterIndex !== -1){
                    activeFilters.splice(filterIndex,1);
                }
            }

            // toggle the classes on clicking the label
            checkBoxes[index].classList.toggle('active', isChecked);
            checkMarks[index].classList.toggle('check-mark-visible', isChecked);
            checkMarkIcons[index].classList.toggle('active', isChecked);

            console.log("current active Filters",activeFilters);

            // --------window moving up and adding clearall btn--------
            if(!document.getElementById('all-filters-popup')){
                makeWindowScrollUp();
                addClearAllBtn();
            }

            // ---------filter resumes based on selected one-------------
            getFilteredResumeTemplates();
        });

        label.addEventListener("mouseover", () => {
            if (!checkboxInputs[index].checked) {
                checkMarks[index].classList.add('check-mark-visible');
            }
        });
        label.addEventListener("mouseout", () => {
            if (!checkboxInputs[index].checked) {
                checkMarks[index].classList.remove('check-mark-visible');
            }
        });
    });
}

function makeWindowScrollUp(){
    window.scrollTo({
        top: 400,
        behavior:'smooth'
    });
}
function addClearAllBtn(){
    //update the count in allfilters btn too
    updateAllFiltersBtn();

    const filterBtnsContainer = document.querySelector('.filters');
    let allFiltersCount = document.querySelector('.all-filters-count');

    let clearBtn = document.querySelector('.filters-clear-btn');
    if(!clearBtn){
        clearBtn = document.createElement('button');
        clearBtn.classList.add('filters-clear-btn');
        filterBtnsContainer.appendChild(clearBtn); 
    }

    if(activeFilters.length < 1){
        clearBtn.remove();
    }else {
        clearBtn.innerHTML = `
            <span class="selected-filters-number">Clear all (${activeFilters.length})</span>
        `;
    }

    clearBtn.addEventListener("click", () => {
        activeFilters = [];
        clearBtn.remove();
        allFiltersCount.remove();
        getFilteredResumeTemplates();
    });
}
function updateAllFiltersBtn(){
    const allFiltersBtnContainer = document.querySelector('.all-filters-text');

    let allFiltersCount = document.querySelector('.all-filters-count');
    if(!allFiltersCount){
        allFiltersCount = document.createElement('span');
        allFiltersCount.classList.add('all-filters-count');
        allFiltersBtnContainer.appendChild(allFiltersCount);
    }

    if(activeFilters.length < 1){
        allFiltersCount.remove();
    }else {
        allFiltersCount.innerHTML = `
            <span class="all-filters-count-number">${activeFilters.length}</span>
        `;
    }
}
// -------------------style filter btn-------------------------------
function loadStyleFilters(styleFilters,popupType){
    const stylesContainer = document.createElement('div');

    if(popupType === 'individual'){
        stylesContainer.classList.add('scroll-item-container');
    }else if(popupType === 'all-filters-style'){
        stylesContainer.classList.add('inner-filters');
        stylesContainer.id = 'style-filters';
    }

    styleFilters.forEach((styleFilter) => {
        for(let key in styleFilter) {
            stylesContainer.innerHTML += `
                 <label id="${key}" class="style-category-label">
                    <div class="checkbox-section">
                        <input class="checkbox" type="checkbox">
                        <span class="checkbox-box">
                            <svg class="check-mark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#0d121645" d="m5.72 12.53-3.26-3.3c-.7-.72.36-1.77 1.06-1.06l2.73 2.77 6.35-6.35a.75.75 0 0 1 1.06 1.06l-6.88 6.88a.78.78 0 0 1-.5.23.83.83 0 0 1-.56-.23z"></path></svg>
                        </span>
                    </div>
                    <span class="small-width"></span>
                    <div class="text-section">
                        <p>${key}</p>
                        <p class="style-count">&nbsp;${styleFilter[key]}</p>
                    </div>
                </label>
            `;
        }
    });
    return stylesContainer;
}
styleBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    getData();
    async function getData(){
        const res = await fetch('resumedata.json');
        const data = await res.json();

        const styleFilters = data.filters.styleFilters;
        const allStyleFilters = loadStyleFilters(styleFilters,'individual');
        
    const markup = `
        <div id="style-pop-up" class="pop-up-container">
            <div class="pop-up" data-x-offset="160" style="transform: translate(160px, 93.6px);">
                <div class="pop-up-background">
                    <div class="scrollbar-section"></div>
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
    const popUpEl = document.querySelector('.pop-up-container');
    const stylePopUp = document.getElementById('style-pop-up');

    if(!stylePopUp){
        
        if(popUpEl){
            popUpEl.remove();
        }

        bodyEl.insertAdjacentHTML("afterbegin", markup);
        const stylesWrapper = document.querySelector('.scrollbar-section');
        stylesWrapper.appendChild(allStyleFilters);
        
        const popUp = document.querySelector('.pop-up');
        const xOffset = popUp.dataset.xOffset;
        makePopUpsScrollToo(popUp,xOffset);

        // ------------filtering styles----------------
        const styleCategoryLabels = document.querySelectorAll('.style-category-label');
        const checkBoxes = document.querySelectorAll('.checkbox-box');
        const checkboxInputs = document.querySelectorAll('.checkbox');
        const checkMarks = document.querySelectorAll('.check-mark');
        const checkMarkIcons = document.querySelectorAll('.check-mark path');
        showActiveFilters(styleCategoryLabels,checkBoxes,checkMarks,checkMarkIcons,checkboxInputs);
    }else{
        stylePopUp.remove();
        removeStickyHeaderIfVisible();
    }
}
});
// -------------------theme filter btn -------------------
function loadThemeFilters(themeFilters,popupType){

    const stylesContainer = document.createElement('div');

    if(popupType === 'individual'){
        stylesContainer.classList.add('scroll-item-container');
    }else if(popupType === 'all-filters-theme'){
        stylesContainer.classList.add('inner-filters');
        stylesContainer.id = 'theme-filters';
    }

    themeFilters.forEach((themeFilter) => {
        for(let key in themeFilter){
            stylesContainer.innerHTML += `
                <label id="${key}" class="style-category-label">
                    <div class="checkbox-section">
                        <input class="checkbox" type="checkbox">
                        <span class="checkbox-box">
                            <svg class="check-mark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#0d121645" d="m5.72 12.53-3.26-3.3c-.7-.72.36-1.77 1.06-1.06l2.73 2.77 6.35-6.35a.75.75 0 0 1 1.06 1.06l-6.88 6.88a.78.78 0 0 1-.5.23.83.83 0 0 1-.56-.23z"></path></svg>
                        </span>
                    </div>
                    <span class="small-width"></span>
                    <div class="text-section">
                        <p>${key}</p>
                        <p class="style-count">&nbsp;${themeFilter[key]}</p>
                    </div>
                </label>
            `;
        }
    });
    return stylesContainer;
}

themeBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    getData();
    async function getData(){
        const res = await fetch('resumedata.json');
        const data = await res.json();

        const themeFilters = data.filters.themeFilters;
        const allThemeFilters = loadThemeFilters(themeFilters,'individual');
      
    const markup = `
        <div id="theme-pop-up" class="pop-up-container">
            <div class="pop-up" data-x-offset="248.8" style="transform: translate(248.8px, 93.6px);">
                <div class="pop-up-background">
                    <div class="scrollbar-section"></div>
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
    const popUpEl = document.querySelector('.pop-up-container');
    const themePopUp = document.getElementById('theme-pop-up');
    
    if(!themePopUp){

        if(popUpEl){
            popUpEl.remove();
        }

        bodyEl.insertAdjacentHTML("afterbegin", markup);
        const themesWrapper = document.querySelector('.scrollbar-section');
        themesWrapper.appendChild(allThemeFilters);

        const popUp = document.querySelector('.pop-up');
        const xOffset = popUp.dataset.xOffset;
        makePopUpsScrollToo(popUp,xOffset);

        // --------------filtering themes-----------------
        const styleCategoryLabels = bodyEl.querySelectorAll('.style-category-label');
        const checkboxInputs = document.querySelectorAll('.checkbox');
        const checkBoxes = document.querySelectorAll('.checkbox-box');
        const checkMarks = bodyEl.querySelectorAll('.check-mark');
        const checkMarkIcons = document.querySelectorAll('.check-mark path');
        showActiveFilters(styleCategoryLabels,checkBoxes,checkMarks,checkMarkIcons,checkboxInputs);
    }else{
        themePopUp.remove();
        removeStickyHeaderIfVisible();
    }
}
});

// ------------------feature-filter-btn----------------------
function loadFeatureFilters(featureFilters,popupType){
    
    const stylesContainer = document.createElement('div');

    if(popupType === 'individual'){
        stylesContainer.classList.add('scroll-item-container');
    }else if(popupType === 'all-filters'){
        stylesContainer.classList.add('inner-filters');
    }

    featureFilters.forEach((featureFilter) => {
        for(let key in featureFilter){
            stylesContainer.innerHTML += `
                <label id="${key}" class="style-category-label">
                    <div class="checkbox-section">
                        <input class="checkbox" type="checkbox">
                        <span class="checkbox-box">
                            <svg class="check-mark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#0d121645" d="m5.72 12.53-3.26-3.3c-.7-.72.36-1.77 1.06-1.06l2.73 2.77 6.35-6.35a.75.75 0 0 1 1.06 1.06l-6.88 6.88a.78.78 0 0 1-.5.23.83.83 0 0 1-.56-.23z"></path></svg>
                        </span>
                    </div>
                    <span class="small-width"></span>
                    <div class="text-section">
                        <p>${key}</p>
                        <p class="style-count">&nbsp;${featureFilter[key]}</p>
                    </div>
                </label>
            `;
        }
    });
    return stylesContainer;
}
featureBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    getData();
    async function getData(){

        const res = await fetch('resumedata.json');
        const data = await res.json();

        const featureFilters = data.filters.featureFilters;
        const allFeaturesFilters = loadFeatureFilters(featureFilters,'individual');

        const stickyHeaderBottom = filtersStickyContainer.getBoundingClientRect().bottom;

    const markup = `
        <div id="feature-pop-up" class="pop-up-container">
        <div class="pop-up" data-x-offset="348" style="transform: translate(348px,${stickyHeaderBottom}px)";>
            <div class="pop-up-background">
                <div class="scrollbar-section"></div>
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

    const popUpEl = document.querySelector('.pop-up-container');
    const featurePopUp = document.getElementById("feature-pop-up");

    if(!featurePopUp){
        
        if(popUpEl){
            popUpEl.remove();
        }

        bodyEl.insertAdjacentHTML("afterbegin", markup);
        const featuresWrapper = document.querySelector('.scrollbar-section');
        featuresWrapper.appendChild(allFeaturesFilters);

        const popUp = document.querySelector('.pop-up');
        const xOffset = popUp.dataset.xOffset;
        makePopUpsScrollToo(popUp,xOffset);

        // --------------------feature filtering----------------
        const styleCategoryLabels = bodyEl.querySelectorAll('.style-category-label');
        const checkboxInputs = document.querySelectorAll('.checkbox');
        const checkBoxes = document.querySelectorAll('.checkbox-box');
        const checkMarks = bodyEl.querySelectorAll('.check-mark');
        const checkMarkIcons = document.querySelectorAll('.check-mark path');
        showActiveFilters(styleCategoryLabels,checkBoxes,checkMarks,checkMarkIcons,checkboxInputs);
    }else{
        featurePopUp.remove();
        removeStickyHeaderIfVisible();
    }
}
});

// ---------------------price-filter-btn------------------------------
function loadPriceFilters(priceFilters){
    const pricesContainer = document.createElement('div');
    pricesContainer.classList.add('price-filter-grid');

    priceFilters.forEach((priceFilter) => {

        for(let key in priceFilter){
            pricesContainer.innerHTML += `
            <button id="${key}" class="price-filter-btn">
                <div class="price-filter-wrapper">
                    <div class="filter-btn-contents-grid">
                        <span class="price-filter-icon">
                            <img src="assets/svgs/${priceFilter[key]}" alt="${key}-icon">
                        </span>
                        <p class="price-text">${key}</p>
                    </div>
                </div>
            </button>
        `;
        }
    });
    return pricesContainer;
}
priceBtn.addEventListener("click" , (e) => {
    e.stopPropagation();

    getData();
    async function getData(){

        const res = await fetch('resumedata.json');
        const data = await res.json();

        const priceFilters = data.filters.priceFilters;
        const allpricesFilters = loadPriceFilters(priceFilters);

        const stickyHeaderBottom = filtersStickyContainer.getBoundingClientRect().bottom;
       
    const markup = `
        <div id="price-pop-up" class="pop-up-container">
            <div class="pop-up" data-x-offset="453.6" style="transform: translate(453.6px, ${stickyHeaderBottom}px);">
                <div class="pop-up-background">
                    <div class="price-filter-container"></div>
                </div>
            </div>
        </div>
    `;

    const popUpEl = document.querySelector('.pop-up-container');
    const pricePopUp = document.getElementById("price-pop-up");

    if(!pricePopUp){
        
        if(popUpEl){
            popUpEl.remove();
        }

        bodyEl.insertAdjacentHTML("afterbegin", markup);
        const pricesWrapper = document.querySelector('.price-filter-container');
        pricesWrapper.appendChild(allpricesFilters);

        const popUp = document.querySelector('.pop-up');
        const xOffset = popUp.dataset.xOffset;
        makePopUpsScrollToo(popUp,xOffset);

        const priceFilterBtns = document.querySelectorAll('.price-filter-btn');
        checkActivePriceFilters(priceFilterBtns);

        // --------------------price filtering----------------
        const freeBtn = document.getElementById("Free");
        const proBtn = document.getElementById("Pro");   
        
        freeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleClassesForPriceFilters(freeBtn);
        });
        proBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleClassesForPriceFilters(proBtn);
        });
    }else{
        pricePopUp.remove();
        removeStickyHeaderIfVisible();
    }
}
});
// ---------------------color-filter-btn------------------------
function loadColorFilters(colorFilters){
    let markup="";
    colorFilters.forEach((colorFilter) => {
        for(let key in colorFilter){
            markup += `
                <button id="${key}" class="color-btn">
                        <span id="${key}" class="color ${colorFilter[key]}"></span>
                </button>
           `;
        }
    });
    return markup;
}
colorBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    getData();
    async function getData(){

        const res = await fetch('resumedata.json');
        const data = await res.json();

        const colorFilters = data.filters.colorFilters;
        const allcolorFilters = loadColorFilters(colorFilters);

        const stickyHeaderBottom = filtersStickyContainer.getBoundingClientRect().bottom;

    const markup = `
        <div id="color-pop-up" class="pop-up-container">
            <div class="pop-up" data-x-offset="541.6" style="transform: translate(541.6px, ${stickyHeaderBottom}px);">
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
                    </div>
                </div>
            </div>
        </div>
    `;
    const popUpEl = document.querySelector('.pop-up-container');
    const colorPopUp = document.getElementById("color-pop-up");

    if(!colorPopUp){
        
        if(popUpEl){
            popUpEl.remove();
        }

        bodyEl.insertAdjacentHTML("afterbegin", markup);

        const colorsWrapper = document.querySelector('.colors-grid-container');
        colorsWrapper.insertAdjacentHTML("beforeend",allcolorFilters);

        const popUp = document.querySelector('.pop-up');
        const xOffset = popUp.dataset.xOffset;
        makePopUpsScrollToo(popUp,xOffset);
       
        const colorBtns = document.querySelectorAll('.color-btn');
        checkActiveColorFilters(colorBtns);

        // ----------color filtering----------
        colorBtns.forEach((colorFilterBtn) => {
            colorFilterBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                toggleClassesForColorFilters(colorFilterBtn,colorBtns);
            });
        });
    }else{
        colorPopUp.remove();
        removeStickyHeaderIfVisible();
    }
}
});

// ------------updating active filters for price and color filters ---------------
function updateActiveFilters(filterType,category){
    const isPriceFilter = category === 'price';
    const isColorFilter = category === 'color';

    if (isPriceFilter) {
        if (activeFilters.includes(filterType)) {
            activeFilters = activeFilters.filter((filter) => filter !== filterType);
        } else {
            activeFilters = activeFilters.filter((filter) => filter !== 'Free' && filter !== 'Pro');
            activeFilters.push(filterType);
        }
    } 
    if(isColorFilter) {
        if(activeFilters.includes(filterType)){
            activeFilters = activeFilters.filter((filter) => filter !== filterType);
        }else {
            activeFilters = activeFilters.filter((filter) => !filter.startsWith('#'));
            activeFilters.push(filterType);
        }
    }
    console.log("current active Filters",activeFilters);
    getFilteredResumeTemplates();
}
// ------------------checking active filters of color and price filter before each popups
function checkActivePriceFilters(priceFilterBtns){
    const priceFilterWrappers = document.querySelectorAll('.price-filter-wrapper');
    
    priceFilterBtns.forEach((priceFilterBtn,index) => {
        const filterType = priceFilterBtn.id;
        
        if(activeFilters.includes(filterType)){
            priceFilterWrappers[index].classList.add('active');
        } else {
            priceFilterWrappers[index].classList.remove('active');
        }
    });
}
function checkActiveColorFilters(colorBtns){
    colorBtns.forEach((colorBtn) => {
        const filterType = `#${colorBtn.id}`;

        if(activeFilters.includes(filterType)){
            colorBtn.classList.add('active');
        }else {
            colorBtn.classList.remove('active');
        }
    });
}
// -----------------toggling classes for price and color filters based on the active filters---------------
function toggleClassesForPriceFilters(button) {
    // --------screen moving up and adding clearall btn--------
    if(!document.getElementById('all-filters-popup')){
        makeWindowScrollUp();
        addClearAllBtn();
    }

    const priceFilterWrapper = button.querySelector('.price-filter-wrapper');
    const filterType = button.id;

    if (priceFilterWrapper) {
        const isActive = priceFilterWrapper.classList.contains('active');

        // Remove all active classes before adding any
        document.querySelectorAll('.price-filter-wrapper').forEach((wrapper) => {
            wrapper.classList.remove('active');
        });

        if (!isActive) {
            priceFilterWrapper.classList.add('active');
            updateActiveFilters(filterType,'price');
        } else {
            updateActiveFilters(filterType,'price');
        }
    }

    //update the clear btn after updating the active filters in this case
    if(!document.getElementById('all-filters-popup')){
        addClearAllBtn();
    }
}

function toggleClassesForColorFilters(colorFilterBtn,colorBtns){
    // --------screen moving up and adding clearall btn--------
    if(!document.getElementById('all-filters-popup')){
        makeWindowScrollUp();
        addClearAllBtn();
    }

    const filterType = `#${colorFilterBtn.id}`;
    const isActive = colorFilterBtn.classList.contains('active');

    // removes all the active filters
    colorBtns.forEach((colorBtn) => {
        colorBtn.classList.remove('active');
    });

    if(!isActive){
        colorFilterBtn.classList.add('active');
        updateActiveFilters(filterType,'color');
    }else {
        updateActiveFilters(filterType,'color')
    }

    //update the clear btn after updating the active filters in this case
    if(!document.getElementById('all-filters-popup')){
        addClearAllBtn();
    }
}

// -------------------------------all-filters button ---------------------------------
function loadGradeFilters(gradeFilters){
    const stylesContainer = document.createElement('div');
    stylesContainer.classList.add('inner-filters');
   
    gradeFilters.forEach((gradeFilter) => {
        for(let key in gradeFilter){
            stylesContainer.innerHTML += `
                <label id="${key}" class="style-category-label">
                    <div class="checkbox-section">
                        <input class="checkbox" type="checkbox">
                        <span class="checkbox-box">
                            <svg class="check-mark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#0d121645" d="m5.72 12.53-3.26-3.3c-.7-.72.36-1.77 1.06-1.06l2.73 2.77 6.35-6.35a.75.75 0 0 1 1.06 1.06l-6.88 6.88a.78.78 0 0 1-.5.23.83.83 0 0 1-.56-.23z"></path></svg>
                        </span>
                    </div>
                    <span class="small-width"></span>
                    <div class="text-section">
                        <p>${key}</p>
                        <p class="style-count">&nbsp;${gradeFilter[key]}</p>
                    </div>
                </label>
            `;
        }
    });
    return stylesContainer;
}
function loadSubjectFilters(subjectFilters){
    const stylesContainer = document.createElement('div');
    stylesContainer.classList.add('inner-filters');
   
    subjectFilters.forEach((subjectFilter) => {
        for(let key in subjectFilter){
            stylesContainer.innerHTML += `
                <label id="${key}" class="style-category-label">
                    <div class="checkbox-section">
                        <input class="checkbox" type="checkbox">
                        <span class="checkbox-box">
                            <svg class="check-mark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#0d121645" d="m5.72 12.53-3.26-3.3c-.7-.72.36-1.77 1.06-1.06l2.73 2.77 6.35-6.35a.75.75 0 0 1 1.06 1.06l-6.88 6.88a.78.78 0 0 1-.5.23.83.83 0 0 1-.56-.23z"></path></svg>
                        </span>
                    </div>
                    <span class="small-width"></span>
                    <div class="text-section">
                        <p>${key}</p>
                        <p class="style-count">&nbsp;${subjectFilter[key]}</p>
                    </div>
                </label>
            `;
        }
    });
    return stylesContainer;
}
function loadTopicFilters(topicFilters){
    const stylesContainer = document.createElement('div');
    stylesContainer.classList.add('inner-filters');
    stylesContainer.id = 'topic-filters';
   
    topicFilters.forEach((topicFilter) => {
        for(let key in topicFilter){
            stylesContainer.innerHTML += `
                <label id="${key}" class="style-category-label">
                    <div class="checkbox-section">
                        <input class="checkbox" type="checkbox">
                        <span class="checkbox-box">
                            <svg class="check-mark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#0d121645" d="m5.72 12.53-3.26-3.3c-.7-.72.36-1.77 1.06-1.06l2.73 2.77 6.35-6.35a.75.75 0 0 1 1.06 1.06l-6.88 6.88a.78.78 0 0 1-.5.23.83.83 0 0 1-.56-.23z"></path></svg>
                        </span>
                    </div>
                    <span class="small-width"></span>
                    <div class="text-section">
                        <p>${key}</p>
                        <p class="style-count">&nbsp;${topicFilter[key]}</p>
                    </div>
                </label>
            `;
        }
    });
    return stylesContainer;
}

filterBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    getData();
    async function getData(){

        const res = await fetch('resumedata.json');
        const data = await res.json();

        const styleFilters = data.filters.styleFilters;
        const allStyleFilters = loadStyleFilters(styleFilters,'all-filters-style');

        const themeFilters = data.filters.themeFilters;
        const allThemeFilters = loadThemeFilters(themeFilters,'all-filters-theme');

        const featureFilters = data.filters.featureFilters;
        const allFeatureFilters = loadFeatureFilters(featureFilters,'all-filters');

        const gradeFilters = data.filters.gradeFilters;
        const allgradeFilters = loadGradeFilters(gradeFilters);

        const subjectFilters = data.filters.subjectFilters;
        const allSubjectFilters = loadSubjectFilters(subjectFilters);

        const topicFilters = data.filters.topicFilters;
        const allTopicFilters = loadTopicFilters(topicFilters);
    
        const priceFilters = data.filters.priceFilters;
        const allpricesFilters = loadPriceFilters(priceFilters);
    
        const colorFilters = data.filters.colorFilters;
        const allcolorFilters = loadColorFilters(colorFilters);
        
        const markup = `
            <div id="all-filters-popup" class="pop-up-container">
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
                                            <div id="style-filters-container" class="inner-filters-container"></div>
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
                                            <div id="theme-filters-container" class="inner-filters-container"></div>
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
                                            <div id="feature-filters-container" class="inner-filters-container"></div>
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
                                            <div id="grade-filters-container" class="inner-filters-container"></div>
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
                                            <div id="subject-filters-container" class="inner-filters-container"></div>
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
                                            <div id="topic-filters-container" class="inner-filters-container"></div>
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
                                                <div id="price-filters-container" class="price-filter-container"></div>
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
                                                <div id="colors-grid-container" class="colors-grid-container">
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
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="container-bottom-section">
                                    <div class="filters-btn-container">
                                        <button class="btn login-btn">
                                            <span class="header-btn-text login-text not-allowed-color">Clear all</span>
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
        addPopUp(markup,allStyleFilters,allThemeFilters,allFeatureFilters,allgradeFilters,allSubjectFilters,allTopicFilters,allpricesFilters,allcolorFilters);

        const popUpOverlay = bodyEl.querySelector('.pop-up-overlay');
        const filtersContainer = bodyEl.querySelector('.all-filters-absolute-container')
        const closeBtn = document.getElementById('close-btn');
        const popUpEl = bodyEl.querySelector('.pop-up-container');
        removeFiltersPopUp(popUpOverlay,popUpEl,filtersContainer,closeBtn);
    }
});

function createViewMoreBtn(filterType){
    const viewMoreBtn = document.createElement('button');
    viewMoreBtn.classList.add('view-more-btn');

    if(filterType === 'style'){
        viewMoreBtn.id = `${filterType}-view-more-btn`;
    }else if(filterType === 'theme'){
        viewMoreBtn.id = `${filterType}-view-more-btn`;
    }else if(filterType === 'topic'){
        viewMoreBtn.id = `${filterType}-view-more-btn`;
    }
    viewMoreBtn.innerHTML = `
        <span class="view-more-icon">
            <img src="assets/svgs/view-more-plus-sign.svg" alt="view-more-plus-sign">
        </span>
        <span class="view-more-text">View more</span>
    `;
    return viewMoreBtn;
}

function addPopUp(markup,allStyleFilters,allThemeFilters,allFeatureFilters,allgradeFilters,allSubjectFilters,allTopicFilters,allpricesFilters,allcolorFilters){

    const popUpEl = bodyEl.querySelector('.pop-up-container');
    if(popUpEl){
        popUpEl.remove();
        removeBackgroundToggleClass();
    }

    bodyEl.insertAdjacentHTML("beforeend", markup);

    const styleFiltersContainer = document.getElementById('style-filters-container');
    styleFiltersContainer.appendChild(allStyleFilters);
    styleFiltersContainer.insertAdjacentElement("beforeend",createViewMoreBtn('style'));

    const themeFiltersContainer = document.getElementById('theme-filters-container');
    themeFiltersContainer.appendChild(allThemeFilters);
    themeFiltersContainer.insertAdjacentElement("beforeend",createViewMoreBtn('theme'));

    const featureFiltersContainer = document.getElementById('feature-filters-container');
    featureFiltersContainer.appendChild(allFeatureFilters);

    const gradeFiltersContainer = document.getElementById('grade-filters-container');
    gradeFiltersContainer.appendChild(allgradeFilters);

    const subjectFiltersContainer = document.getElementById('subject-filters-container');
    subjectFiltersContainer.appendChild(allSubjectFilters);

    const topicFiltersContainer = document.getElementById('topic-filters-container');
    topicFiltersContainer.appendChild(allTopicFilters);
    topicFiltersContainer.insertAdjacentElement("beforeend",createViewMoreBtn('topic'));

    // -----------------------filtering----------------------------
    const styleCategoryLabels = bodyEl.querySelectorAll('.style-category-label');
    const checkboxInputs = document.querySelectorAll('.checkbox');
    const checkBoxes = document.querySelectorAll('.checkbox-box');
    const checkMarks = bodyEl.querySelectorAll('.check-mark');
    const checkMarkIcons = document.querySelectorAll('.check-mark path');
    showActiveFilters(styleCategoryLabels,checkBoxes,checkMarks,checkMarkIcons,checkboxInputs);

    const priceFiltersContainer = document.getElementById('price-filters-container');
    priceFiltersContainer.appendChild(allpricesFilters);
    // --------------------price filtering----------------
    const priceFilterBtns = document.querySelectorAll('.price-filter-btn');
    checkActivePriceFilters(priceFilterBtns);
     
    const freeBtn = document.getElementById("Free");
    const proBtn = document.getElementById("Pro");   
     
    freeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleClassesForPriceFilters(freeBtn);
    });
    proBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleClassesForPriceFilters(proBtn);
    });

    const colorFiltersContainer = document.querySelector('.colors-grid-container');
    colorFiltersContainer.insertAdjacentHTML("beforeend",allcolorFilters);
    // ----------color filtering----------
    const colorBtns = document.querySelectorAll('.color-btn');
    checkActiveColorFilters(colorBtns);

    colorBtns.forEach((colorFilterBtn) => {
        colorFilterBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleClassesForColorFilters(colorFilterBtn,colorBtns);
        });
    });
   
    // --------------view-more btn and dropdown inside the all-filters popup--------------
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

// ----------------removing popups on window click --------------
window.addEventListener("click", (e) => {
    const popUpEl = bodyEl.querySelector('.pop-up-container');

    if(popUpEl && !popUpEl.contains(e.target)){
        popUpEl.remove();
        removeBackgroundToggleClass();
        removeStickyHeaderIfVisible();

        if(bodyEl.contains(languageSelectBtn)){
            languageSelectBtn.classList.remove('select-box-btn-active-border');
        }
    }
});

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