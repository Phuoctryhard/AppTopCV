import { Badge, Image, Space,Typography } from "antd";
import "./topbar.css"
import { BellFilled, MailOutlined,SettingOutlined,GlobalOutlined} from "@ant-design/icons";
import anh from'../../image/user.jpg';
function Topbar(){
    return (
        <div className="topbar">   
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img className="img-user" src={anh}></img>
                    <span className="logo">Ngô Đình Phước </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <div className="topIconBadgeContainer"> 
                            <Badge count={24} style ={{marginRight:'23px'}} >
                            <BellFilled  style ={{fontSize:24,marginRight:'25px'}}/>
                            </Badge>
                        </div>
                        <div className="topIconBadgeContainer"> 
                            <Badge count={24} style ={{marginRight:'13px'}} >
                            <MailOutlined style ={{fontSize:24,marginRight:'15px'}} />
                            </Badge>                         
                        </div>        
                        <div className="topIconBadgeContainer"> 
                        <Badge count={24} style ={{marginRight:'13px'}} >
                        <GlobalOutlined style ={{fontSize:24,marginRight:'15px'}} />
                        </Badge>                                                                  
                    </div>        
                        <div className="topIconBadgeContainer"> 
                        
                        <SettingOutlined style ={{fontSize:24,marginRight:'15px'}} />                
                    </div>   
                    </div>
                </div>  
            </div>
        </div>
    )
}
export default Topbar;