import {LayoutProps} from "@/layout/Layout.props";

export const Layout = ({children} : LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    );

};

