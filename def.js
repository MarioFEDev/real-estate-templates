window.scrollTo({ top: 0, behavior: 'smooth' }); 
let menuStatus = false

const header = document.querySelector('header');
header.addEventListener('resize', setHeaderHeight)
setHeaderHeight()
function setHeaderHeight() {
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}


const menu = document.querySelector('.mob-menu-con')
const x = document.querySelector('.close-img')
const html = document.querySelector('html')
const body = document.querySelector('body')

function initAnim(){
    body.classList.add('lock-scroll')

    setTimeout( () => {
        body.classList.remove('lock-scroll')
    }, 2300 )
}

 initAnim()

function toggleMenu(phase){
    if(!phase){
        menuIn()
    }else if(phase){
        menuOut()
    }
}

function menuIn() {
    menuStatus = true;
    setTimeout( () => {menu.style.display = 'flex'}, 100 )
    if (menu.classList.contains('menu-out')) {
        menu.classList.remove('menu-out');
        x.classList.remove('x-spin-out');
    }
    menu.classList.add('menu-in');
    x.classList.add('x-spin');
    html.classList.add('no-scroll')
}

function menuOut() {
    menuStatus = false;
            menu.classList.remove('menu-in');
            x.classList.remove('x-spin');
            menu.classList.add('menu-out');
            x.classList.add('x-spin-out');
            html.classList.remove('no-scroll')
            menu.addEventListener('animationend', () => {
            if (!menuStatus) {
                menu.style.display = 'none';
            }
            }, { once: true });
        }