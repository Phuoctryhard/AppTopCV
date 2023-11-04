import  "./index.css"
import { SearchOutlined,DownOutlined } from  "@ant-design/icons";
import logo from"../../assets/images/logo.png"
import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import * as React from "react";

function HeadingCruitment(){
    const [currentLanguage, setCurrentLanguage] = useState('JavaScript');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('Tất cả địa điểm');

    const [clicked,setClicked] = useState(false);
    const [clickedB,setClickedB] = useState(false);
    const [selectedLocationB, setSelectedLocationB] = useState('Tất cả loại hợp đồng');
    let [searchParams, setSearchParams] = useSearchParams();
    // const [selectedText, setSelectedText] = useState("Tất cả địa điểm");
    useEffect(() => {
        const languageList = ['C++', 'Python','.NET','Java','JavaScript']; // Danh sách các ngôn ngữ để chuyển đổi
        let languageIndex = 0;

        const changeLanguageAutomatically = () => {
            setCurrentLanguage(languageList[languageIndex]);
            languageIndex = (languageIndex + 1) % languageList.length;
        };

        const interval = setInterval(changeLanguageAutomatically, 3000); // Thay đổi ngôn ngữ sau mỗi 2 giây

        return () => clearInterval(interval); // Xóa interval khi unmount component
    }, []);
    const handleClick = () => {
        if (!clicked) {
          // Thực hiện hành động chỉ khi biến 'clicked' là false
          console.log('Clicked');
          setClicked(true); // Sau khi click, set biến clicked thành true
        }
        else{
            setClicked(false);
        }
      };

      const handleClickB = () => {
        if (!clickedB) {
          // Thực hiện hành động chỉ khi biến 'clicked' là false
          console.log('Clicked');
          setClickedB(true); // Sau khi click, set biến clicked thành true
        }
        else{
            setClickedB(false);
        }
      };

      const handleSelectItem = (text) => {
        setClicked(false); // Ẩn dropdown khi một lựa chọn được chọn
        setSelectedLocation(text); // Cập nhật selectedText với nội dung từ thẻ <li>
      };

      const handleSelectItemB = (text) => {
        setClickedB(false); // Ẩn dropdown khi một lựa chọn được chọn
        setSelectedLocationB(text); // Cập nhật selectedText với nội dung từ thẻ <li>
      };


    const [formData, setFormData] = useState({});

    function handleSubmit(event) {
    event.preventDefault();
    // tạo đối tượng form từ dữ liệu từ form đã được submit.
    let newFormData = new FormData(event.target);
    let params = {};
    for (let [key, value] of newFormData.entries()) {
      params[key] = value;
    }

    params["diachi"] =selectedLocation;
    params["hopdong"] = selectedLocationB;
    setSearchParams(params);
  }

  useEffect(() => {
    console.log(searchParams);
    setFormData(searchParams);
  }, [searchParams]);

    
    return (
    <div>  
        <div className="heading">
            <div className="heading_search">
                <h2 className="heading_searchText">  Search your <span className="heading_language">{currentLanguage}</span></h2>
                
            </div>
            <form onSubmit={handleSubmit}>
                <div className="heading_search">    
                    <div className="search"> 
                        <input typy="text" className="search_skill" placeholder="Search by Skill, Position, Company... " name="language" ></input>
                        
                        <button className="search-btn" type="submit"><SearchOutlined  />Search </button>
                        
                    </div>      
                </div>
            
            


                <div className="heading_search">
                    <div className="select-input">
                        <span className="select-input-label" onClick={handleClick}>
                        {selectedLocation} <DownOutlined />
                        </span>
                        {clicked ? (
                        <ul className="dropdown-List">
                        <li className="dropdown-item" onClick={() => handleSelectItem("Tất cả địa điểm")}>
                        <span className="dropdown-text">Tất cả địa điểm</span>
                        </li>
                            <li className="dropdown-item" onClick={() => handleSelectItem("Hồ Chí Minh")} name="diachi">
                            <span className="dropdown-text">Hồ Chí Minh</span>
                            </li>
                            <li className="dropdown-item" onClick={() => handleSelectItem("Đà Nẵng")}>
                            <span className="dropdown-text">Đà Nẵng</span>
                            </li>
                            <li className="dropdown-item" onClick={() => handleSelectItem("Hà Nội")}>
                            <span className="dropdown-text">Hà Nội</span>
                            </li>
                        </ul>
                        ) : null}
                    </div>
                
                    
                    <div className="select-input">
                    <span className="select-input-label">All level     <DownOutlined /></span>
                
                    </div>


                    <div className="select-input">
                        <span className="select-input-label" onClick={handleClickB}>
                        {selectedLocationB} <DownOutlined />
                        </span>
                        {clickedB ? (
                        <ul className="dropdown-List">
                        <li className="dropdown-item" onClick={() => handleSelectItemB("Tất cả loại hợp đồng")}>
                        <span className="dropdown-text">Tất cả loại hợp đồng</span>
                        </li>
                            <li className="dropdown-item" onClick={() => handleSelectItemB("FullTime")}>
                            <span className="dropdown-text">FullTime</span>
                            </li>
                            <li className="dropdown-item" onClick={() => handleSelectItemB("Freelance")}>
                            <span className="dropdown-text">Freelance</span>
                            </li>
                            <li className="dropdown-item" onClick={() => handleSelectItemB("Part-time")}>
                            <span className="dropdown-text">Part-time</span>
                            </li>
                        </ul>
                        ) : null}
                    </div>





                </div>
            </form>  
            


        </div>
    </div>
)}




