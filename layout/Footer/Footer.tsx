import {HeaderProps} from "@/layout/Header/Header.props";
import styles from './Footer.module.css';
import cn from "classnames";
import {format} from 'date-fns';
import {FooterProps} from "@/layout/Footer/Footer.props";

export const Footer = ({className, ...props} : FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)}
            {...props}>
            <div>
                Artyom Gaibovich © {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <div><a href="#" target="_blank">Пользовательское соглашение</a></div>
            <div><a href="#" target="_blank">Политика конфиденциальности</a></div>
        </footer>
    )
}

