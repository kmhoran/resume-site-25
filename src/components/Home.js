import React from "react";
import QuickStat from "./QuickStat";
import { VscRocket } from "react-icons/vsc";
const Home = () => {
  return (
    <main>
      <div className="home-container">
        <div className="hero-image">
          <img src="resources/glass.jpg" />
          <div className="hero-image-text">
            <h1>Kevin Horan</h1>
            <h2>Software Engineering</h2>
          </div>
        </div>
        <section className="quick-stats">
          <h2>Quick Stats</h2>
          <div className="quick-stat-container">
            <QuickStat
              icon={<VscRocket />}
              title={"Test"}
              text={"This is a test..."}
            />
            <QuickStat
              icon={<VscRocket />}
              title={"Test"}
              text={"This is a test..."}
            />
            <QuickStat
              icon={<VscRocket />}
              title={"Test"}
              text={"This is a test..."}
            />
            <QuickStat
              icon={<VscRocket />}
              title={"Test"}
              text={"This is a test..."}
            />
          </div>
        </section>
        <section className="faq">
          <h2>FAQs</h2>
          <hr />
          <h3>
            What technical skills and programming languages are you proficient
            in?
          </h3>
          <p>
            Understanding your core technical expertise is key to matching you
            with the right role.
          </p>
          <h3>
            What are some examples of large-scale systems or projects you’ve
            worked on?
          </h3>
          <p>
            Understanding your core technical expertise is key to matching you
            with the right role.
          </p>
          <h3>
            What frameworks, tools, and platforms do you have experience with?
          </h3>
          <p>
            Understanding your core technical expertise is key to matching you
            with the right role.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;
