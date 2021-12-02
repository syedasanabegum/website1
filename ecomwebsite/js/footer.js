const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title"><b>EXTRAS</b></li>
                <li><a href="#" class="footer-link">Brands</a></li>
                <li><a href="#" class="footer-link">Gift Certificates</a></li>
                <li><a href="#" class="footer-link">Affiliate</a></li>
                <li><a href="#" class="footer-link">Specials</a></li>
                <li><a href="#" class="footer-link">Site Maps</a></li>
            </ul>
            <ul class="category">
                <li class="category-title"><b>INFORMATION</b></li>
                <li><a href="#" class="footer-link">About Us</a></li>
                <li><a href="#" class="footer-link">Privacy Policy</a></li>
                <li><a href="#" class="footer-link">Terms and Conditions</a></li>
                <li><a href="#" class="footer-link">Contact Us</a></li>
                <li><a href="#" class="footer-link">Site Map</a></li>
            </ul>
            <ul class="category">
                <li class="category-title"><b>MY ACCOUNT</b></li>
                <li><a href="#" class="footer-link">My Account</a></li>
                <li><a href="#" class="footer-link">Order History</a></li>
                <li><a href="#" class="footer-link">Wish List</a></li>
                <li><a href="#" class="footer-link">News Letter</a></li>
                <li><a href="#" class="footer-link">Returns</a></li>
            </ul>
            <ul class="category">
                <li class="category-title"><b>CONTACT US</b></li>
                <li><a href="#" class="footer-link">42 Dream House,7131 street,India</a></li>
                <li><a href="#" class="footer-link">company@gmail.com</a></li>
                <li><a href="#" class="footer-link">456-456-4512</a></li>
                <li><a href="#" class="footer-link">Dream city,USA</a></li>
                
            </ul>
        </div>
    </div>


    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();