import { getSession } from "next-auth/react";
import React from "react";

const index = ({ session }) => {
  // console.log(session);
  return <div className="p-4">This is the Admin Dashboard</div>;
};

export default index;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
