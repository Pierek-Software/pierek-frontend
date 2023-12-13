import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";

export default function Page() {
  return (
    <>
      <Navbar background={true} wave={false} />
      <main className="container mt-5">
        <h1>Terms of Service for pierek.com</h1>

        <p>
          <em>Last Updated: 13.12.2023</em>
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Pierek, you agree to comply with and be bound
          by these Terms of Service.
        </p>

        <h2>2. Changes to Terms</h2>
        <p>
          Pierek LTD reserves the right to modify or replace these Terms of
          Service at any time. Your continued use of the Website after any
          changes constitutes acceptance of the new Terms of Service.
        </p>

        <p>
          <strong>7. Disclaimer of Warranties</strong>
        </p>
        <p>
          The Website is provided "as is" without any warranties, expressed or
          implied. Pierek LTD does not warrant the accuracy, completeness, or
          reliability of any content on the Website.
        </p>

        <p>
          <strong>8. Limitation of Liability</strong>
        </p>
        <p>
          Pierek LTD shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of or in connection
          with your use of the Website.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms of Service are governed by and construed in accordance
          with the laws of Katowice, Poland.
        </p>

        <h2>10. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at contact@pierek.com.
        </p>

        <p>
          By using the Website, you acknowledge that you have read, understood,
          and agree to these Terms of Service.
        </p>

        <p>
          <strong>Pierek LTD</strong>
        </p>
        <p>contact@pierek.com</p>
      </main>

      <Footer />
    </>
  );
}
