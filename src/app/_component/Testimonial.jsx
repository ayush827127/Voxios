"use client";
import Slider from "react-slick";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Jane Doe",
    position: "CEO",
    company: "Company A",
    review: "Voxizo transformed our online presence.",
    rating: 5,
  },
  {
    name: "John Smith",
    position: "Marketing Director",
    company: "Company B",
    review: "Exceptional service and results.",
    rating: 4,
  },
  {
    name: "Mary Johnson",
    position: "Founder",
    company: "Startup C",
    review: "Highly recommend Voxizo.",
    rating: 5,
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="bg-purple-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-purple-500 text-white py-8 px-4 mb-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <FaQuoteLeft className="text-white text-4xl mb-4" />
              </div>
              <div className="flex justify-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl mr-1" />
                ))}
              </div>
              <p className="text-white italic mb-4">{`"${testimonial.review}"`}</p>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-sm">
                {testimonial.position}, {testimonial.company}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
