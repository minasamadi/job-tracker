import Header from "./Header";

export default function PageLayout({children}) {
    return (
        <div className='page-wrapper'>
             <div className="fixed-top">
                <Header />
            </div>
            {children}
        </div>
    );
}