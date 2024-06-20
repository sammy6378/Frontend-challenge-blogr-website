import '../App.scss'
import close from '..//images/close.svg'
function toggle(){
    const bar = document.querySelector('.mobile img');
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

export default toggle;