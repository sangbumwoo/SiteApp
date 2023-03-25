export default function Signin() {
  return (
    <div className="row d-flex justify-content-center">
      <h1 className="text-center my-3 bs-text-mlrngreen">Sign-in</h1>
      <div className="col-md-4 border py-3">
        <form className="">
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="signin-email">
              Email address
            </label>
            <input type="email" id="signin-email" className="form-control" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="signin-password">
              Password
            </label>
            <input
              type="password"
              id="signin-password"
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
  )
}
