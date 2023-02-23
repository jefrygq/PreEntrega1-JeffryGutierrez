import { useDarkModeContext } from "../../context/DarkmodeContext";

const DarkModeButton = () => {
    const {toggleDarkMode} = useDarkModeContext();

    return (
        <div className="form-check form-switch me-auto text-white ms-2">
            <input className="form-check-input" type="checkbox" id="darkModeSwitch" onInput={() => toggleDarkMode()} />
            <label className="form-check-label" htmlFor="darkModeSwitch">DarkMode</label>
        </div>
    );
};

export default DarkModeButton;