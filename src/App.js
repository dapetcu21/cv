import { Fragment } from "react";

const Page = ({ children }) => <div className="Page">{children}</div>;

const Header = ({ name, email, phone, phoneLink, githubId }) => (
  <div className="Header">
    <div className="Header-main">
      <div className="Header-name">{name}</div>
      <a href={`https://github.com/${githubId}`} className="Header-github">
        github.com/{githubId}
      </a>
    </div>
    <div className="Header-aside">
      <a href={`mailto:${email}`} className="Header-email">
        {email}
      </a>
      <a href={phoneLink} className="Header-phone">
        {phone}
      </a>
    </div>
  </div>
);

const Skill = ({ skill, proficiency }) => (
  <span className={["Skill", `Skill-proficiency${proficiency}`].join(" ")}>
    {skill}
  </span>
);

const Section = ({ title, children, subtitle }) => (
  <div className="Section">
    <div className="Section-title">
      <h3 className="Section-titleText">{title}</h3>
      {subtitle}
    </div>
    {children}
  </div>
);

const Skills = ({ skillGroups }) => (
  <Section
    title="Skills"
    subtitle={
      <span>
        {"("}
        <Skill skill="Proficient" proficiency={0} />
        {", "}
        <Skill skill="Competent" proficiency={1} />
        {", "}
        <Skill skill="Beginner" proficiency={2} />
        {")"}
      </span>
    }
  >
    <div className="Skills-container">
      {skillGroups.map(({ title, skills }) => {
        let firstSkill = true;
        return (
          <Fragment index={title}>
            <div className="Skills-groupTitle">{title}: </div>
            <div className="Skills-group" index={title}>
              {skills.map((proficiencyGroup, proficiency) =>
                proficiencyGroup.map((skill, index) => (
                  <Fragment index={index}>
                    {!firstSkill ? ", " : ((firstSkill = false), false)}
                    <Skill
                      skill={skill}
                      proficiency={proficiency}
                      index={index}
                    />
                  </Fragment>
                ))
              )}
            </div>
          </Fragment>
        );
      })}
    </div>
  </Section>
);

const Entry = ({ title, children }) => (
  <div className="Entry">
    {title}
    {!!children && <ul>{children}</ul>}
  </div>
);

const Project = ({ title, link, children }) => (
  <Entry
    title={
      <div className="Project-title">
        {link ? <a href={link}>{title}</a> : title}
      </div>
    }
  >
    {children}
  </Entry>
);

const Job = ({ title, company, link, period, children }) => (
  <Entry
    title={
      <>
        <div className="Job-title">{title}</div>
        <div className="Job-companyContainer">
          <span className="Job-company">
            {link ? <a href={link}>{company}</a> : company}
          </span>
          {!!period && (
            <span className="Job-period">
              {" ("}
              {period}
              {")"}
            </span>
          )}
        </div>
      </>
    }
  >
    {children}
  </Entry>
);

const skillGroups = [
  {
    title: "Games",
    skills: [
      ["Unreal Engine", "Defold", "C++", "C", "Lua"],
      ["Computer Graphics", "GLSL", "OpenGL", "Metal", "FMOD"],
    ],
  },
  {
    title: "Web",
    skills: [
      [
        "React",
        "Node.js",
        "JS",
        "CSS",
        "TypeScript",
        "FlowType",
        "Redux",
        "Socket.io",
      ],
      [
        "MaterialUI",
        "ReactBootstrap",
        "Styled Components",
        "MobX",
        "SQL",
        "Redis",
        "MongoDB",
      ],
    ],
  },
  {
    title: "Mobile",
    skills: [
      ["React Native", "Objective-C"],
      ["Swift"],
      ["SwiftUI", "Java", "JNI"],
    ],
  },
  {
    title: "Tooling",
    skills: [
      ["Git", "Vim"],
      [
        "Bash",
        "Docker",
        "Networking",
        "Server deployment",
        "CI/CD",
        "Github Actions",
      ],
      ["Python"],
    ],
  },
  {
    title: "Misc",
    skills: [
      ["Arduino", "Embedded AVR"],
      ["Embedded ARM", "Bluetooth LE", "Electronics", "Compilers", "Security"],
      ["UI/UX", "Sound design"],
    ],
  },
  {
    title: "Hobbies",
    skills: [
      [],
      [
        "LARP",
        "Tabletop",
        "Improv theatre",
        "DIY",
        "Sewing",
        "3D CAD",
        "Piano",
        "Singing",
        "Music production",
      ],
    ],
  },
];

