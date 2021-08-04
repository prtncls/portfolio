$(document).ready(function () {
    const itemsListMobile = $('.itemsListMobile')
    const closeMenuButton = $('#closeMenuButton')
    const openMenuButton = $('#openMenuButton')
    const sections = $('section')
    //const home = $('.home')
    const about = $('.about')
    const portfolio = $('.portfolio')
    const contact = $('.contact')
    const navNameMobile = $('.navNameMobile')
    const aboutLinkMobile = $('.aboutLinkMobile')
    const portfolioLinkMobile = $('.portfolioLinkMobile')
    const contactLinkMobile = $('.contactLinkMobile')
    const aboutLinkDesktop = $('.aboutLinkDesktop')
    const portfolioLinkDesktop = $('.portfolioLinkDesktop')
    const contactLinkDesktop = $('.contactLinkDesktop')
    let openMenuAnim = gsap.timeline({ paused: true })

    //abrir menu
    function abrirMenu() {
        console.log('abrir menu');
        openMenuAnim.play();
        //itemsListMobile.css('visibility', 'visible');
        closeMenuButton.css('display', 'unset');
        //openMenuButton.css('display', 'visible');
    }
    //cerrar menu
    function cerrarMenu() {
        console.log('cerrar menu');
        //itemsListMobile.css('visibility', 'hidden');
        //openMenuButton.css('display', 'unset');
        closeMenuButton.css('display', 'none');
        openMenuAnim.reverse();
    }

    openMenuButton.on('click', abrirMenu)
    closeMenuButton.on('click', cerrarMenu)

    //abrir about mobile
    aboutLinkMobile.on('click', function abrirAbout() {
        console.log('abrir about');
        sections.css('display', 'none');
        about.css('display', 'flex');
        navNameMobile.css('visibility', 'visible');
        cerrarMenu();
    })
    //abrir portfolio mobile
    portfolioLinkMobile.on('click', function abrirPortfolio() {
        console.log('abrir portfolio');
        sections.css('display', 'none');
        portfolio.css('display', 'unset');
        navNameMobile.css('visibility', 'visible');
        cerrarMenu();
    })

    //abrir contacto mobile
    contactLinkMobile.on('click', function abrirContact() {
        console.log('abrir contact');
        sections.css('display', 'none');
        contact.css('display', 'flex');
        navNameMobile.css('visibility', 'visible');
        cerrarMenu();
    })

    //abrir about desktop
    aboutLinkDesktop.on('click', function abrirAbout() {
        console.log('abrir about');
        sections.css('display', 'none');
        about.css('display', 'flex');
    })

    //abrir portfolio desktop
    portfolioLinkDesktop.on('click', function abrirPortfolio() {
        console.log('abrir portfolio');
        sections.css('display', 'none');
        portfolio.css('display', 'unset');
    })

    //abrir contacto desktop
    contactLinkDesktop.on('click', function abrirContact() {
        console.log('abrir contact');
        sections.css('display', 'none');
        contact.css('display', 'flex');
    })

    //GSAP
    const createOpenMenuAnim = () => {
        openMenuAnim.to(openMenuButton, { duration: 0.5, rotation: 90, transformOrigin: "right top", ease: 'power2'}, 0)
                    .to(navNameMobile, { duration:1, x:-250, ease: 'expo.easeOut'}, 0)
                    .from(itemsListMobile, { duration: 0.5, height: 0, ease: 'power2', paddingTop: 0 }, 0.5)
                    .from(closeMenuButton, { duration: 0.5, rotation: -90, transformOrigin: "right top", ease: 'power2'}, 1)
    }

    //inicializo linea de tiempo
    createOpenMenuAnim()



})