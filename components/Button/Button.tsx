import {ButtonProps} from "@/components/Button/Button.props";
import styles from './Button.module.css';
import cn from "classnames";
import ArrowIcon  from './Vector.svg';
export const Button = ({appearance, arrow = 'none', children, ...props} : ButtonProps ): JSX.Element => {
    return (
        <button
        className={cn(styles.button, {
            [styles.primary] : appearance === 'primary',
            [styles.ghost] : appearance === 'ghost',
        })}
        {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down] : arrow == 'down',
                [styles.right] : arrow == 'right',
            }) }>
                <ArrowIcon></ArrowIcon>
            </span>}
        </button>
    );
};

