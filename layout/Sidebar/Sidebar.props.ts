import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import styles from './Sidebar.module.css';
export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}