const header = document.querySelector('.hero');
const nav = document.querySelector('.nav');

const stickyNav = function(entries) {

    const [entry] = entries;
    if (!entry.isIntersecting) {
        document.body.classList.add('sticky');
        console.log('sticky');

    } else {
        document.body.classList.remove('sticky');
        console.log(' not sticky');
    }
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: '-280px'


});

headerObserver.observe(header);
//////////
// const headerHeight = header.clientHeight;

// function handleScroll() {
//     if (window.scrollY > headerHeight) {
//         nav.classList.add('sticky');
//     } else {
//         nav.classList.remove('sticky');
//     }
// }

// window.addEventListener('scroll', handleScroll);



// navigation


document.querySelector('.nav__list').addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

    }

})

const handleHover = function(e, opacity) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        siblings.forEach(el => {
            if (el !== link) {
                el.style.opacity = this;
                el.style.transition = 'all 0.5s linear';

            }
        })
    }
}
nav.addEventListener('mouseover', handleHover.bind(0.5))

nav.addEventListener('mouseout', handleHover.bind(1))

/////////////
//smoothscroll
const allLinks = document.querySelectorAll('a:link')
allLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = link.getAttribute('href')
            if (href === '#') window.ScrollSmoother({ top: 0 });
            if (href !== '#' && href.startsWith('#')) {
                const sectionId = document.querySelector(href);
                sectionId.ScrollSmoother
            };
            //close mobnav
            if (link.classList.contains('nav__link'))
                console.log(link);
            document.querySelector('.content').classList.toggle('nav-open')
        })
    })
    //////////
    // animation
    // gsap.registerPlugin(ScrollTrigger);
    // ScrollSmoother.create({
    //     content: '.content',
    //     wrapper: '.wrapper',
    //     smooth: 1.5,
    //     effects: true,
    // })

////////////////////
// hero section
gsap.fromTo('.hero', {
    opacity: 1
}, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.hero',
        start: 'center',
        end: '780px',
        scrub: true
    }

})

///////////////
//sections reveal
// const allSections = document.querySelectorAll('.section');
// const revealSections = function(entries, observer) {
//     const [entry] = entries;
//     if (!entry.isIntersecting) return;
//     entry.target.classList.remove('section--hidden');
//     observer.unobserve(entry.target);
// }
// const sectionObserver = new IntersectionObserver(revealSections, {
//     root: null,
//     threshold: 0.15
// })
// allSections.forEach(section => {
//     sectionObserver.observe(section);
//     section.classList.add('section--hidden')
// })


/////////////////////////////////
// projects part

const itemsL = gsap.utils.toArray('.projects__left .item__left')
itemsL.forEach(item => {
    gsap.fromTo(item, {

        x: -50, // Initial x position
        opacity: 0 // Initial opacity
    }, {
        x: 0, // Final x position
        opacity: 1, // Final opacity
        scrollTrigger: {
            trigger: item,
            start: "-850",
            end: "-100",
            scrub: true
        }
    });
})

const itemsR = gsap.utils.toArray('.projects__right .item__right')
itemsR.forEach(item => {
        gsap.fromTo(item, {

            x: 50, // Initial x position
            opacity: 0 // Initial opacity
        }, {
            x: 0, // Final x position
            opacity: 1, // Final opacity
            scrollTrigger: {
                trigger: item,
                start: "-850",
                end: "-100",
                scrub: true
            }

        })
    })
    ///////////////////////////////

/////////////////////////////

//sticky nav
// const section1 = document.querySelector('.content__body')

// const initialCoord = document.querySelector('.content__body').getBoundingClientRect();

// window.addEventListener('scroll', function() {

//     if (window.scrollY > initialCoord.top) {
//         nav.classList.add('sticky')
//     } else {
//         nav.classList.remove('sticky')
//     }
// })



/////////////
//images loaded
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function() {
        entry.target.classList.remove('lazy-img');
    })
    observer.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '-200px'
});
imgTargets.forEach(img => imgObserver.observe(img))

////////////////

// mob nav
const navBtn = document.querySelectorAll(".icon-mobile-nav")
navBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelector('.content').classList.toggle('nav-open')

    })
})