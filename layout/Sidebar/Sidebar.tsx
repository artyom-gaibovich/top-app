import {LayoutProps} from "@/layout/Layout.props";
import {SidebarProps} from "@/layout/Sidebar/Sidebar.props";

export const Sidebar = ({...props} : SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Siderbar
        </div>
    );

};

