import Header from "./Header";

export default function PageLayout({ children, pageTitle }) {
    return (
        <div className='page-wrapper'>
            <div className="fixed-top">
                <Header pageTitle={pageTitle} />
            </div>
            {children}
        </div>
    );
}