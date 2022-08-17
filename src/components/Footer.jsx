import React from "react";

export default function Footer() {
    return(
        <footer>

            <div className="socialIcons">
                <ul className="social-list">

                    <li className="social-list__item">
                        <a className="social-list__link" href="https://twitter.com/CarlosRanghul">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>

                    <li className="social-list__item">
                        <a className="social-list__link" href="https://www.facebook.com/ranghulcarlos">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>

                    <li className="social-list__item">
                        <a className="social-list__link" href="https://www.instagram.com/karg_ranghul/">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>

                    <li className="social-list__item">
                        <a className="social-list__link" href="https://github.com/ThorondorManwe">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>

                </ul>

            </div>
        </footer>
    )
}