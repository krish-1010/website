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
          It's currently <span className="time">11:26 A.M.</span> for me, so I'm
          probably awake. I'll get back to you soon. <br />
          <span className="fun">Fun Fact: I reply faster on email</span>
        </p>

        <div className="cbox">
          <div className="grid1">
            <h1 className="gridh1">EMAIL</h1>
            <input
              type="text"
              className="emailbox"
              placeholder="example@gmail.com"
            />
            <h1 className="gridh2">MESSAGE</h1>
            <textarea
              name="textarea"
              className="textarea"
              id=""
              cols="30"
              rows="10"
              placeholder="Hi Krish, what's up?">
            </textarea>
            <div className="send">
              <p className="hacky"></p>
              <button className="sendbtn">
                <span className="sendtxt">Send</span>
                <svg
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  id="sendicon"
                  // className={props.darkMode ? "dark" : ""}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="grid2"></div>
        </div>
      </div>
    </div>
  );
}
