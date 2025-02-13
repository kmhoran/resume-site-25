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
          <p>
            I possess a broad and diverse skill set across various technologies,
            which I've applied in complex backend development and system
            architecture roles. I have advanced proficiency in languages such as
            C, C#, JavaScript, TypeScript, Python, and have worked extensively
            with frameworks and tools like Node.js, React, and Docker. I'm adept
            in both relational and non-relational databases, including SQL,
            NoSQL, and graph databases, and have deep experience with cloud
            platforms such as AWS, GCP, Azure, and Heroku. Additionally, I bring
            expertise in deploying and managing on-premises servers, networking
            protocols, CI/CD pipelines, and implementing DevOps practices. My
            experience spans building microservice architectures, designing with
            domain-driven design (DDD), and utilizing test-driven development
            (TDD) to ensure high-quality, scalable systems. With a strong
            background in infrastructure management through Kubernetes and
            automation tools, I am highly skilled at designing robust,
            maintainable systems that deliver both performance and reliability
            at scale.
          </p>
          <br />
          <h3>What's your experience with system architecture and design?</h3>
          <p>
            I have extensive experience in system architecture and design,
            having been responsible for producing comprehensive architecture and
            design documentation for the past five years. In my current role at
            Amazon, the project lifecycle begins with receiving a formal list of
            business requirements from product managers, followed by the
            creation of both high-level and low-level design documents. The
            high-level design (HLD) serves as the overarching strategy,
            outlining the proposed solution. I present this document to the
            team, partner engineers, and key stakeholders to align on the
            solution approach, ensuring we understand the broader system
            landscape and specific partner team details, SLAs, and any relevant
            tribal knowledge. This collaboration is essential, as our systems
            consist of a complex web of microservices owned by various teams.
            Once we've secured buy-in, I proceed with developing the low-level
            design (LLD), which details the tactical execution of the project.
            The LLD outlines key implementation specifics, including
            configurations, special considerations, testing requirements, and
            feature flagging or gating strategies. It also includes a day-by-day
            breakdown of the level of effort (LOE) for the team to successfully
            execute the project. Through this structured process, I ensure
            clear, actionable designs that guide development and ensure
            successful delivery.
          </p>
          <br />
          <h3>
            {
              "How do you approach problem-solving and debugging in complex systems?"
            }
          </h3>
          <p>
            My approach to problem-solving and debugging in complex systems is
            structured around two core principles: leveraging existing patterns
            and utilizing test-driven development (TDD). For straightforward
            changes or minor bug fixes, I prioritize maintaining consistency by
            extending the existing code patterns and logic. This ensures that
            the solution is easily maintainable and does not introduce
            unnecessary exceptions or complexity into the codebase. When
            tackling more complicated problems or debugging intricate issues, I
            rely on TDD as my guiding framework. I start by isolating a specific
            behavior that needs to change and eliminating any irrelevant
            variables to narrow the focus. I then locate the precise point of
            control for that behavior and write a failing test to validate the
            expected change. From there, I methodically explore all logical
            paths interacting with the identified behavior and add any missing
            tests to cover these areas. With each step, I apply the simplest and
            most maintainable code changes to the behavior-control logic,
            ensuring that the solution is efficient and maintainable.
            Ultimately, the goal is for all tests to pass, providing both
            verification and confidence that the system's integrity remains
            intact.
          </p>
          <br />
          <h3>
            {
              "What frameworks, tools, and platforms do you have experience with?"
            }
          </h3>
          <p>
            I have extensive experience with a wide range of frameworks, tools,
            and platforms that have enabled me to successfully develop, deploy,
            and maintain complex systems. I'm proficient with version control
            systems like Git and GitHub, and containerization technologies such
            as Docker and Kubernetes, including Docker Hub for image management.
            In terms of cloud platforms, I have hands-on experience with AWS,
            GCP, and Azure, allowing me to build and manage scalable,
            high-performance applications in the cloud. For observability and
            monitoring, I've worked with Elasticsearch and Kibana. On the
            development side, I've worked extensively with IDEs like Visual
            Studio, VS Code, and IntelliJ to write clean, efficient code across
            multiple languages and environments. I have also integrated CI/CD
            pipelines using Jenkins and GitHub Actions to streamline
            deployments. Additionally, I have experience with front-end and
            mobile development frameworks including React, AngularJS, React
            Native, and Electron, as well as game development platforms like
            Unity and Xamarin. This diverse toolkit allows me to approach
            software engineering with flexibility and depth, adapting to various
            project needs and technical challenges.
          </p>
          <br />
          <h3>
            {
              "Have you led or mentored engineering teams? If so, how did you approach leadership?"
            }
          </h3>
          <p>
            I have had the privilege of mentoring six engineers, and I approach
            leadership with a strong focus on personalized growth and
            development. I believe in a one-on-one mentorship style that starts
            by understanding my mentee as an individual—exploring their career
            and life goals, with a focus on both short-term objectives and
            long-term aspirations. We work together to set clear, actionable
            steps for the next few months to help them move closer to their
            goals. If their development involves building new skills or
            improving personal discipline, I assign them tasks that promote
            autonomy and require them to take ownership, with regular check-ins
            to discuss progress and results. Additionally, I use my position to
            advocate for my mentees within the team, identifying opportunities
            for them to practice and strengthen the skills they want to develop.
            When I don't have direct influence within their team, I equip them
            with strategies to advocate for themselves, empowering them to work
            with management on their career development. One of the most
            rewarding aspects of mentorship is helping others navigate
            challenges, from the day-to-day difficulties to the more opaque or
            discouraging aspects of the job. I'm passionate about helping
            mentees recognize the joy in their work while providing honest
            feedback on areas for improvement and collaborating on a better path
            forward. Ultimately, I view mentorship as a collaborative and
            mutually rewarding relationship, where both personal and
            professional growth flourish, and I am honored to play a role in
            that journey.
          </p>
          <h3>
            {"What is your experience with cloud services (AWS, Azure, GCP)?"}
          </h3>
          <p>
            I have been working with cloud services for the entirety of my
            professional programming career, spanning over 8 years. In my
            current role at Amazon, I leverage AWS to power a fleet of
            event-driven microservices, ensuring high scalability, reliability,
            and performance. Previously, at my prior company, we utilized a
            hybrid infrastructure comprising on-premises servers, Azure for
            hosting and data layers, and GCP for additional services like
            Firebase. This diverse exposure has given me a deep understanding of
            system architecture in major cloud environments, allowing me to
            design and implement highly effective solutions tailored to specific
            needs. I am proficient in architecting systems across AWS, Azure,
            and GCP, and I am adept at selecting the right tools and services to
            optimize both performance and cost-effectiveness.
          </p>
          <h3>
            {"Can you provide examples of optimizing performance in a system?"}
          </h3>
          <p>
            Optimizing system performance requires a comprehensive approach that
            spans multiple areas, and I employ a variety of strategies to ensure
            scalability, reliability, and efficiency. First, I focus on reducing
            load through caching for frequently accessed data, particularly GET
            requests, and leverage CDNs for static content to minimize latency
            and offload traffic from the origin server. Database optimization
            plays a key role as well, utilizing strategies such as sharding and
            regional data distribution to prevent hot spots, along with
            aggregating data into pre-computed documents like Elasticsearch
            indexes for faster queries. When dealing with complex systems, I
            often transition to an event-driven architecture to eliminate
            unnecessary polling, and utilize asynchronous programming to handle
            I/O-bound tasks concurrently without blocking system resources.
          </p>
          <p>
            For compute-heavy processes, I offload tasks to specialized hosts
            and platforms tailored to resource-intensive operations, ensuring
            the main system remains responsive. On the infrastructure side, I
            implement load balancing and horizontal scaling to handle traffic
            spikes and ensure consistent performance under load. I also optimize
            database queries using SQL analyzers, while implementing pagination
            for large datasets and data compression to reduce response sizes.
            For flexible, high-speed storage, I utilize NoSQL databases when
            applicable, and improve read performance with denormalization in
            cases where it makes sense.
          </p>
          <p>
            Finally, I ensure that the system remains resilient and scalable
            through microservices ownership by dedicated teams, request
            throttling to manage traffic, and circuit breakers to protect
            against external service failures. Instrumentation is critical for
            continuous improvement, allowing me to monitor and measure system
            performance effectively. By combining these strategies—along with
            CI/CD pipelines for consistent testing and deployment—I ensure the
            system remains high-performing and capable of handling peak loads
            with minimal impact.
          </p>
          <br />
          <h3>
            {
              "How do you ensure code quality, maintainability, and best practices in a team?"
            }
          </h3>
          <p>
            I believe in the broken window theory when it comes to code quality:
            just as a single broken window in a neighborhood can lead to further
            neglect and decay, a codebase that allows even small issues to go
            unaddressed is more likely to accumulate further mistakes, poor
            techniques, and ultimately, a lack of maintainability. To prevent
            this, I ensure a strong emphasis on code reviews as a core practice.
            Code reviews help maintain high standards by making every team
            member responsible for not only their own work but for the quality
            of their colleagues' code as well. This shared responsibility
            creates a tangible incentive for everyone to catch mistakes,
            ensuring that defects are addressed early, and preventing technical
            debt from piling up. In addition to thorough code reviews, I lead by
            example, always aiming to demonstrate excellence in my own code,
            both in functionality and design. I also advocate for designating an
            operational excellence champion within the team, or volunteering for
            the role myself, to ensure that best practices are consistently
            followed. It's important to actively model what high-quality code
            looks like, as people will not respect a high standard unless they
            see it being practiced consistently. Encouraging these practices,
            coupled with a culture of accountability, results in a codebase that
            is clean, maintainable, and scalable over time.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;
