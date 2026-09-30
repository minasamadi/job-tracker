import PageLayout from '../components/PageLayout';
import '../styles/NewApplication.css';

export default function NewApplication() {
    return (
        <PageLayout>
            <div className='new-application-content'>
                <form>
                    <fieldset className='form-section'>
                        <legend>Application Info</legend>
                        <div className='row mt-3'>
                            <div className=' col-12 col-sm-3'>
                                <label className='form-label' htmlFor="job-source">Job Source</label>
                                <select className='form-select' id='job-source'>
                                    <option value="linkedin">Linkedin</option>
                                    <option value="glassdoor">Glassdoor</option>
                                    <option value="indeed">Indeed</option>
                                    <option value="universityPortal">University Portal</option>
                                    <option value="referral">Referral</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className=' col-12 col-sm-3'>
                                <span className='required-star'>*</span>
                                <label className='form-label' htmlFor="apply-date">Apply Date</label>
                                <input type='date' className='form-control' id='apply-date' required />
                            </div>
                            <div className=' col-12 col-sm-3'>
                                <label className='form-label' htmlFor="posted-time">Posted Time</label>
                                <input type='text' className='form-control' id='posted-time' placeholder="e.g. 21 hours ago" />
                            </div>
                            <div className=' col-12 col-sm-3'>
                                <label className='form-label' htmlFor="applicant-count">Applicants Before You</label>
                                <input type='text' className='form-control' id='applicant-count' placeholder='e.g 10' />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className='form-section'>
                        <legend>Job Details</legend>
                        <div className='row mt-3'>
                            <div className=' col-12 col-sm-4'>
                                <span className='required-star'>*</span>
                                <label className='form-label' htmlFor="company-name">Company Name</label>
                                <input type='text' className='form-control' id='company-name' required />
                            </div>
                            <div className=' col-12 col-sm-4'>
                                <span className='required-star'>*</span>
                                <label className='form-label' htmlFor="job-title">Job Title</label>
                                <input type='text' className='form-control' id='job-title' required />
                            </div>
                            <div className=' col-12 col-sm-4'>
                                <label className='form-label' htmlFor="job-link">Job Link</label>
                                <input type='text' className='form-control' id='job-link' />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className=' col-12 col-sm-3'>
                                <label className='form-label' htmlFor="country">Country</label>
                                <input type='text' className='form-control' id='country' />
                            </div>
                            <div className=' col-12 col-sm-3'>
                                <label className='form-label' htmlFor="city">City</label>
                                <input type='text' className='form-control' id='city' />
                            </div>
                            <div className=' col-12 col-sm-3'>
                                <label className='form-label' htmlFor="work-mode">Work Mode</label>
                                <select className='form-select' id='work-mode'>
                                    <option value="onsite">Onsite</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="remote">Remote</option>
                                    <option value="not-specified">Not Specified</option>
                                </select>
                            </div>
                            <div className=' col-12 col-sm-3'>
                                <label className='form-label' htmlFor="employment-type">Employment Type</label>
                                <select className='form-select' id='employment-type'>
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="contract">Contract</option>
                                    <option value="internship">Internship</option>
                                    <option value="temporary">Temporary</option>
                                    <option value="not-specified">Not Specified</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className=' col-12 col-sm-6'>
                                <label className='form-label' htmlFor="job-description">Description</label>
                                <textarea className='form-control' id='job-description' rows={4}></textarea>
                            </div>
                            <div className=' col-12 col-sm-6'>
                                <label className='form-label' htmlFor="job-requirements">Requirements</label>
                                <textarea className='form-control' id='job-requirements' rows={4}></textarea>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className=' col-12 col-sm-6'>
                                <label className='form-label' htmlFor="job-offers">Offers</label>
                                <textarea className='form-control' id='job-offers' rows={4}></textarea>
                            </div>
                            <div className=' col-12 col-sm-6'>
                                <label className='form-label' htmlFor="job-notes">Notes</label>
                                <textarea className='form-control' id='job-notes' rows={4}></textarea>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className=' col-12 col-sm-4'>
                                <label className='form-label' htmlFor="job-poster-name">Job Poster Name</label>
                                <input type='text' className='form-control' id='job-poster-name' />
                            </div>
                            <div className=' col-12 col-sm-4'>
                                <label className='form-label' htmlFor="job-poster-email">Job Poster Email</label>
                                <input type='email' className='form-control' id='job-poster-email' />
                            </div>
                            <div className=' col-12 col-sm-4'>
                                <label className='form-label' htmlFor="job-poster-info">Job Poster Info</label>
                                <input type='text' className='form-control' id='job-poster-info' />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className='form-section'>
                        <legend>Application Status</legend>
                        <div className='row mt-3'>
                            <div className=' col-12 col-sm-4'>
                                <label className='form-label' htmlFor="job-status">Job Status</label>
                                <select className='form-select' id='job-status'>
                                    <option value="viewed">Viewed</option>
                                    <option value="interviewing">Interviewing</option>
                                    <option value="offer-received">Offer Received</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </div>
                            <div className=' col-12 col-sm-4'>
                                <label className='form-label' htmlFor="viewed-date">Viewed Date</label>
                                <input type='date' className='form-control' id='viewed-date' />
                            </div>
                            <div className=' col-12 col-sm-4'>
                                <label className='form-label' htmlFor="response-date">Response Date</label>
                                <input type='date' className='form-control' id='response-date' />
                            </div>
                        </div>
                    </fieldset>
                    <div className='row mt-3'>
                        <div className='col-12 d-flex justify-content-center gap-3'>
                            <button type='reset' className='btn btn-secondary'>Reset</button>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </PageLayout>
    );
}