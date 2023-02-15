import { Fragment } from "react";
import "./App.css";

const Page = ({ children }) => <div className="Page">{children}</div>;

const Separator = () => <div className="Separator" />;

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

const Entry = ({ title, link, children }) => (
  <div className="Entry">
    <div className="Entry-titleContainer">
      <span className="Entry-title">
        {link ? <a href={link}>{title}</a> : title}
      </span>
    </div>
    {children}
  </div>
);

const skillGroups = [
  {
    title: "Games",
    skills: [
      ["Unreal Engine", "Defold", "C++", "C", "Lua"],
      ["GLSL", "OpenGL", "Metal"],
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
          <Entry
            title="The Gods are Fickle"
            link="https://store.steampowered.com/app/2065780/The_Gods_Are_Fickle/"
          >
            <p>
              Led the development of a turn-based multiplayer tactics game in
              Unreal Engine. Designed its architecture, wrote game logic, editor
              tooling, multiplayer, AI, Node.js backend and various other
              systems.
            </p>
          </Entry>
          <Entry title="The Gods are Fickle">
            <p>
              Led the development of a turn-based multiplayer tactics game in
              Unreal Engine
            </p>
          </Entry>
        </Section>
        <Section title="Career" />
      </div>
    </Page>
  );
}

export default App;
