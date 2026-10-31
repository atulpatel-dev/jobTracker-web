import './footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <a href="#" className="logo">
                        <i class="fa-solid fa-briefcase"></i> Job<span>Track</span>
                    </a>
                </div>
                <div className="footer-link">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <span><i class="fa-brands fa-x-twitter"></i></span>
                    <span><i class="fa-brands fa-instagram"></i></span>
                    <span><i class="fa-brands fa-linkedin"></i></span>

                    <p>&copy; 2026 JobTrack. All rights reserved</p>
                </div>

            </div>

        </footer>
    );
}

export default Footer;