// function TabUi(){
//     const [activeTab, setActiveTab] = useState(0); // Sử dụng state để theo dõi tab đang active

//     const changeTab = (index) => {
//         setActiveTab(index); // cập nhật activeTab khi tab được chọn
//     }

//     return(

   
//         <div className="Content_tab">
//         <div className="tabs">
//             <div className="tab">
//                 <div
//                     className={`tab-item ${activeTab === 0 ? 'active' : ''}`}
//                     onClick={() => changeTab(0)}
               
//                 >
//                     Tất cả
//                 </div>

//                 <div
//                     className={`tab-item ${activeTab === 1 ? 'active' : ''}`}
//                     onClick={() => changeTab(1)}
//                 >
//                     Việc làm
//                 </div>

//                 <div
//                     className={`tab-item ${activeTab === 2 ? 'active' : ''}`}
//                     onClick={() => changeTab(2)}
//                 >
//                     Công ty
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }





// function Content({ activeTab }){
//     return (
//         <div className="Content">
//             <div className="Content-Side">
//                 <div className="Content_img">
//                     <img className="logo" src={logo}alt="TopDev Logo" />
//                 </div>
//                 <div className="Content_text">
//                     <div className="Content_text-heading">
//                     <h1>Software Developer(Java,Spring,API Restful,MyBatis)</h1>
//                     </div>
//                     <div className="Content_text-company">
//                     <span className="span_company">Nuri Flex</span>
//                     </div>
//                     <div className="Content_text-level">
//                     <p>30 triệu</p>
//                     <p>Junior, Middle, Senior</p>
//                     </div>
//                     <div className="Content_text-place">
//                     <p>Thành phố Thủ Đức, Hồ Chí Minh (In Office)</p>
//                     </div>
//                     <div className="Context_text-language">
//                         <div className="Context-language">
//                             <span>MySQL</span>
//                             <span>Python</span>
//                             <span>BackEnd</span>
//                             <span>Database</span>
//                             <span>React</span>
//                         </div>
//                         <div className="Context_text-time">
//                             <span className="Context-time">30/10/2023</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="Content-Side">
//                 <div className="Content_img">
//                     <img className="logo" src={logo}alt="TopDev Logo" />
//                 </div>
//                 <div className="Content_text">
//                     <div className="Content_text-heading">
//                     <h1>Software Developer(Java,Spring,API Restful,MyBatis)</h1>
//                     </div>
//                     <div className="Content_text-company">
//                     <span className="span_company">Nuri Flex</span>
//                     </div>
//                     <div className="Content_text-level">
//                     <p>30 triệu</p>
//                     <p>Junior, Middle, Senior</p>
//                     </div>
//                     <div className="Content_text-place">
//                     <p>Thành phố Thủ Đức, Hồ Chí Minh (In Office)</p>
//                     </div>
//                     <div className="Context_text-language">
//                     <span>MySQL</span>
//                     <span>Python</span>
//                     <span>BackEnd</span>
//                     <span>Database</span>
//                     <span>React</span>
//                     </div>
//                 </div>
//             </div>


