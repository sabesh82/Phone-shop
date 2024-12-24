import React from "react";
import phone1 from "../../assets/phone/black.png";
import phone2 from "../../assets/phone/purple.png";
import phone3 from "../../assets/phone/yellow1.png";

const ImageList = [
  {
    id: 1,
    img: phone1,
    price: "224.99",
    tag: "New",
    title: "Samsung Galaxy A34 Black",
    description:
      "Get it done in a flash. Powered by an octa-core processor and connected in 5G, Galaxy A34 5G inspires your peak performance whether at work or play. Keep it breezy with room for more with a 6/8GB memory and 128/256GB storage options plus support for a microSD card up to 1TB.Experience these features along with the color of Stylish BlacK",
  },
  {
    id: 2,
    img: phone2,
    price: "257.99",
    tag: "New",
    title: "Samsung Galaxy A34 Purple",
    description:
      "Get it done in a flash. Powered by an octa-core processor and connected in 5G, Galaxy A34 5G inspires your peak performance whether at work or play. Keep it breezy with room for more with a 6/8GB memory and 128/256GB storage options plus support for a microSD card up to 1TB.Experience these features along with the color of Stylish Lilac.",
  },
  {
    id: 3,
    img: phone3,
    price: "225.99",
    tag: "New",
    title: "Samsung Galaxy A34 yellow",
    description:
      "Get it done in a flash. Powered by an octa-core processor and connected in 5G, Galaxy A34 5G inspires your peak performance whether at work or play. Keep it breezy with room for more with a 6/8GB memory and 128/256GB storage options plus support for a microSD card up to 1TB.Experience these features along with the color of Stylish Yellow.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = React.useState(phone1);
  const [title, setTitle] = React.useState("Best & Smart Digital Products");
  const [description, setDescription] = React.useState(
    "Experience innovation and style with the Samsung Galaxy A34, a smartphone designed to elevate your everyday life. Boasting a stunning display, long-lasting battery, and powerful performance, it’s perfect for work, play, and everything in between. Capture memories in brilliant detail with its advanced camera system and enjoy seamless multitasking with its cutting-edge features.Upgrade to the Galaxy A34 - where technology meets elegance."
  );

  return (
    <>
      <div className="min-h-[550px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 relative">
        <div className="h-[700px] w-[700px] bg-gray-400 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>

        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-6 pt-12  lg:pr-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-4xl lg:text-6xl font-bold"
              >
                {title}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {description}
              </p>
              <div
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                <button
                  onClick={handleOrderPopup}
                  className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded duration-200 hover:scale-105"
                >
                  Order Now
                </button>
              </div>
              <div className="flex justify-center lg:justify-left gap-6 py-2 lg:gap-14 bg-white text-black dark:bg-black dark:text-slate-50 rounded-3xl duration-200">
                {ImageList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? phone1 : item.id === 2 ? phone2 : phone3
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    className="flex flex-col lg:flex-row items-center gap-1"
                  >
                    <img
                      data-aos="zoom-in"
                      data-aos-once="true"
                      src={item.img}
                      alt="phone img"
                      className="w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                    />
                    <div className="flex flex-col items-center justify-center lg:items-start">
                      <p className=" lg:text-lg font-bold">${item.price}</p>
                      <p className="text-sm ">{item.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="phone img"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
