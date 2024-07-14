import styles from './Tag.module.css';
import {TagProps} from "@/components/Tag/Tag.props";
import cn from "classnames";
export const Tag = ({size='s', color='ghost', className,href, children,...props} : TagProps): JSX.Element => {
    return (
        <p
            className={cn(styles.tag, className,{
                [styles.s] : size === 's',
                [styles.m] : size === 'm',
                [styles.ghost] : color === 'ghost',
                [styles.primary] : color === 'primary',
                [styles.red] : color === 'red',
                [styles.green] : color === 'green',
                [styles.grey] : color === 'ghost',
            })}
            {...props}
        >{
            href
            ? <a href={href}>{children}</a>
            : <>{children}</>
        }
        </p>
    );

};

