import Breadcrumbs from "../components/atom/Breadcrumbs";
import HeadComponent from "../components/atom/Head";
import Footer from "../components/templates/Footer";
import Navbar from "../components/templates/Navbar";

const ClientLayout = ({
  children,
  breadcrumbs,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <HeadComponent
        title={title}
        description={description}
        keywords={keywords}
      />
      <Navbar background={true} wave={false} />
      <main className="container space-y-5">
        <nav className="my-5">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>

        {children}
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
