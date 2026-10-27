import './features.css';

function Features() {
    return (
        <section id="features" className="features">
            <div className="section-heading">
                <h2>Everything You Need for a Successful Job Search</h2>
                <p>
                    Simple tools and powerful features designed to
                    help you stay on track.
                </p>
            </div>
            <div className="feature-item">
                <div className="feature-grid">
                    <article className="features-card">
                        <span><i class="fa-regular fa-file-lines"></i></span>
                        <h3>Track Applications</h3>
                        <p>Keep all your job applications in one place.</p>
                    </article>
                </div>
                <div className="feature-grid">
                    <article className="features-card">
                        <span><i class="fa-solid fa-calendar-days"></i></span>
                        <h3>Monitor Interviews</h3>
                        <p>Never miss an interview or follow-up date.</p>
                    </article>
                </div>
                <div className="feature-grid">
                    <article className="features-card">
                        <span><i class="fa-solid fa-arrow-trend-up"></i></span>
                        <h3>Visualize Progress</h3>
                        <p>Understand your job search with useful stats.</p>
                    </article>
                </div>
                <div className="feature-grid">
                    <article className="features-card">
                        <span><i class="fa-regular fa-bell"></i></span>
                        <h3>Stay Organized</h3>
                        <p>Keep reminders and important dates organized.</p>
                    </article>
                </div>
                <div className="feature-grid">
                    <article className="features-card">
                        <span>
                            <i class="fa-solid fa-lock"></i>
                        </span>
                        <h3>Secure and Private</h3>
                        <p>Keep your account and application data protected.</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Features;