import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div>Payment</div>
  )
}

export default Payment