import { InputGroup } from 'react-bootstrap';
import PageLayout from '../components/PageLayout';
import '../styles/Applications.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getApplications, type Application } from '../api/applications';

{/* TODO: Add pagination when applications are generated dynamically */ }
export default function Applications() {
    const [applications, setApplications] = useState<Application[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getApplications()
            .then(data => setApplications(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <PageLayout pageTitle="My applications">
            <div className="applications-content">
                <div className="search-bar-container">
                    <InputGroup>
                        <input type="search" className="form-control" placeholder="Search applications..." />
                        <button className="btn search-btn" type="button">
                            <i className="bi bi-search"></i>
                        </button>
                    </InputGroup>
                </div>
                <div className='bulk-action-bar mt-5'>
                    {/* TODO: will be implemented later  */}
                    3-Selected | change status to:  | Delete | ...
                </div>
                <div className='applications-list table-responsive mt-3'>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope='col'>
                                    <input type="checkbox" className="form-check-input me-2" />
                                </th>
                                <th scope='col'>Company</th>
                                <th scope='col'>Job Title</th>
                                <th scope='col' className="sortable-header"><i className="bi bi-arrow-down-up bg-transparent"></i> Apply Date</th>
                                <th scope='col' className="sortable-header"><i className="bi bi-arrow-down-up bg-transparent"></i> Status</th>
                                <th scope='col'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app) => (
                                <tr
                                    key={app.id}
                                    onClick={() => navigate(`/applications/${app.id}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td onClick={(e) => e.stopPropagation()}>
                                        <input type="checkbox" className="form-check-input me-2" />
                                    </td>
                                    <td>{app.companyName}</td>
                                    <td>{app.jobTitle}</td>
                                    <td>{app.applyDate}</td>
                                    <td>{app.jobStatus}</td>
                                    <td onClick={(e) => e.stopPropagation()}>
                                        <i className='bi bi-trash'></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </PageLayout>
    );
}