import background from "../assets/images/background.jpg";

const Main = () => {
  return (
    <main className="container text-white mx-auto px-10 flex items-center justify-center flex-wrap">
      <section
        className="p-6 lg:px-8 w-[100%] lg:max-w-[50%] min-h-[480px] bg-cover bg-center bg-no-repeat rounded-xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%),url(${background})`,
        }}
      >
        main
      </section>
      <section className="p-6 lg:px-8 w-[100%] lg:max-w-[50%]">main</section>
    </main>
  );
};

export default Main;
