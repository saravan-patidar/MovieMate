const Error = () => {
  return (
    <section className="flex justify-center h-screen items-center bg-neutral-400 p-10 ">
      <div className="absolute top-12 md:top-auto shadow-inner">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="bg-img"
          className="rounded-xl shadow-2xl "
        />
      </div>
      <div className="container z-10 text-2xl font-extrabold ">
        <div className=" mt-20 md:mt-96">
          <div>
            <h1 className="text-center">404</h1>
          </div>
          <div className="text-center">
            <h3 className="h2">Look like you're lost</h3>
            <p>The page you are looking for is not available!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Error;
