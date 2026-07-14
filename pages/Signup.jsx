function Signup(){
  return(
    <div className="form-page">
      <div className="form-box">
        <h1>Sign Up</h1>
        <form>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Create Password"
          />
          <button className="form-btn">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;