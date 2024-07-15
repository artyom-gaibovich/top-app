import {HeaderProps} from "@/layout/Header/Header.props";

export const Header = ({...props} : HeaderProps): JSX.Element => {
    return (
        <header {...props}>
            <div>Header</div>
        </header>
    );
};

