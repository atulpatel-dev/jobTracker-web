
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <a href="#" className="logo">
       <i class="fa-solid fa-briefcase"></i> Job<span>Track</span>
        </a>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>

        <div>
          <button className='login'>Login</button>
          <button className='register'>Get Started — It's Free</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;