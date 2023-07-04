import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import {RiCoupon3Fill} from "react-icons/ri";
import { AiOutlineDashboard } from "react-icons/ai";
import { ImBlog, ImBlogger2 } from "react-icons/im";
import { BsCart3 } from "react-icons/bs";
import { FaUserCircle, FaBlog } from "react-icons/fa";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { TbBrandRedux, TbCategory } from "react-icons/tb";
import { VscSymbolColor } from "react-icons/vsc";
import { HiShoppingBag } from "react-icons/hi";
import { GiArchiveResearch } from "react-icons/gi";
import { IoNotificationsSharp } from "react-icons/io5";
import {SiCoinmarketcap} from "react-icons/si";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo navbar-logo">CF</span>
            <span className="lg-logo">Cartify</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <FaUserCircle className="fs-4" />,
              label: "Customers",
            },
            {
              key: "Catalog",
              icon: <BsCart3 className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <BsCart3 className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  icon: <BsCart3 className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <TbBrandRedux className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <TbBrandRedux className="fs-4" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <TbCategory className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <TbCategory className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <VscSymbolColor className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "list-color",
                  icon: <VscSymbolColor className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <HiShoppingBag className="fs-4" />,
              label: "Orders",
            },
            {
              key: "marketing",
              icon: <SiCoinmarketcap className="fs-4" />,
              label: "Marketing",
              children: [
                {
              key: "coupon",
              icon: <RiCoupon3Fill className="fs-4" />,
              label: "Add Coupon",
            },
                {
                  key: "coupon-list",
                  icon: <RiCoupon3Fill className="fs-4" />,
                  label: "Coupon List",
                },
                
              ],
            },
            {
              key: "blogs",
              icon: <ImBlogger2 className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBlog className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBlog className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <GiArchiveResearch className="fs-4" />,
              label: "Enquiries",
            },
            
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-3 align-items-center">
            <div className="position-releative">
              <IoNotificationsSharp className="fs-4" />
              <span className="position-absolute badge bg-warning rounded-circle p-1 ">
                100
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.haMC_PQgpFutBOwrDI8KLAAAAA&pid=Api&P=0&h=180"
                  alt="img"
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0"> Kapil Koushik</h5>
                <p className="mb-0">kapilkoushik0217@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link className="dropdown-item py-1 mb-1" style={{"height":"auto","lineHeight":"20px"}} to="#">
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item py-1 mb-1" style={{"height":"auto","lineHeight":"20px"}} to="#">
                    Signout
                  </Link>
                </li>
               
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
