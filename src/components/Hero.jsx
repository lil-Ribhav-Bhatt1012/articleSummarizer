import { logo } from "../assets/assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/lil-Ribhav-Bhatt1012")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Streamline your reading experience with Summize, an open-source article
        summarization tool that converts extensive articles into coherent and
        succinct overviews, allowing you to focus on the most crucial
        information.
      </h2>
    </header>
  );
};

export default Hero;
