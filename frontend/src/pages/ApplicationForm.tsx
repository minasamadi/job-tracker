import PageLayout from '../components/PageLayout';
import '../styles/ApplicationForm.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    createApplication,
    getApplicationById,
    updateApplication,
    type CreateApplication,
} from '../api/applications';

const initialFormData: CreateApplication = {
    jobSource: 'linkedin',
    applyDate: new Date().toISOString().split('T')[0],
    postedTime: null,
    applicantCount: null,
    companyName: '',
    jobTitle: '',
    jobLink: null,
    country: null,
    city: null,
    workMode: 'not-specified',
    employmentType: 'not-specified',
    description: null,
    requirements: null,
    offers: null,
    notes: null,
    jobPosterName: null,
    jobPosterEmail: null,
    jobPosterInfo: null,
    jobStatus: 'Applied',
    viewedDate: null,
    responseDate: null,
};

const nullableFields = new Set([
    'postedTime',
    'jobLink',
    'country',
    'city',
    'description',
    'requirements',
    'offers',
    'notes',
    'jobPosterName',
    'jobPosterEmail',
    'jobPosterInfo',
    'viewedDate',
    'responseDate',
]);

export default function ApplicationForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = Boolean(id);

    const [formData, setFormData] = useState<CreateApplication>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!id) {
            setFormData(initialFormData);
            return;
        }

        getApplicationById(Number(id))
            .then((data) => {
                const { id: _ignoredId, ...rest } = data;
                setFormData({
                    ...rest,
                    applyDate: rest.applyDate ? rest.applyDate.split('T')[0] : '',
                    viewedDate: rest.viewedDate ? rest.viewedDate.split('T')[0] : null,
                    responseDate: rest.responseDate ? rest.responseDate.split('T')[0] : null,
                });
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to load application details.');
            });
    }, [id]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        let updatedValue: string | number | null = value;

        if (name === 'applicantCount') {
            updatedValue = value === '' ? null : Math.max(0, Number(value));
        } else if (nullableFields.has(name) && value.trim() === '') {
            updatedValue = null;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: updatedValue,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (isEditMode && id) {
                await updateApplication(Number(id), formData);
                alert('Application updated successfully!');
                navigate('/applications');
            } else {
                await createApplication(formData);
                alert('Application created successfully!');
                setFormData(initialFormData);
            }
        } catch (error) {
            console.error(error);
            const message =
                error instanceof Error
                    ? error.message
                    : isEditMode
                    ? 'Failed to update application.'
                    : 'Failed to create application.';
            alert(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <PageLayout pageTitle={isEditMode ? 'Application Details' : 'New Application'}>
            <div className='new-application-content'>
                <form
                    onSubmit={handleSubmit}
                    onReset={(e) => {
                        e.preventDefault();
                        if (isEditMode) {
                            navigate('/applications');
                        } else {
                            setFormData(initialFormData);
                        }
                    }}
                >
                    <fieldset className='form-section'>
                        <legend>Application Info</legend>
                        <div className='row mt-3'>
                            <div className='col-12 col-sm-3'>
                                <label className='form-label' htmlFor="job-source">Job Source</label>
                                <select className='form-select' id='job-source' name='jobSource' value={formData.jobSource} onChange={handleChange}>
                                    <option value="linkedin">Linkedin</option>
                                    <option value="glassdoor">Glassdoor</option>
                                    <option value="indeed">Indeed</option>
                                    <option value="universityPortal">University Portal</option>
                                    <option value="referral">Referral</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <span className='required-star'>*</span>
                                <label className='form-label' htmlFor="apply-date">Apply Date</label>
                                <input type='date' className='form-control' id='apply-date' name='applyDate' value={formData.applyDate} onChange={handleChange} required />
                            </div>
                            <div className='col-12 col-sm-3'>
                                <label className='form-label' htmlFor="posted-time">Posted Time</label>
                                <input type='text' className='form-control' id='posted-time' name='postedTime' value={formData.postedTime ?? ''} onChange={handleChange} placeholder="e.g. 21 hours ago" />
                            </div>
                            <div className='col-12 col-sm-3'>
                                <label className='form-label' htmlFor="applicant-count">Applicants Before You</label>
                                <input type='number' min={0} className='form-control' id='applicant-count' name='applicantCount' value={formData.applicantCount ?? ''} onChange={handleChange} placeholder='e.g 10' />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className='form-section'>
                        <legend>Job Details</legend>
                        <div className='row mt-3'>
                            <div className='col-12 col-sm-4'>
                                <span className='required-star'>*</span>
                                <label className='form-label' htmlFor="company-name">Company Name</label>
                                <input type='text' className='form-control' id='company-name' name='companyName' value={formData.companyName} onChange={handleChange} required />
                            </div>
                            <div className='col-12 col-sm-4'>
                                <span className='required-star'>*</span>
                                <label className='form-label' htmlFor="job-title">Job Title</label>
                                <input type='text' className='form-control' id='job-title' name='jobTitle' value={formData.jobTitle} onChange={handleChange} required />
                            </div>
                            <div className='col-12 col-sm-4'>
                                <label className='form-label' htmlFor="job-link">Job Link</label>
                                <input type='url' className='form-control' id='job-link' name='jobLink' value={formData.jobLink ?? ''} onChange={handleChange} />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-sm-3'>
                                <label className='form-label' htmlFor="country">Country</label>
                                <input type='text' className='form-control' id='country' name='country' value={formData.country ?? ''} onChange={handleChange} />
                            </div>
                            <div className='col-12 col-sm-3'>
                                <label className='form-label' htmlFor="city">City</label>
                                <input type='text' className='form-control' id='city' name='city' value={formData.city ?? ''} onChange={handleChange} />
                            </div>
                            <div className='col-12 col-sm-3'>
                                <label className='form-label' htmlFor="work-mode">Work Mode</label>
                                <select className='form-select' id='work-mode' name='workMode' value={formData.workMode} onChange={handleChange}>
                                    <option value="onsite">Onsite</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="remote">Remote</option>
                                    <option value="not-specified">Not Specified</option>
                                </select>
                            </div>
                            <div className='col-12 col-sm-3'>
                                <label className='form-label' htmlFor="employment-type">Employment Type</label>
                                <select className='form-select' id='employment-type' name='employmentType' value={formData.employmentType} onChange={handleChange}>
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
                            <div className='col-12 col-sm-6'>
                                <label className='form-label' htmlFor="job-description">Description</label>
                                <textarea className='form-control' id='job-description' name='description' value={formData.description ?? ''} onChange={handleChange} rows={4}></textarea>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <label className='form-label' htmlFor="job-requirements">Requirements</label>
                                <textarea className='form-control' id='job-requirements' name='requirements' value={formData.requirements ?? ''} onChange={handleChange} rows={4}></textarea>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-sm-6'>
                                <label className='form-label' htmlFor="job-offers">Offers</label>
                                <textarea className='form-control' id='job-offers' name='offers' value={formData.offers ?? ''} onChange={handleChange} rows={4}></textarea>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <label className='form-label' htmlFor="job-notes">Notes</label>
                                <textarea className='form-control' id='job-notes' name='notes' value={formData.notes ?? ''} onChange={handleChange} rows={4}></textarea>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-sm-4'>
                                <label className='form-label' htmlFor="job-poster-name">Job Poster Name</label>
                                <input type='text' className='form-control' id='job-poster-name' name='jobPosterName' value={formData.jobPosterName ?? ''} onChange={handleChange} />
                            </div>
                            <div className='col-12 col-sm-4'>
                                <label className='form-label' htmlFor="job-poster-email">Job Poster Email</label>
                                <input type='email' className='form-control' id='job-poster-email' name='jobPosterEmail' value={formData.jobPosterEmail ?? ''} onChange={handleChange} />
                            </div>
                            <div className='col-12 col-sm-4'>
                                <label className='form-label' htmlFor="job-poster-info">Job Poster Info</label>
                                <input type='text' className='form-control' id='job-poster-info' name='jobPosterInfo' value={formData.jobPosterInfo ?? ''} onChange={handleChange} />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className='form-section'>
                        <legend>Application Status</legend>
                        <div className='row mt-3'>
                            <div className='col-12 col-sm-4'>
                                <label className='form-label' htmlFor="job-status">Job Status</label>
                                <select className='form-select' id='job-status' name='jobStatus' value={formData.jobStatus} onChange={handleChange}>
                                    <option value="Applied">Applied</option>
                                    <option value="viewed">Viewed</option>
                                    <option value="interviewing">Interviewing</option>
                                    <option value="offer-received">Offer Received</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </div>
                            <div className='col-12 col-sm-4'>
                                <label className='form-label' htmlFor="viewed-date">Viewed Date</label>
                                <input type='date' className='form-control' id='viewed-date' name='viewedDate' value={formData.viewedDate ?? ''} onChange={handleChange} />
                            </div>
                            <div className='col-12 col-sm-4'>
                                <label className='form-label' htmlFor="response-date">Response Date</label>
                                <input type='date' className='form-control' id='response-date' name='responseDate' value={formData.responseDate ?? ''} onChange={handleChange} />
                            </div>
                        </div>
                    </fieldset>

                    <div className='row mt-3'>
                        <div className='col-12 d-flex justify-content-center gap-3'>
                            <button type='reset' className='btn btn-secondary' disabled={isSubmitting}>
                                {isEditMode ? 'Cancel' : 'Reset'}
                            </button>
                            <button type='submit' className='btn btn-primary' disabled={isSubmitting}>
                                {isSubmitting
                                    ? isEditMode ? 'Updating...' : 'Submitting...'
                                    : isEditMode ? 'Update' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </PageLayout>
    );
}