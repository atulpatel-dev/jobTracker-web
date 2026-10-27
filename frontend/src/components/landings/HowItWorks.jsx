import './howItWorks.css';

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="section-heading">
        <h2>How It Works</h2>
        <p>
          Get started in 3 simple steps and take control
          of your job search.
        </p>
      </div>

      <div className="steps-path">
        <article className="step">
          <span>1</span>
          <div className='step-root'>
            <h3>Create Your Account</h3>
            <p>
              Sign up for free and set up your personal profile.
            </p>
          </div>
        </article>

        <article className="step">
          <span>2</span>
          <div className='step-root'>
            <h3>Add Your Applications</h3>
            <p>
              Track the jobs you've applied to, including
              status, dates and notes.
            </p>
          </div>
        </article>

        <article className="step">
          <span>3</span>
          <div className='step-root'>
            <h3>Achieve Your Goals</h3>
            <p>
              Stay organized, get reminders and work toward
              your dream job.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default HowItWorks;