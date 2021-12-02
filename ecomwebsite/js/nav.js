const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
                </div>
                <a href="./signup.html">
                <img src="img/user.png" id="user-img" alt="">
                <div class="login-logout-popup hide">
                <p class="account-info">Log in as, name</p>
                <button class="btn" id="user-btn">Log out</button>
                </div>
                </a>
                <a href="./cart.html"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="./index.html" class="link">home</a></li>
            <li class="link-item"><a href="#collection" class="link">category</a></li>
            <li class="link-item"><a href="#product" class="link">product</a></li>
            <li class="link-item"><a href="#footer" class="link">contact</a></li>
        </ul>
    `;
}
createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');


userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide');
})