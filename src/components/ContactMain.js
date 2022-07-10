export default function Contact(props) {
    return(
        <div id="contactMain">
            <div id="contactMain" className={props.darkMode ? "dark" : ""}>
      <h1 className="contacth1">
      Let's chat 💬
      </h1>
      <p className="contactp1">
      Have an inquiry, or want to connect? Feel free to leave a
      message below, or get in touch via Discord, Twitter, or email. 
      It's currently 2:36 A.M. for me, so I'm probably sleeping.
      </p> 
      <p>
      I'll get back to you soon. <br />
      Fun Fact: I reply faster on email
      </p>
    </div>
        </div>
    );
}