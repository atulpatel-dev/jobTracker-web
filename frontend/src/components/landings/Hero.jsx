import './hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <div className="aside-container">
                <p className="bullet"><i class="fa-solid fa-bolt"></i>&nbsp; &nbsp;Your Job Search Organized</p>
                <h1>Track Your Job Application and Get Closer to Your <span>Dream Job</span></h1>
                <p className="disc">
                    JobTrack helps you manage your job search,
                    track applications, interviews and follow-ups
                    — all in one place.
                </p>
                <div className="hero-actions">
                    <button className="btn"href="/register">Get Started Free →</button>
                    <button href="#features">▷ Watch Demo</button>
                </div>

                <div className="social-proof">
                    <p>Join job seekers tracking their success with JobTrack.</p>
                </div>
            </div>
            <div className="profile-container">
            </div>
        </div>
    );
}

export default Hero;