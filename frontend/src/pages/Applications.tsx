import { InputGroup } from 'react-bootstrap';
import PageLayout from '../components/PageLayout';
import '../styles/Applications.css';

{/* TODO: Add pagination when applications are generated dynamically */}
export default function Applications() {
    return (
        <PageLayout>
            <div className="applications-content">
                <div className="search-bar-container">
                    <InputGroup className='mt-5'>
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
                            <tr>
                                <td>
                                    {/* TODO: Generate application rows dynamically with map() */}
                                    <input type="checkbox" className="form-check-input me-2" />
                                </td>
                                <td>Company A</td>
                                <td>Software Engineer</td>
                                <td>2024-06-01</td>
                                <td>Applied</td>
                                <td><i className='bi bi-trash'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="form-check-input me-2" />
                                </td>
                                <td>Company B</td>
                                <td>Data Analyst</td>
                                <td>2024-05-28</td>
                                <td>Interview</td>
                                <td><i className='bi bi-trash'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="form-check-input me-2" />
                                </td>
                                <td>Company C</td>
                                <td>Product Manager</td>
                                <td>2024-05-15</td>
                                <td>Offer</td>
                                <td><i className='bi bi-trash'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="form-check-input me-2" />
                                </td>
                                <td>Company A</td>
                                <td>Software Engineer</td>
                                <td>2024-06-01</td>
                                <td>Applied</td>
                                <td><i className='bi bi-trash'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="form-check-input me-2" />
                                </td>
                                <td>Company B</td>
                                <td>Data Analyst</td>
                                <td>2024-05-28</td>
                                <td>Interview</td>
                                <td><i className='bi bi-trash'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="form-check-input me-2" />
                                </td>
                                <td>Company C</td>
                                <td>Product Manager</td>
                                <td>2024-05-15</td>
                                <td>Offer</td>
                                <td><i className='bi bi-trash'></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </PageLayout>
    );
}