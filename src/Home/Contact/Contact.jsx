import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { email, subject, message } = data;
    const serviceId = "service_2suk5wm";
    const templateId = "template_3lyq87k";
    const userId = "vRsVS9uPA4-dJP8rv";

    emailjs
      .send(
        serviceId,
        templateId,
        { subject, message, from_email: email },
        userId
      )
      .then((response) => {
        toast.success("Message Send Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        reset();
      })
      .catch((error) => {
        // console.error("Error sending email:", error);
      });
  };

  return (
    <div className="my-24" id="contact">
      <h1 className="text-center font-bold text-3xl md:text-4xl mb-12">
        Contact Me
      </h1>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-4">
        <div className="w-full lg:w-2/3 flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md mx-auto"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register("email")}
                required
                className="input input-bordered w-full"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                {...register("subject")}
                required
                className="input input-bordered w-full"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                {...register("message")}
                required
                className="textarea input-bordered w-full"
              />
            </div>

            <button
              type="submit"
              className="btn bg-red-500 text-white hover:bg-gray-300 hover:text-black border-none"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="divider text-center text-lg font-bold divider-error lg:divider-horizontal">
          OR
        </div>
        <div className="w-full lg:w-1/3 grid grid-flow-row items-center justify-center gap-4">
          <div className="">
            <h2 className="text-base font-bold">
              Email:{" "}
              <span>
                {" "}
                <a
                  href="mailto:atikurrahaman0305@gmail.com"
                  className="font-semibold hover:underline hover:text-red-500 cursor-pointer"
                >
                  atikurrahaman0305@gmail.com
                </a>
              </span>{" "}
            </h2>
            <h2 className="text-base font-bold ">
              Phone:{" "}
              <span>
                <a
                  href="tel:+8801723383575"
                  className="font-semibold hover:underline hover:text-red-500 cursor-pointer"
                >
                  +8801723383575
                </a>
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-4xl font-bold">
            <a
              href="https://github.com/Atik203"
              rel="noreferrer"
              target="_blank"
              className="hover:text-purple-500"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/atikur-rahaman-203cba/"
              rel="noreferrer"
              target="_blank"
              className="hover:text-[#0077b5]"
            >
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
