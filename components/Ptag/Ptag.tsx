import styles from './Ptag.module.css';
import {PtagProps} from "@/components/Ptag/Ptag.props";
import cn from "classnames";
export const Ptag = ({size, children, ...props} : PtagProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, {
                [styles.small] : size === 'small',
                [styles.middle] : size === 'middle',
                [styles.big] : size === 'big',
            })}
            {...props}
        >
            {children}

        </p>
    );

};

