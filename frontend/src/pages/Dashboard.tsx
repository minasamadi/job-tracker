import Header from "../components/Header";
import '../styles/Dashboard.css';
import { BsLinkedin } from "react-icons/bs";
import { SiGlassdoor, SiIndeed } from "react-icons/si";



const dashboardCards = [
    { title: "New Application", icon: "bi-file-earmark-plus", cardClass: "new-app-card" },
    { title: "My Applications", icon: "bi-search", cardClass: "my-app-card" },
    { title: "Report", icon: "bi-bar-chart", cardClass: "report-card" }
];



export default function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            <Header />
            <div className="external-links-strip d-flex justify-content-start gap-4 mt-0 pt-2  ps-5">
                <span className="external-links-label">Explore jobs on:</span>
                <a href="https://linkedin.com/jobs" target="_blank" rel="noopener noreferrer" title="Linkedin">
                    <BsLinkedin size={24} color="#0A66C2" />
                </a>
                <a href="https://glassdoor.com" target="_blank" rel="noopener noreferrer" title="Glassdoor">
                    <SiGlassdoor size={24} color="#0CAA41" />
                </a>
                <a href="https://indeed.com" target="_blank" rel="noopener noreferrer" title="Indeed">
                    <SiIndeed size={24} color="#2164F3" />
                </a>
            </div>
            <main className="row justify-content-center mt-5 g-5">
                {dashboardCards.map(({ title, icon, cardClass }) => (
                    <div className="col-12 col-md-3 " key={title}>
                        <div className={`card dashboard-card shadow ${cardClass}`} >
                            <div className="card-body d-flex flex-column align-items-center">
                                <i className={`bi ${icon} dashboard-card-icon mt-3`}></i>
                                <div className="dashboard-card-title mt-3">{title}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}