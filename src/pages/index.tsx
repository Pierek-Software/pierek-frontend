import { useRouter } from "next/router";
import { QuickList } from "../components/QuickList";
import SocialProofSection from "../components/SocialProof";
import ClientLayout from "../layouts/ClientLayout";
import ReviewsSection from "../components/ReviewsSection";

export default function Home() {
  const router = useRouter();

  return (
    <ClientLayout
      path={router.asPath}
      title={"Title"}
      description={"Description"}
      keywords={["Laptop", "Laptops", "Laptop Review"]}
      breadcrumbs={[{ name: "Home Page", link: "#" }]}
    >
      <ReviewsSection />

      <SocialProofSection />
    </ClientLayout>
  );
}
