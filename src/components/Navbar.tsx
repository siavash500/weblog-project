import "./style/Nav.css";
import { Link } from "react-router-dom";

type NavbarProps = {
    className?: string;
};

export default function Navbar({ className }: NavbarProps) {
    return (
        <div className={`continer ${className}`}> 
            <div className='right'>
                
                <div className="right-icon">
                <Link to="/">
                    <h1>وبلاگ شخصی</h1>
                </Link>
                </div>
                <div className="right-register" >
                    <Link to="login" className="Link-login" >ورود</Link>
                    <Link to="register" className="Link-login">ثبت نام</Link>
                </div>
            </div>
            <div className="links-con">
                    <Link to="/about">درباره ی ما</Link>
                <Link to="/">خانه</Link>
                    
            </div>
        </div>
    );
}
