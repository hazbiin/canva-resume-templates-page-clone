const headImageContainer = document.querySelector('.head-image-relative-container');
const headBackGroundImage = document.querySelector('picture img');
const imageRotatingContainer = document.querySelector('.actual-image-absolute-container');
const actualImageContainer =  document.querySelector('.actual-image-container');
const actualImage = document.querySelector('.actual-image-container img');

const filtersStickyContainer = document.querySelector('.filters-sticky-container');

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

const slidingTabs = document.querySelectorAll('.nav-items-container');
const nextBtns = document.querySelectorAll('.next');
const prevBtns = document.querySelectorAll('.prev');

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
nextBtns.forEach((nextBtn) => {
    nextBtn.classList.add('active');
});

slidingTabs.forEach((slidingTab) => {

    slidingTab.addEventListener("scroll" , () => {
        if(slidingTab.scrollLeft > 0){
            prevBtns.forEach((prevBtn) => {
                prevBtn.classList.add('active');
            });
        } else {
            prevBtns.forEach((prevBtn) => {
                prevBtn.classList.remove('active');
            });
        }

        let maxScrollWidth = slidingTab.scrollWidth - slidingTab.clientWidth;

        if(slidingTab.scrollLeft >= maxScrollWidth){
            nextBtns.forEach((nextBtn) => {
                // console.log("scrollWidth:", slidingTab.scrollWidth, "clientWidth:", slidingTab.clientWidth);
                nextBtn.classList.remove('active');
            });
        } else {
            nextBtns.forEach((nextBtn) => {
                nextBtn.classList.add('active');
            });
        }
    });

    nextBtns.forEach((nextBtn) => {
        nextBtn.addEventListener("click", () => {
            slidingTab.scrollLeft += 1341;
        });
    });
    prevBtns.forEach((prevBtn) => {
        prevBtn.addEventListener("click", () => {
            slidingTab.scrollLeft -= 1382;
        });
    });
});

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

    resumesGrid.innerHTML = ``;
    showResumeTemplates(filteredResumes);
}

function showActiveFilters(styleCategoryLabels,checkBoxes,checkMarks,checkMarkIcons,checkboxInputs){
    styleCategoryLabels.forEach((label,index) => {
        //assig all filters to the filter variable
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

            // --------screen moving up--------
            window.scrollTo({
                top: 400,
                behavior:'smooth'
            });

            // ---------adding clear btn----------
            const filterBtnsContainer = document.querySelector('.filters');
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

            // --------updating all filters btn------------
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
            // ---------------------------filter resumes---------------------------------
            // filter resumes based on the active filters
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

// -------------------style filter btn-------------------------------
function loadStyleFilters(styleFilters){
    const stylesContainer = document.createElement('div');
    stylesContainer.classList.add('scroll-item-container');

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
        const allStyleFilters = loadStyleFilters(styleFilters);
        
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
function loadThemeFilters(themeFilters){

    const stylesContainer = document.createElement('div');
    stylesContainer.classList.add('scroll-item-container');

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
        const allThemeFilters = loadThemeFilters(themeFilters);
      
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
function loadFeatureFilters(featureFilters){
    
    const stylesContainer = document.createElement('div');
    stylesContainer.classList.add('scroll-item-container');

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
        const allFeaturesFilters = loadFeatureFilters(featureFilters);

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
}
function toggleClassesForColorFilters(colorFilterBtn,colorBtns){
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
}

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


// --------------------all-filters-button------------------------------

// function hoverAndClickEvents(styleCategoryLabels,checkBoxes,checkMarks,checkMarkIcons,checkboxInput){

//     styleCategoryLabels.forEach((label,index) => {

//         label.addEventListener("click", (e) => {

//             console.log(label.id)
//             e.stopPropagation();
//             e.preventDefault();

//             // giving the checkbox checked attribute when clicked 
//             checkboxInput[index].checked = !checkboxInput[index].checked;

//             // variable to manage the checked state and toggle classes
//             const isChecked = checkboxInput[index].checked;

//             checkBoxes[index].classList.toggle('active',isChecked);
//             checkMarks[index].classList.toggle('check-mark-visible',isChecked);
//             checkMarkIcons[index].classList.toggle('active',isChecked);
//         });

//         label.addEventListener("mouseover", () => {
//             if (!checkboxInput[index].checked) {
//                 checkMarks[index].classList.add('check-mark-visible');
//             }
//         });

//         label.addEventListener("mouseout", () => {
//             if (!checkboxInput[index].checked) {
//                 checkMarks[index].classList.remove('check-mark-visible');
//             }
//         });
//     });
// }


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
            const checkboxInput = document.querySelectorAll('.checkbox');
            const checkBoxes = document.querySelectorAll('.checkbox-box');
            const checkMarks = bodyEl.querySelectorAll('.check-mark');
            const checkMarkIcons = document.querySelectorAll('.check-mark path');
            hoverAndClickEvents(styleCategoryLabels,checkBoxes,checkMarks,checkMarkIcons,checkboxInput);
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
        removeStickyHeaderIfVisible();

        if(bodyEl.contains(languageSelectBtn)){
            languageSelectBtn.classList.remove('select-box-btn-active-border');
        }
    }
});