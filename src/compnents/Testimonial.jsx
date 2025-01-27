import { useState } from "react";
import p1 from "../assets/Awards/p1.png";
import p2 from "../assets/Awards/p2.png";
import p3 from "../assets/Awards/p3.png";
import p4 from "../assets/Awards/p4.png";

const testimonials = [
  {
    image: p1,
    text: `Dear Hatim,

We would like to congratulate you on winning the Engineer's Day Quiz Final. It was a fantastic effort, and you displayed a unique knowledge of the subject. Your excellent engineering knowledge makes you the perfect candidate for the Engineer's Day Quiz Final Winner Award! 

Congratulations!!

"Winning isn’t everything, but wanting to win is."

Best wishes,
Tech Enablement Team`,
  },
  {
    image: p2,
    text: `#BrightSpark-IN/EG Hatim Dalal

Congratulations on performing exceptionally well in your training program and being one of the top performers in your cohort. This is a very well-deserved achievement and it’s a brilliant way to initiate your professional journey. Please do take some time out to celebrate this wonderful achievement during upcoming holidays and keep up the good work.

Wishing you all the success and rewarding career with Mastek!`,
  },
  {
    image: p3,
    text: `#SquadAward-IN/EG Balasubrahmanyam Atchutanna Arun Tiwari Hatim Dalal Sunilkumar Pillai Niranjan Sawant Abhishek Sudhir Jitendra More
I just wanted to say a massive thank you to the entire offshore escalations team for all of your efforts over the last few weeks as we approach Spring code cut-off.  We are currently under 50 PBI’s which is a first-ever for the end of January as far as I know. Our numbers also went down in the last week despite it being busy and we signed off a whopping 25 fixes. Some of which were in preparation for the Spring Census and others to get our fixes in before Spring code cut-off. Which we are on track to do and expect no BTR’s. This is all fantastic news and would not be possible without all your hard work and dedication! Well done Team`,
  },
  {
    image: p4,
    text: `#SparkleAwardINEG Hatim Dalal 
Thank you, Hatim for your Hard work and Dedication, and for picking the additional tasks along with delivering your current project work.`,
  },
  {
    image: p4,
    text: `#SparkleAwardINEG Hatim Dalal Kiran Gidwani SudeepKumar Pullanziodan Jahir Patadafedar
Thank you Hatim Dalal for always showing your passion for the work and for being a great team player.  Your enthusiasm and your progress in terms of working independently in a short span of time is remarkable. `,
  },
];

const Testimonial = () => {
  const [expanded, setExpanded] = useState(Array(testimonials.length).fill(false));

  const toggleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    // <div className="border-t border-neutral-900 bg-gradient-to-b from-neutral-900 via-black to-neutral-800 pt-8 pb-16">
    //   <h2 className="text-4xl font-semibold text-center text-white pb-8">
    //     Testimonials
    //   </h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 lg:px-16">
      <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Testimonials</h1>
        {/* <div className="flex flex-wrap items-center justify-center gap-4"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 lg:px-16">
        {testimonials.map((testimonial, index) => {
          const isExpanded = expanded[index];
          const maxLength = 100;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center bg-neutral-800 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-96 relative">
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black opacity-75"></div>
              </div>

              {/* Text Section */}
              <div className="p-6 text-white">
                <p className="text-sm leading-6">
                  {isExpanded
                    ? testimonial.text
                    : `${testimonial.text.slice(0, maxLength)}${
                        testimonial.text.length > maxLength ? "..." : ""
                      }`}
                </p>
                {testimonial.text.length > maxLength && (
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="mt-4 text-purple-400 hover:underline text-sm"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
