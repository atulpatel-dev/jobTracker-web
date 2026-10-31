import './signup.css'

function Signup() {
    return (
        <div className="signup-container">
            <div className="signup-bar">
                <h3>Ready to Organize Job Search</h3>
                <p>Join thousands of job seekers who are already using JobTrack</p>
                <div className="btn-fluid">
                <button className="register">Get Started free <i class="fa-solid fa-arrow-right"></i>
                </button>
                <button >Login</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;