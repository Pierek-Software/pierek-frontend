import React from "react";

const TestimonialCard = ({ avatarSrc, content, userName }) => (
  <div className="rounded-lg bg-white p-6 shadow-md">
    <img
      src={avatarSrc}
      alt="User Avatar"
      className="mx-auto mb-4 h-12 w-12 rounded-full"
    />

    <p className="mb-4 text-gray-700">{content}</p>

    <p className="font-semibold text-gray-600">{userName}</p>
  </div>
);

const SocialProofSection = () => {
  const testimonials = [
    {
      avatarSrc: "https://i.pravatar.cc/80?img=7",
      content:
        "I bought laptop they recommend and now can play Fortnite, Amazon had a discount so the price was okay",
      userName: "john2002",
    },
    {
      avatarSrc: "https://i.pravatar.cc/80?img=8",
      content:
        "Wanted something better to play League of Legends, mostly 144 hz screen because i wanted smoother reaction to skillshoot. Bought one they recommend and it was good shoot",
      userName: "ricky03_02",
    },
    {
      avatarSrc: "https://i.pravatar.cc/80?img=11",
      content:
        "I don't buy anything from their site because i just like laptops, you give me good knowledge what to choose in future",
      userName: "antoni_rapeko",
    },
  ];

  return (
    <section>
      <div className="text-center">
        <h2 className="my-8 text-3xl font-semibold text-gray-800">
          What Users Are Saying
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Map through testimonials and render TestimonialCard */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
