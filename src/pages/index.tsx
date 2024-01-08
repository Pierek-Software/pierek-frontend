import Navbar from "../components/templates/Navbar";
import Footer from "../components/templates/Footer";
import HeadComponent from "../components/atom/Head";
import { QuickList } from "../components/QuickList";
import { Header } from "../components/Typography";

export default function Home() {
  return (
    <>
      <HeadComponent
        title={"Home Page"}
        description={"YourNextLaptop is trusted website for choosing laptops"}
        keywords={["Laptop", "Laptop Reviews", "Laptop News"]}
      />
      <section
        className="
        flex flex-col
        "
      >
        <Navbar background={true} wave={false} />
        <section className="container">
          <h2 className="py-2 text-3xl font-bold text-gray-900 md:py-5 md:text-4xl">
            Best Laptops Overall
          </h2>

          <QuickList
            content={[
              {
                brand: { name: "HP" },
                product: {
                  name: "TPN-Q286",
                  main_image:
                    "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/713XTyObMWL._AC_SX679_.jpg",
                },
                advantages: ["1", "2", "3"],
                disadvantages: ["1", "2", "3"],
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales purus in nibh euismod, non vehicula augue pulvinar. Vivamus placerat sodales ultricies. Quisque gravida in erat et suscipit. Maecenas eleifend erat a nunc viverra, eget rhoncus lorem auctor. Aliquam sollicitudin eu enim a porttitor. Maecenas lobortis magna eget nulla laoreet, in aliquam justo tincidunt. Aliquam ultrices justo quis est ornare, eu ornare purus iaculis. Cras condimentum orci quam, sodales imperdiet lectus dictum laoreet.",
              },
              {
                brand: { name: "HP" },
                product: {
                  name: "TPN-Q286",
                  main_image:
                    "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/713XTyObMWL._AC_SX679_.jpg",
                },
                advantages: ["1", "2", "3"],
                disadvantages: ["1", "2", "3"],
                description:
                  "Maecenas nec elementum mi. Vestibulum ac cursus tellus. Fusce iaculis quam in erat maximus volutpat. Mauris eu diam vel ipsum placerat pellentesque. Nam ut laoreet velit. In varius tortor ut neque iaculis dapibus. Etiam posuere accumsan libero, sed luctus purus venenatis non. Suspendisse eu erat feugiat, finibus nibh vitae, fermentum purus. Aenean a felis facilisis, vehicula nisi rutrum, tincidunt sem. Maecenas interdum, nisl nec tincidunt lacinia, mi metus convallis arcu, id semper quam ante sit amet lorem. Mauris viverra suscipit neque in vehicula. Duis pretium odio ligula, eget condimentum ligula sollicitudin et. Sed cursus quis massa nec cursus. In convallis suscipit viverra.",
              },
              {
                brand: { name: "HP" },
                product: {
                  name: "TPN-Q286",
                  main_image:
                    "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/713XTyObMWL._AC_SX679_.jpg",
                },
                advantages: ["1", "2", "3"],
                disadvantages: ["1", "2", "3"],
                description:
                  "Nullam tempor lacinia arcu quis pretium. Nunc iaculis vehicula elit, eget vestibulum eros iaculis sed. Nunc a iaculis lectus, eget lacinia sapien. Morbi semper odio ante, eu finibus erat maximus et. Sed blandit interdum diam, sed accumsan nulla placerat et. Ut rhoncus, elit id hendrerit condimentum, justo leo blandit dolor, ut tempor tellus turpis a felis. Morbi condimentum in orci non posuere. Curabitur tellus neque, tempor eget placerat vitae, auctor at nunc. Aliquam orci nisl, sollicitudin a vehicula ac, eleifend eget mauris. Nullam fermentum arcu eu justo tincidunt, ac vulputate urna posuere.",
              },
            ]}
          />
        </section>
      </section>

      <section className="container">
        <h2 className="py-2 text-3xl font-bold text-gray-900 md:py-5 md:text-4xl">
          Reviews
        </h2>

        <div className="flex">
          <div className="space-y-8 underline">
            <Header level={3} linkable={false}>
              Best laptops for gaming
            </Header>
            <Header level={3} linkable={false}>
              Best laptops for gaming under 1000$
            </Header>
            <Header level={3} linkable={false}>
              Best laptops for gaming under 2000$
            </Header>
            <Header level={3} linkable={false}>
              Best laptops for gaming under 3000$
            </Header>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
