import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import styles from './Footer.module.css';
export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}