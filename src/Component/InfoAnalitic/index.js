import { ShoppingCartOutlined,ShoppingOutlined,UserOutlined,DollarCircleOutlined } from "@ant-design/icons";
import { Card,Space,Statistic,Typography , Table} from "antd";
import { useEffect, useState } from "react";
import styles from "./index.module.css"
import { getTotalPage,getReacts } from "../../Api";

        
function DashboardCard({ title, value, icon }) {


    return (
      <div>
      
      <Card style={{width:"200px",height:"200px",marginRight:50}}>
      <Space direction="horizontal">
      {icon}
      <Statistic title={title} value={value} />
      
      </Space>
      </Card>
      </div>
    );
  }
  function RecentOrder() {
    const [reacts,setReacts] = useState([])
    useEffect(()=>{
      getReacts().then((res)=>{
        setReacts(res);
      })
    },[]);
    return (
      <>
        <h1 className={styles.RecentOrder_para}>Recent Posts</h1>
        <table className={styles.recentorder_table}>
          <tr className={styles.recent_tablerow}>
            <th className={styles.table_header}>Text</th>
            <th className={styles.table_header}>Share</th>
            <th className={styles.table_header}>Like</th>
            <th className={styles.table_header}>Love</th>
            <th className={styles.table_header}>Care</th>
            <th className={styles.table_header}>haha</th>
            <th className={styles.table_header}>Angry</th>
            <th className={styles.table_header}>react</th>
            <th className={styles.table_header}>comment</th>
          </tr>
          {
            reacts.map((element,index)=>{
              return (
            <tr className={styles.recent_tablerow}>
            <td className={styles.table_cell}>{element.text}</td>
            <td className={styles.table_cell}>{element.share}</td>
            <td className={styles.table_cell}>{element.like}</td>
            <td className={styles.table_cell}>{element.love}</td>
            <td className={styles.table_cell}>{element.care}</td>

            <td className={styles.table_cell}>{element.haha}</td>
            <td className={styles.table_cell}>{element.angry}</td>
            <td className={styles.table_cell}>{element.react}</td>
            <td className={styles.table_cell}>{element.comment}</td>
          </tr>
              )


            })

          } 
        </table>

      </>
    );
  }
  function InfoHome(){

    const [total,setTotal] = useState([])
    useEffect(()=>{
      getTotalPage().then((res)=>{
        setTotal(res[0]);
      })
    },[])
    console.log(total.name);
    return (
      <div className={styles.analisic}>
  
      <Space size={1} direction="vertical">
      <h1  className={styles.RecentOrder_para}>Page OverView</h1>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
                marginRight:8
              }}
            />
          }
          title={<span style={{ fontSize: '20px', color: 'blue' , fontWeight:500 }}>{"Group"}</span>}
          value={total.name}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
                marginRight:8
              }}
            />
          }
          title={<span style={{ fontSize: '20px', color: 'blue' , fontWeight:500 }}>{"Post"}</span>}
          value={total.like}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
                marginRight:8
              }}
            />
          }
          title={<span style={{ fontSize: '20px', color: 'blue' , fontWeight:500 }}>{"Like"}</span>}
          value={total.like}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
                marginRight:8
              }}
            />
          }
          title={<span style={{ fontSize: '20px', color: 'blue' , fontWeight:500 }}>{"Member"}</span>}
          value={total.follow}
        />
      </Space>
      </Space>  
      <div>
      
      <Space style={{marginTop:50}}>
        <RecentOrder />
      </Space>
      </div>
      </div>

    )

}
export default InfoHome;


// <tr className={styles.recent_tablerow}>
// <td className={styles.table_cell}>Alfreds Futterkiste</td>
// <td className={styles.table_cell}>Alfreds Futterkiste</td>
// <td className={styles.table_cell}>Alfreds Futterkiste</td>
// <td className={styles.table_cell}>Alfreds Futterkiste</td>
// <td className={styles.table_cell}>Maria Anders</td>
// <td className={styles.table_cell}>Germany</td>
// <td className={styles.table_cell}>Alfreds Futterkiste</td>
// <td className={styles.table_cell}>Maria Anders</td>
// <td className={styles.table_cell}>Germany</td>
// </tr>
// <tr className={styles.recent_tablerow}>
// <td className={styles.table_cell}>Alfreds Futterkistfve</td>
// <td className={styles.table_cell}>Alfreds Futterkiste</td>
// <td className={styles.table_cell}>Alfreds Futterkiste</td>
// <td className={styles.table_cell}>Alfreds Futterkiste</td>
// <td className={styles.table_cell}>Maria Anders</td>
// <td className={styles.table_cell}>Germany</td>
// <td className={styles.table_cell}>Alfreds Futterkiste</td>
// <td className={styles.table_cell}>Maria Anders</td>
// <td className={styles.table_cell}>Germany</td>
// </tr>