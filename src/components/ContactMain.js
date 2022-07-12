export default function ContactMain(props) {
  return (
    <div id="cContainer" className={props.darkMode ? "dark" : ""}>
      <div id="cContent">
        <h1 className="ch1">Let's chat 💬</h1>
        <p className="cp1 cp">
          Have an inquiry, or want to connect? Feel free to leave a message
          below, or get in touch via Discord, Twitter, or email.
        </p>
        <p className="cp2 cp">
          It's currently <span className="time">11:26 A.M.</span> for me, so I'm probably awake. I'll get back
          to you soon. <br />
          <span className="fun">Fun Fact: I reply faster on email</span>
        </p>

        <div className="cbox">
          
        </div>



      </div>
    </div>
  );
}
