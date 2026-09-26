import '../styles/Authentication.css';

function Authentication() {
    return (
        <div className='auth-wrapper'>
            <div className='auth-content'>
                <h1 className="site-title mt-5 mb-2">Job Tracker</h1>
                <p className='site-motto '>Keep your job search organized</p>
                <div className="row justify-content-center mt-5 g-4">
                    <section className="col-12 col-md-4">
                        <div className="card h-100 login-card">
                            <div className="card-body">
                                <form className='d-flex flex-column h-100' action="">
                                    <h2 className="form-title mb-4">Login</h2>
                                    <div className="row mb-2">
                                        <div className="col-12 col-sm-3"><label htmlFor='login-username'>Username</label></div>
                                        <div className="col-12 col-sm-9"><input name='username' id="login-username" className="form-control" required type="text" autoComplete='username' placeholder="Username" /></div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-12 col-sm-3"><label htmlFor='login-password'>Password</label></div>
                                        <div className="col-12 col-sm-9"><input name='password' id="login-password" className="form-control" required type="password" autoComplete='current-password' placeholder="Password" /></div>
                                    </div>
                                    <div className='mt-auto'><button className="btn auth-btn" type="submit">Login</button></div>
                                </form>
                            </div>
                        </div>
                    </section>
                    <section className="col-12 col-md-4">
                        <div className="card h-100 register-card">
                            <div className="card-body">
                                <form className='d-flex flex-column h-100' action="">
                                    <h2 className="form-title mb-4">Register</h2>
                                    <div className="row mb-2">
                                        <div className="col-12 col-sm-3"><label htmlFor='register-username'>Username</label></div>
                                        <div className="col-12 col-sm-9"><input name='username' id="register-username" className="form-control" required type="text" autoComplete='username' placeholder="Username" /></div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-12 col-sm-3"><label htmlFor='register-password'>Password</label></div>
                                        <div className="col-12 col-sm-9"><input name='password' id="register-password" className="form-control" required type="password" autoComplete='new-password' placeholder="Password" /></div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-12 col-sm-3"><label htmlFor='register-confirm'>Confirm</label></div>
                                        <div className="col-12 col-sm-9"><input name='confirm-password' id="register-confirm" className="form-control" required type="password" autoComplete='new-password' placeholder="Confirm Password" /></div>
                                    </div>
                                    <div className='mt-auto'><button className="btn auth-btn" type="submit">Register</button></div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Authentication;