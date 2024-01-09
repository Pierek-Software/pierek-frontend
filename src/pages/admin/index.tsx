import withAuth from "../../layouts/withAuth";

function Page() {
  return <div>Your protected resource content goes here.</div>;
}

export default withAuth(Page);
