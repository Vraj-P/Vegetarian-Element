import React from "react";
import "../../styles/Footer.css";

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_Container">
                <div className="row">
                    
                    <div className="Footer_Col">
                        <h4>Khush Patel</h4>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/khush-patel-7748a1174/">LinkedIn</a></li>
                            <li><a href="https://github.com/KhushPatel2003">GitHub</a></li>
                        </ul>
                    </div>

                    <div className="Footer_Col">
                        <h4>Vraj Patel</h4>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/vraj-patel-1baa44197/">LinkedIn</a></li>
                            <li><a href="https://github.com/vraj3174">GitHub</a></li>
                            <li><a href="https://www.vraj-patel.com">Portfolio</a></li>
                        </ul>
                    </div>

                    <div className="Footer_Col">
                        <h4>Ayushi Amin</h4>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/ayushiaminn/">LinkedIn</a></li>
                            <li><a href="https://www.linkedin.com/in/khush-patel-7748a1174/">GitHub</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;