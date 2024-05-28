import { Container, FollowMe, Projects, Skills, ContactMe } from "./styles";
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import Reactjs from '../../assets/reactjs.svg'
import Nodejs from '../../assets/nodejs.svg'
import Mysql from '../../assets/mysql.svg'
import Javascript from '../../assets/javascript.svg'
import Java from '../../assets/java.svg'
import Html5 from '../../assets/html5.svg'
import Css3 from '../../assets/css3.svg'
import Git from '../../assets/git.svg'

import { Section } from "../../components/Section";
import { Project } from "../../components/Project";
import { Skill } from "../../components/Skill";

export function App() {
    return(
        <Container>
            <header>
                <div>
                    <h1>
                        Hi, i'm
                        <span> Murilo Costa</span>
                    </h1>
                    <span>Front-end Developer</span>
                    <p>
                        I enjoy learning new things, improve myself constantly. I’m starting my career as a developer.
                    </p>
                </div>
                <img src="https://www.github.com/murilocost4.png" alt="" />
            </header>
            
            <main>
                <FollowMe>
                    <span>Follow me</span>

                    <div>
                        <a href="https://www.instagram.com/murilocost4" target="/">
                            <AiOutlineInstagram/>
                        </a>
                        <a href="https://www.linkedin.com/in/murilocoimbracosta" target="/">
                            <AiFillLinkedin/>
                        </a>
                        <a href="https://www.x.com/murilocost24" target="/">
                            <AiOutlineTwitter/>
                        </a>
                        <a href="https://www.github.com/murilocost4" target="/">
                            <AiFillGithub/>
                        </a>
                    </div>

                </FollowMe>

                <Section title="Projects">
                    <a href="https://github.com/murilocost4">see more</a>
                    <Projects>
                        <li>
                            <Project 
                                title="GIT-Fav"
                                skill="Javascript"
                            />
                        </li>
                        <li>
                            <Project 
                                title="SPA-Universe"
                                skill="HTML"
                            />
                        </li>
                        <li>
                            <Project 
                                title="Focus_Timer"
                                skill="Javascript"
                            />
                        </li>
                        <li>
                            <Project 
                                title="api"
                                skill="Javascript"
                            />
                        </li>
                    </Projects>
                </Section>

                <Section title="Skills">
                    <Skills>
                        <li>
                            <Skill>
                                <img src={Javascript} alt="Javascript" />
                                <span>Javascript</span>
                            </Skill>
                        </li>
                        <li>
                            <Skill>
                                <img src={Nodejs} alt="Node" />
                                <span>Node Js</span>
                            </Skill>
                        </li>
                        <li>
                            <Skill>
                                <img src={Reactjs} alt="React" />
                                <span>React Js</span>
                            </Skill>
                        </li>
                        <li>
                            <Skill>
                                <img src={Html5} alt="Html" />
                                <span>HTML</span>
                            </Skill>
                        </li>
                        <li>
                            <Skill>
                                <img src={Css3} alt="Css" />
                                <span>CSS</span>
                            </Skill>
                        </li>
                        <li>
                            <Skill>
                                <img src={Java} alt="Java" />
                                <span>Java</span>
                            </Skill>
                        </li>
                        <li>
                            <Skill>
                                <img src={Mysql} alt="MySQL" />
                                <span>MySQL</span>
                            </Skill>
                        </li>
                        <li>
                            <Skill>
                                <img src={Git} alt="Git" />
                                <span>Git</span>
                            </Skill>
                        </li>
                        
                    </Skills>
                </Section>

                <Section title="Contact-me">
                    <ContactMe>
                        <div>
                            <FiMail/>
                            <span>murilocoimbracosta@gmail.com</span>
                        </div>
                        <div>
                            <FaWhatsapp/>
                            <span>+55 (51) 98939-5886</span>
                        </div>
                    </ContactMe>
                </Section>

            </main>
        </Container>
    )
};