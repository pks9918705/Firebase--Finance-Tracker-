import React, { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    console.log("Component is mounted");

    // Clean up function to be executed when the component is unmounted
    return () => {
      console.log("Component is unmounted");
    };
  }, []); // Empty dependency array means the effect will run only once during the component's mount.

  return (
    <div>
      Login
    </div>
  );
}
