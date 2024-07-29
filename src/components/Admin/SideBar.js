import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from 'react-pro-sidebar';
  import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
  import sidebarBg from '../../assets/bg2.jpg';
  import 'react-pro-sidebar/dist/css/styles.css';
  import { FaReact } from "react-icons/fa";
  import { RxDashboard } from "react-icons/rx";
import { Link } from 'react-router-dom';
  
const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
    return (
        <>
            <ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
            <FaReact size={'3em'} color={"00bff"} />
            <span>Tuan Anh App</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<RxDashboard /> }
            // suffix={<span className="badge red">new</span>}
          >
            Dashboard
            <Link to="/admin"></Link>
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="Features"
            icon={<FaGem />}
          >
            <MenuItem> Quản lý user <Link to="/admin/manage-user"></Link></MenuItem>
            <MenuItem> Quản lý bài quizz</MenuItem>
            <MenuItem> Quản lý câu hỏi</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href=""
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                Tuan anhdz
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
        </>
    )
}

export default SideBar;