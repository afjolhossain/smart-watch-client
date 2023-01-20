import React from "react";
import img from "../../images/about-us.jpg";
import img2 from "../../images/history-img.jpg";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mt-6">ABOUT-US</h1>
      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4 ">
        <div className="mx-auto p-6 ">
          <img className="" src={img} alt="" />
        </div>

        <div className=" mx-auto p-10 h-4/5">
          <div className="bg-black text-center">
            <h1 className="text-3xl p-6 ">
              WELCOME TO <br /> SMART-WATCH FAMILY
            </h1>
            <p className="text-zinc-400 p-6 ">
              One of the world’s leading watchmakers, Frank was founded in
              Switzerland in 1881. Recognized for its iconic Museum dial and
              modern aesthetic, Frank has earned more than 100 patents
            </p>
            <img
              className="mx-auto p-6"
              src="https://frank-jewelry-store.themerex.net/wp-content/uploads/2021/03/frank-jacobs2.png"
              alt=""
            />
          </div>
          <div className="bg-slate-300  mt-10 text-center h-3/5">
            <h1 className="text-3xl p-4 mt-10">CONTACTS-US</h1>
            <p>800-456-7890</p>
            <p>info@example.com</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-center py-6">OUR PARTNERS</h1>
        <div class="grid md:grid-cols-6 sm:grid-cols-1 gap-2 ">
          <div className="mx-auto p-4">
            <img
              src="https://frank-jewelry-store.themerex.net/wp-content/uploads/2021/03/1cl-copyright.png"
              alt=""
            />
          </div>
          <div className="mx-auto p-4">
            <img
              src="https://frank-jewelry-store.themerex.net/wp-content/uploads/2021/03/2cl-copyright.png"
              alt=""
            />
          </div>
          <div className="mx-auto p-4">
            <img
              src="https://frank-jewelry-store.themerex.net/wp-content/uploads/2021/03/3cl-copyright.png"
              alt=""
            />
          </div>
          <div className="mx-auto p-4">
            <img
              src="https://frank-jewelry-store.themerex.net/wp-content/uploads/2021/03/4cl-copyright.png"
              alt=""
            />
          </div>
          <div className="mx-auto p-4">
            <img
              src="https://frank-jewelry-store.themerex.net/wp-content/uploads/2021/03/5cl-copyright.png"
              alt=""
            />
          </div>
          <div className="mx-auto p-4">
            <img
              src="https://frank-jewelry-store.themerex.net/wp-content/uploads/2021/03/6cl-copyright.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="mx-auto p-6 leading-7">
            <h1 className="text-8xl mt-4">
              Over 400 <br /> Years <br /> of Horology
            </h1>
            <p className="leading-7">
              One of the world’s leading watchmakers, Frank was founded in
              Switzerland in 1881. Recognized for its iconic Museum dial and
              modern aesthetic, Frank has earned more than 100 patents and 200
              international awards for watch design and time technology. This
              long, rich heritage of artistry and innovation in design and a
              close association with the arts continues to define the frank
              brand identity today.
            </p>
            <p>
              ne of the world’s leading watchmakers, Frank was founded in
              Switzerland in 1881. Recognized for its iconic Museum dial and
              modern aesthetic, Frank has earned more than 100 patents and 200
              international awards for watch design and time technology. This
              long, rich heritage of artistry and innovation in design and a
              close association with the arts continues to define the frank
              brand identity today.
            </p>
          </div>

          <div className="mx-auto ">
            <img className="h-3/4 p-8" src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
