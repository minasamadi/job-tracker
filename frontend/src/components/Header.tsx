import '../styles/Header.css';
export default function Header() {
    return (
        <header className="header d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column ps-5">
                <div className='header-title'>Job Tracker</div>
                 {/* Parameterized later*/}
                <div className='page-title'>Page Name</div>
                </div>
            <div className='header-icon pe-4'>
                <i className="bi bi-person-circle"></i>
                </div>
        </header>
    );
}