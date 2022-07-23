import Tools from "./Tools";
import Footer from "./Footer";

export default function Container(props) {
  return (
    <div id="wrapper" className={props.darkMode ? "dark" : ""}>
      <div className="Container">
      <h1 className="h11">Hey, I'm Krishna &#128075;</h1>
      <p className="p1">
        <span>
          gm☀️! I am Krishna, a 15-year-old blockchain-cum-web developer from
          India. <br></br> My main professionalism is in web development, but I
          also have experience working with latest tech-stacks. <br></br> Apart
          from web dev, I have learned blockchain development and worked with
          big companies like <a className="bluetext" href="https://www.google.com">Layer3</a> and <a className="bluetext" href="https://www.google.com">Thirdweb</a> by building smart contracts for
          their projects using solidity. I am a part-time freelancer :)
        </span>
      </p>

      <h2 className="h22">What I Do 💭</h2>

      <p className="p2">
        I'm passionate about everything technology; from designing and
        developing software, to understanding how the many moving parts of the
        internet work together, to cybersecurity, systems, programming, and so
        much more. I strive to learn more about these things every day, and
        utilize my knowledge to further understand how or why the technology
        around us works.
      </p>

      <h2 className="h23">Technologies 💻</h2>

      <p className="p3">
        I use a variety of tools to streamline my development process and
        increase the quality of both my code, and my projects. Below is a list
        of technologies and languages I've had experience with in the past, or
        use currently.
      </p>

      <Tools></Tools>

      <h2 className="h24">Projects 🛠️</h2>

      <p className="p4">
        In my free time, I enjoy creating open source projects on <a className="bluetext" href="https://www.google.com">GitHub</a>, so I
        can learn from others and showcase what I know. In total, all of my open
        sourced projects have earnt me 118 stars on GitHub, and 10 forks.
      </p>

      <p className="p5">
        if you looking to hire me for any freelancing or consulting work, please
        reach out to me at <a className="bluetext" href="https://www.google.com">Email</a>.
      </p>
      <hr></hr>
      <Footer></Footer>
    </div>
    </div>
  );
}
