// import { Link } from "react-router-dom";
import NavBox from './NavBox'

export default function Navbar(props) {

  return (
    <div id="Navbar" className={props.darkMode ? "dark":""}>
      <NavBox darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
    </div>
  );
}
