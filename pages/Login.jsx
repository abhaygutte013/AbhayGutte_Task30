function Login(){
  return(
    <div className="form-page">
      <div className="form-box">
        <h1>Login</h1>
        <form>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
          />
          <button className="form-btn">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;