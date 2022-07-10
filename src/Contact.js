import Footer from "./components/Footer";
import ContactMain from "./components/ContactMain";
export default function Contact(props) {
  return (
    <div id='Main' className={props.darkMode ? "dark":""}>
        <ContactMain/>
    </div>
  );
}
