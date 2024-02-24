import Breadcrumbs, { Breadcrumb } from "../components/Breadcrumbs";
import HeadComponent from "../components/Head";
import Footer from "../components/templates/Footer";
import Navbar from "../components/templates/Navbar";

export interface ClientLayoutProps {
  breadcrumbs: Breadcrumb[];
  children: any;
  title: string;
  description: string;
  keywords: string[];
  author: any;
  structuredDataJSON: any;
}

const ClientLayout = ({
  children,
  breadcrumbs,
  title,
  description,
  keywords,
  author,
  structuredDataJSON,
}: ClientLayoutProps) => {
  return (
    <>
      <HeadComponent
        title={title}
        description={description}
        keywords={keywords}
        author={author}
        structuredDataJSON={structuredDataJSON}
      />
      <Navbar background={true} />
      <main className="container min-h-screen space-y-4">
        <nav className="mt-4">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </nav>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
