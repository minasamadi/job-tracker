import PageLayout from "../components/PageLayout"
import '../styles/ChangePassword.css'

export default function ChangePassword() {
    return (
        <PageLayout>
            <div className="change-password-content ">
                <div className="card h-100 password-card">
                    <div className="card-body">
                        <form className='d-flex flex-column h-100' action="">
                            <div className="row mb-2">
                                <div className="col-12 col-sm-4"><label htmlFor='current-password'>Current Password</label></div>
                                <div className="col-12 col-sm-8"><input name='current-password' id="current-password" className="form-control" required type="password" autoComplete='password' placeholder="Current Password" /></div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-12 col-sm-4"><label htmlFor='new-password'>New Password</label></div>
                                <div className="col-12 col-sm-8"><input name='new-password' id="new-password" className="form-control" required type="password" autoComplete='new-password' placeholder="New Password" /></div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-12 col-sm-4"><label htmlFor='confirm-password'>Confirm</label></div>
                                <div className="col-12 col-sm-8"><input name='confirm-password' id="confirm-password" className="form-control" required type="password" autoComplete='new-password' placeholder="Confirm Password" /></div>
                            </div>
                            <div className='mt-auto'><button className="btn change-password-btn" type="submit">Change</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}