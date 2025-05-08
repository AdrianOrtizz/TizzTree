import style from "./Main.module.css";

const Main = () => {
  return (
    <section className="bg-palette1-primary h-screen p-16 flex flex-col justify-center w-screen">
      <div className={`${style.title} flex flex-col fugaz-one-regular`}>
        <h2 className="text-palette1-secondary text-5xl mb-4">
          Todo lo que sos. Todo en un simple link en tu bio!
        </h2>
        <button className="bg-palette1-third p-2 rounded-lg w-24 mt-2 hover:scale-105 transition funnel-sans-regular">
          Empezar!
        </button>
      </div>
    </section>
  );
};

export default Main;