//             <div className="Content-Side">
//                 <div className="Content_img">
//                     <img className="logo" src={logo}alt="TopDev Logo" />
//                 </div>
//                 <div className="Content_text">
//                     <div className="Content_text-heading">
//                     <h1>Software Developer(Java,Spring,API Restful,MyBatis)</h1>
//                     </div>
//                     <div className="Content_text-company">
//                     <span className="span_company">Nuri Flex</span>
//                     </div>
//                     <div className="Content_text-level">
//                     <p>30 triệu</p>
//                     <p>Junior, Middle, Senior</p>
//                     </div>
//                     <div className="Content_text-place">
//                     <p>Thành phố Thủ Đức, Hồ Chí Minh (In Office)</p>
//                     </div>
//                     <div className="Context_text-language">
//                     <span>MySQL</span>
//                     <span>Python</span>
//                     <span>BackEnd</span>
//                     <span>Database</span>
//                     <span>React</span>
//                     </div>
//                 </div>
//             </div>
//         </div>      
//     )
// }


        
// function InfoIncruitment(){

//     return (
//         <div className="Infocruitment">
//             <HeadingCruitment />
//             <div> 
//                 <TabUi />
//             </div>
//             <div>
//                 <Content />
//             </div>
          
//         </div>
//     )
// }
// export default InfoIncruitment;



