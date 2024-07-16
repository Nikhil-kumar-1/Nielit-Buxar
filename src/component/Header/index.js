import { Link } from "react-router-dom";

import { Button } from '@mui/base/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../searchbox";

const Header = () => {
    return (
        <>
            <header className="container-fluid myheadr">
            <div className="row text-center">
                <div className="col-md-3">
                    <img src="../../assets/image/logo.jpg" className="img-fluid myimg"/>
                </div>
                <div className="col-md-8">
                    <p className="mt-4">
                    <b>
                    राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान ,बक्सर<br/>
National Institute of Electronics & Information Technology,Buxar<br/></b>
An Autonomous Scientific Society of Ministry of Electronics & Information Technology (MeitY), Government of India
                    </p>
                </div>
            </div>
                
            </header>

        </>
    )
};
export default Header;