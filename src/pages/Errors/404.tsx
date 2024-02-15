function Notfound() {
  return (
    <>
      <div className="err_page">
        <div className="err_page_right">
          <h1>404</h1>
          <h4>OOPS. Looks like the page you're looking for no longer exists</h4>
          <p>
            Don't worry. Since you're valuable to us we will bring you back to
            safety
          </p>
          <a href="/" className="err_btn">
            Back to home
          </a>
        </div>
      </div>
    </>
  );
}

export default Notfound;