function TabUi({ activeTab, changeTab }) {
    return(
        <div className="Content_tab">
            <div className="tabs">
                <div className="tab">
                    <div
                        className={`tab-item ${activeTab === 0 ? 'active' : ''}`}
                        onClick={() => changeTab(0)}
                    >
                        Tất cả
                    </div>

                    <div
                        className={`tab-item ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => changeTab(1)}
                    >
                        Việc làm
                    </div>

                    <div
                        className={`tab-item ${activeTab === 2 ? 'active' : ''}`}
                        onClick={() => changeTab(2)}
                    >
                        Công ty
                    </div>
                </div>
            </div>
        </div>
    );
}


// function Content({ activeTab }){
//     return (
//         <div className="Content">
//         {activeTab === 0 && (
//             <div className="Content-Side">
//                 <div className="Content_img">
//                     <img className="logo" src={logo}alt="TopDev Logo" />
//                 </div>
//                 <div className="Content_text">
//                     <div className="Content_text-heading">
//                     <h1>Software Developer(Java,Spring,API Restful,MyBatis)</h1>
//                     </div>
//                     <div className="Content_text-company">
//                     <span className="span_company">Nuri Flex</span>
//                     </div>
//                     <div className="Content_text-level">
//                     <p>30 triệu</p>
//                     <p>Junior, Middle, Senior</p>
//                     </div>
//                     <div className="Content_text-place">
//                     <p>Thành phố Thủ Đức, Hồ Chí Minh (In Office)</p>
//                     </div>
//                     <div className="Context_text-language">
//                         <div className="Context-language">
//                             <span>MySQL</span>
//                             <span>Python</span>
//                             <span>BackEnd</span>
//                             <span>Database</span>
//                             <span>React</span>
//                         </div>
//                         <div className="Context_text-time">
//                             <span className="Context-time">30/10/2023</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="Content-Side">
//                 <div className="Content_img">
//                     <img className="logo" src={logo}alt="TopDev Logo" />
//                 </div>
//                 <div className="Content_text">
//                     <div className="Content_text-heading">
//                     <h1>Software Developer(Java,Spring,API Restful,MyBatis)</h1>
//                     </div>
//                     <div className="Content_text-company">
//                     <span className="span_company">Nuri Flex</span>
//                     </div>
//                     <div className="Content_text-level">
//                     <p>30 triệu</p>
//                     <p>Junior, Middle, Senior</p>
//                     </div>
//                     <div className="Content_text-place">
//                     <p>Thành phố Thủ Đức, Hồ Chí Minh (In Office)</p>
//                     </div>
//                     <div className="Context_text-language">
//                     <span>MySQL</span>
//                     <span>Python</span>
//                     <span>BackEnd</span>
//                     <span>Database</span>
//                     <span>React</span>
//                     </div>
//                 </div>
//             </div>


//             <div className="Content-Side">
//                 <div className="Content_img">
//                     <img className="logo" src={logo}alt="TopDev Logo" />
//                 </div>
//                 <div className="Content_text">
//                     <div className="Content_text-heading">
//                     <h1>Software Developer(Java,Spring,API Restful,MyBatis)</h1>
//                     </div>
//                     <div className="Content_text-company">
//                     <span className="span_company">Nuri Flex</span>
//                     </div>
//                     <div className="Content_text-level">
//                     <p>30 triệu</p>
//                     <p>Junior, Middle, Senior</p>
//                     </div>
//                     <div className="Content_text-place">
//                     <p>Thành phố Thủ Đức, Hồ Chí Minh (In Office)</p>
//                     </div>
//                     <div className="Context_text-language">
//                     <span>MySQL</span>
//                     <span>Python</span>
//                     <span>BackEnd</span>
//                     <span>Database</span>
//                     <span>React</span>
//                     </div>
//                 </div>
//             </div>
//         )}
//         </div>   
//     );
// }

function Content({ activeTab }) {
    return (
        <div className="Content">
            {activeTab === 1 && (
                <div>
                <div className="Content-Side">
                    <div className="Content_img">
                        <img className="logo" src={logo} alt="TopDev Logo" />
                    </div>
                    <div className="Content_text">
                        <div className="Content_text-heading">
                            <h1>Software Developer(Java,Spring,API Restful,MyBatis)</h1>
                        </div>
                        <div className="Content_text-company">
                            <span className="span_company">Nuri Flex</span>
                        </div>
                        <div className="Content_text-level">
                            <p>30 triệu</p>
                            <p>Junior, Middle, Senior</p>
                        </div>
                        <div className="Content_text-place">
                            <p>Thành phố Thủ Đức, Hồ Chí Minh (In Office)</p>
                        </div>
                        <div className="Context_text-language">
                            <span>MySQL</span>
                            <span>Python</span>
                            <span>BackEnd</span>
                            <span>Database</span>
                            <span>React</span>
                        </div>
                        <div className="Context_text-time">
                            <span className="Context-time">30/10/2023</span>
                        </div>
                    </div>
                </div>


                <div className="Content-Side">
                    <div className="Content_img">
                        <img className="logo" src={logo} alt="TopDev Logo" />
                    </div>
                    <div className="Content_text">
                        <div className="Content_text-heading">
                            <h1>Software Developer(Java,Spring,API Restful,MyBatis)</h1>
                        </div>
                        <div className="Content_text-company">
                            <span className="span_company">Nuri Flex</span>
                        </div>
                        <div className="Content_text-level">
                            <p>30 triệu</p>
                            <p>Junior, Middle, Senior</p>
                        </div>
                        <div className="Content_text-place">
                            <p>Thành phố Thủ Đức, Hồ Chí Minh (In Office)</p>
                        </div>
                        <div className="Context_text-language">
                            <span>MySQL</span>
                            <span>Python</span>
                            <span>BackEnd</span>
                            <span>Database</span>
                            <span>React</span>
                        </div>
                        <div className="Context_text-time">
                            <span className="Context-time">30/10/2023</span>
                        </div>
                    </div>
                </div>
                </div>
                
            )}
            {
                activeTab==0 &&(
                    <div className="Content-Side">
                    <div className="Content_img">
                        <img className="logo" src={logo} alt="TopDev Logo" />
                    </div>
                    <div className="Content_text">
                        <div className="Content_text-heading">
                            <h1>Software Developer(Java,Spring,API Restful,MyBatis)</h1>
                        </div>
                        <div className="Content_text-company">
                            <span className="span_company">Nuri Flex</span>
                        </div>
                        <div className="Content_text-level">
                            <p>30 triệu</p>
                            <p>Junior, Middle, Senior</p>
                        </div>
                        <div className="Content_text-place">
                            <p>Thành phố Thủ Đức, Hồ Chí Minh (In Office)</p>
                        </div>
                        <div className="Context_text-language">
                            <span>MySQL</span>
                            <span>Python</span>
                            <span>BackEnd</span>
                            <span>Database</span>
                            <span>React</span>
                        </div>
                        <div className="Context_text-time">
                            <span className="Context-time">30/10/2023</span>
                        </div>
                    </div>
                </div>

                )
            }
        </div>   
    )
}



function InfoIncruitment() {
    const [activeTab, setActiveTab] = useState(0); // Quản lý trạng thái ở InfoIncruitment

    const changeTab = (index) => {
        setActiveTab(index); // Cập nhật activeTab từ InfoIncruitment
    };

    return (
        <div className="Infocruitment">
            <HeadingCruitment />
            <div> 
                <TabUi activeTab={activeTab} changeTab={changeTab} />
            </div>
            <div>
                <Content activeTab={activeTab} /> {/* Truyền activeTab từ InfoIncruitment xuống Content */}
            </div>
        </div>
    );
}

export default InfoIncruitment;
