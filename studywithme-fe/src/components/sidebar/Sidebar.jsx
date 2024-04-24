import { Menu, Layout } from "antd";

const { Sider } = Layout;

const itemMain = ['1', '2', '3', '4', '5'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const SidebarComponent = () => {
    return (
        <Sider width={200} style={{ background:'black' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={itemMain}
          />
        </Sider>
    );
}

export default SidebarComponent;
