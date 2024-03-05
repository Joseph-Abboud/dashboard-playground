import {
  DashboardOutlined,
  ProjectOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: { label: "Dashboard", icon: <DashboardOutlined /> },
  },
  {
    name: "companies",
    list: "/companies",
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",
    meta: {
      label: "Companies",
      icon: <ShopOutlined />,
    },
  },
  {
    name: "contacts",
    list: "/contacts",
    create: "/contacts/new",
    edit: "/contacts/edit/:id",
    meta: {
      label: "Contacts",
      icon: <UserOutlined />,
    },
  },
  {
    name: "tasks",
    list: "/tasks",
    create: "/tasks/new",
    edit: "/tasks/edit/:id",
    meta: {
      label: "Tasks",
      icon: <ProjectOutlined />,
    },
  },
  {
    name: "posts",
    list: "/posts",
    create: "/posts/create",
    edit: "/posts/edit/:id",
    meta: {
      label: "Posts",
      icon: <ProjectOutlined />,
    },
  },
];