const gh = (strings) => "https://github.com/" + strings.join("");

const interrogationLink = "https://interrogation-game.com";
const tgafLink =
  "https://store.steampowered.com/app/2065780/The_Gods_Are_Fickle/";
const tgafDemoLink = "https://critique-gaming.itch.io/the-gods-are-fickle";
const fuiorLink = gh`critique-gaming/fuior`;
const gmaiLink = "https://store.steampowered.com/app/1791900/Good_Morning_AI/";

function App() {
  return (
    <Page>
      <Header
        name="Marius Petcu"
        email="marius@petcu.me"
        phone="(+40) 729 983 468"
        phoneLink="tel:+40729983468"
        githubId="dapetcu21"
      />
      <Skills skillGroups={skillGroups} />
      <div className="App-columns">
        <Section title="Notable Projects">
          <Project title="The Gods are Fickle" link={tgafLink}>
            <li>
              Led the development of a{" "}
              <a href={tgafDemoLink}>turn-based multiplayer tactics game</a> in
              Unreal Engine.
            </li>
            <li>
              Designed architecture, wrote game logic, editor tooling,
              multiplayer, AI, Node.js multiplayer backend and other systems.
            </li>
          </Project>
          <Project title="Fuior" link={fuiorLink}>
            <li>
              Typed programming language for narrative design. Compiles to Lua.
              Syntax and linting plugins for Vim, VSCode and Atom.
            </li>
          </Project>
          <Project title="Interrogation" link={interrogationLink}>
            <li>
              Led development for launched conversational puzzle game. Defold,
              Fuior.
            </li>
            <li>
              Developed web-based (React, Redux) tool for designing complex
              conversational trees.
            </li>
            <li>
              Managed build automation, releases and updates on Windows, macOS,
              Linux, iOS, Android and Nintendo Switch.
            </li>
          </Project>
          <Project title="Good Morning A.I." link={gmaiLink}>
            <li>
              Led development for visual novel with tower defense component.
              Defold, Fuior.
            </li>
          </Project>
          <Project title="Kamua" link="https://kamua.com">
            <li>
              Wrote front-end for a web-based AI-assisted video editor. React,
              MobX.
            </li>
          </Project>
          <Project title="SmartSous" link="http://smartsous.com/">
            <li>
              Wrote the client-side (React Native), the data collection I/O
              (Node.js) and the embedded firmware (Arduino + AVR C) for a
              cooking-related IoT project for a customer.
            </li>
          </Project>
        </Section>
        <Section title="Experience">
          <Job
            title="Co-Founder, Lead Developer"
            company="Critique Gaming"
            link="https://critique-gaming.com"
            period="2015-present"
          >
            <li>
              Lead developer for <a href={tgafLink}>TGAF</a>,{" "}
              <a href={interrogationLink}>Interrogation</a>,{" "}
              <a href={gmaiLink}>GMAI</a> and several other in-house or
              commisioned Defold or React projects, leading a team of two other
              programmers.
            </li>
            <li>
              Built full-stack data collection solution for a commisioned
              research game. (React, Node)
            </li>
            <li>
              Experience with CI/CD, build pipelines, network and system
              administration.
            </li>
          </Job>
          <Job
            title="Senior Frontend Developer"
            company="Kamua"
            link="https://kamua.com"
            period="2018-2019"
          >
            <li>Wrote frontend for web video editor.</li>
          </Job>
          <Job
            title="Senior Frontend Developer"
            company="DocProcess"
            period="2017-2018"
          >
            <li>
              Wrote frontend for an invoice processing web platform with React,
              Redux.
            </li>
          </Job>
          <Job
            title="Software Engineer"
            company="Learn Forward"
            period="2014-2015"
          >
            <li>
              Developed authoring tool for HTML5 collaborative text-books.
              Backbone.js, Gulp.
            </li>
          </Job>
          <Job
            title="Debate Trainer, IT&Media Officer"
            company="ARGO Debate"
            period="2013-2017"
          >
            <li>
              Volunteered as debate trainer for a group of high-schoolers.
            </li>
            <li>Built tournament tabulation software (Angular 1).</li>
          </Job>
          <Job
            title="Bachelor's Degree, Computer Science"
            company="Polytechnic University of Bucharest"
            period="2013-2017"
          ></Job>
        </Section>
      </div>
    </Page>
  );
}

export default App;