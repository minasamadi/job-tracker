import '../styles/Authentication.css';

function Authentication() {
    return (
        <>
            <div>
                <h1 className="site-title mb-2">Job Tracker</h1>
            </div>
            <div>
                <h6 className='site-motto '>Keep your job search organized</h6>
            </div>
            <div className="row mt-5">
                <section className="col-12 col-md-6">
                    <div className="card bg-light h-100">
                        <div className="card-body">
                            <form action="">
                                <div>
                                    <h4 className="form-title mb-4">Login</h4>
                                    <div className="row mb-2">
                                        <div className="col-2"><label>UserName</label></div>
                                        <div className="col-10"><input className="form-control" type="text" placeholder="Username" /></div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-2"><label>Password</label></div>
                                        <div className="col-10"><input className="form-control" type="password" placeholder="Password" /></div>
                                    </div>
                                    <div><button className="btn auth-btn" type="submit">Login</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="col-12 col-md-6">
                    <div className="card h-100">
                        <div className="card-body">
                            <form action="">
                                <div>
                                    <h4 className="form-title mb-4">Register</h4>
                                    <div className="row mb-2">
                                        <div className="col-2"><label>UserName</label></div>
                                        <div className="col-10"><input className="form-control" type="text" placeholder="Username" /></div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-2"><label>Password</label></div>
                                        <div className="col-10"><input className="form-control" type="password" placeholder="Password" /></div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-2"><label>Confirm</label></div>
                                        <div className="col-10"><input className="form-control" type="password" placeholder="Confirm Password" /></div>
                                    </div>
                                    <div><button className="btn auth-btn" type="submit">Register</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Authentication;