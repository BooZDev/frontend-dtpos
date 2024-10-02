"use client";

import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { SlSpeedometer } from "react-icons/sl";
import { Button, Layout, Menu, theme } from "antd";
import { CgBell } from "react-icons/cg";
import Image from "next/image";
import ListPharmacy from "./listPharmacy/ListPharmacy";
import { RiCalendarLine } from "react-icons/ri";
import Search from "antd/es/input/Search";
import ListPharmacyMobile from "./listPharmacy/ListPharmacyMobile";

const { Header, Sider, Content } = Layout;

export default function HomePage() {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-full relative">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={0}
        width={"16rem"}
        className="absolute md:relative z-10 h-full"
      >
        <div className="demo-logo-vertical" />
        <div className="my-4 flex justify-center relative">
          <span className="text-white font-semibold text-xl">DTOPS</span>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              color: "skyblue",
              width: 64,
              height: 64,
            }}
            className="absolute md:opacity-0 md:-left-full block right-0 -translate-y-1/2 top-[56%]"
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <SlSpeedometer />,
              label: "Hoạt động nhà thuốc",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
          }}
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
          <div className="flex">
            <Button
              type="text"
              icon={<CgBell />}
              style={{
                fontSize: "24px",
                width: 64,
                height: 64,
              }}
            />
            <Button
              type="text"
              style={{
                fontSize: "16px",
                width: "max-content",
                height: 64,
                display: "flex",
              }}
            >
              <Image
                src={"/images/logo.png"}
                alt=""
                width={400}
                height={400}
                className="rounded-full w-8 border border-black aspect-square"
              />
              Tên.........
            </Button>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="content-responsive"
        >
          <div>
            <span className="font-bold font-inter text-lg">
              Danh sách nhà thuốc
            </span>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-2">
            <Search placeholder="Tìm kiếm" style={{ width: 300 }} />
            <div className="flex gap-4 justify-end">
              <button className="bg-[#2150B7] flex rounded-md px-1 md:px-3 py-1 md:py-2 items-center gap-2 text-white">
                <span>Tháng 9</span>
                <RiCalendarLine className="text-xl" />
              </button>
              <select className="bg-[#2150B7] flex rounded-md px-1 md:px-3 py-1 md:py-2 items-center text-white outline-none">
                <option value="toanQuoc">Toàn quốc</option>
                <option value="haNoi">Hà Nội</option>
                <option value="thainguyen">Thái Nguyên</option>
              </select>
            </div>
          </div>
          <ListPharmacyMobile />
          <ListPharmacy />
        </Content>
      </Layout>
    </Layout>
  );
}
