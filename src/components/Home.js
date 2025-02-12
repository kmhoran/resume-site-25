import React from "react";
import QuickStat from "./QuickStat";
import { VscRocket } from "react-icons/vsc";
import { VscLocation } from "react-icons/vsc";
import { VscGitPullRequest } from "react-icons/vsc";
import { VscCircuitBoard } from "react-icons/vsc";
import { VscSparkleFilled } from "react-icons/vsc";
import { VscCommentDiscussion } from "react-icons/vsc";
import { VscOrganization } from "react-icons/vsc";

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
          <p>As of Q1 2025.</p>
          <div className="quick-stat-container">
            <QuickStat
              icon={<VscLocation />}
              title={"Location"}
              text={"Los Angeles, CA."}
            />
            <QuickStat
              icon={<VscGitPullRequest />}
              title={"Pull Requests Published YTD"}
              text={"182"}
            />
            <QuickStat
              icon={<VscCircuitBoard />}
              title={"Architectural and Low-Level Design Docs Authored YTD"}
              text={"11"}
            />
            <QuickStat
              icon={<VscSparkleFilled />}
              title={"Cost Savings from Migrating to Modern Tooling YTD"}
              text={"$500,000"}
            />
            <QuickStat
              icon={<VscCommentDiscussion />}
              title={"Languages Spoken"}
              text={"English, French"}
            />
            <QuickStat
              icon={<VscOrganization />}
              title={"Total Mentor Relationships"}
              text={"6"}
            />
            <QuickStat
              icon={<VscRocket />}
              title={"Projects Successfully Launched YTD"}
              text={"5"}
            />
          </div>
        </section>
        <section className="faq">
          <h2>FAQs</h2>
          <hr />
          <h3>
            {
              "What technical skills and programming languages are you proficient in?"
            }
          </h3>
          <p>...</p>
          <h3>What's your experience with system architecture and design?</h3>
          <p>...</p>
          <h3>
            {
              "How do you approach problem-solving and debugging in complex systems?"
            }
          </h3>
          <p>...</p>
          <h3>
            {
              "What frameworks, tools, and platforms do you have experience with?"
            }
          </h3>
          <p>...</p>
          <h3>
            {
              "Have you led or mentored engineering teams? If so, how did you approach leadership?"
            }
          </h3>
          <p>...</p>
          <h3>
            {"What is your experience with cloud services (AWS, Azure, GCP)?"}
          </h3>
          <p>...</p>
          <h3>
            {"Can you provide examples of optimizing performance in a system?"}
          </h3>
          <p>...</p>
          <h3>
            {
              "How do you ensure code quality, maintainability, and best practices in a team?"
            }
          </h3>
          <p>...</p>
        </section>
      </div>
    </main>
  );
};

export default Home;
