// import styles from "./banner.module.css"
import { logo1 } from "./banner.module.css"

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral"
}

const Banner = ({headerText}) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img
                    // className={styles.logo1} 
                    className={logo1}

                    src="./GloboLogo.png" alt="logo"
                />
            </div>
            <div 
            className="col-7 mt-5" 
            // style={{color: 'coral'}}
            style={subtitleStyle}
            >{headerText}</div>
        </header>
    );
};

export default Banner;