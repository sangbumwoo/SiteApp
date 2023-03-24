export default function Signin() {
  return (
    <div className="row d-flex justify-content-center">
      <div className="text-center h1 my-3 bs-text-mlrngreen">Sign-in</div>
      <div className="col-md-4 border py-3">
        <form className="">
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            <input type="email" id="form2Example1" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-secondary" type="button">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
    // <div className="container bg-success">
    //     <div className="signin-form bg-info d-flex justify-content-center">aaa</div>

    // </div>
  )
}
