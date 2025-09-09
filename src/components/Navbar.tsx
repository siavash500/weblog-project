import "./style/Nav.css";
import { Link } from "react-router-dom";

type NavbarProps = {
    className?: string;
};

export default function Navbar({ className }: NavbarProps) {
    return (
        <div className={`continer ${className}`}> 
            <div className='right'>
                
                <Link to="/">
                    <h1>وبلاگ شخصی</h1>
                </Link>
                
            </div>
            <div className="links-con">
                <Link to="/about">درباره ی ما</Link>
                <Link to="/">خانه</Link>
                
            </div>
        </div>
    );
}
