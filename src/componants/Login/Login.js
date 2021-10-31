import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { handleGoogleSignIn, setError, setIsLoading, error } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleLogIn = () => {
    handleGoogleSignIn()
      .then((res) => {
        history.push(redirect_uri);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center align-items-center  vh-100">
          <div className="p-5 aventoura-shadow shadow border text-center bg-white rounded-3">
            <Image fluid src="https://i.ibb.co/ZdNnN5K/image.png" />
            <hr />
            <div className="p-5">
              <Image
                fluid
                src="https://www.google.com/images/hpp/gsa_super_g-64.gif"
              />
              <br />
              <Button
                variant='warning'
                className=" text-white my-3 fs-6 fw-bold"
                onClick={handleGoogleLogIn}
              >
                Continue With Google
              </Button>
            </div>
            <small className='text-danger fw-bold'>{error}</small>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
