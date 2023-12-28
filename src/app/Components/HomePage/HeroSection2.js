export default function HeroSection2() {
  return (
    <div
      className="w-screen"
      style={{
        backgroundColor: "black",
        backgroundImage:
          "linear-gradient(170deg, rgba(140.25, 12.27, 96.74, 0.5) 1.76%, rgba(73.68, 97.25, 112.62, 0.46) 49.27%, rgba(36.35, 16.49, 158.31, 0) 100%)",
      }}
    >
      <div className="inline-flex flex-col sm:flex-row  gap-4 sm:gap-8 px-4 sm:px-8 py-32 sm:py-4 relative  ">
        <div className="flex flex-col w-full sm:w-screen items-center gap-4 sm:gap-8 px-4 sm:px-8 py-4 sm:py-8 relative">
          <div className="flex flex-col items-center gap-4 self-stretch w-full relative"></div>
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffa3] text-[24px] text-center tracking-[0] leading-[28.8px] pt-10">
            The Next Generation of Trust and Security
          </p>
          <p className="relative self-stretch [font-family:'Libre_Franklin',Helvetica] font-bold text-transparent  text-4xl sm:text-6xl lg:text-6xl  text-center tracking-[-0.42px] leading-[76.8px]">
            <span className="text-[#ffffff]">
              Revolutionize Your Industry with
              <br />
              Trade suite:
            </span>
            <span className="text-[#8359e8]">&nbsp;</span>
            <span className="text-[#818cf8]">Explore the Possibilities</span>
          </p>
          <button
            className="text-sm font-semibold leading-6 w-27 h-[38px] px-6 py-2 rounded-lg shadow inline-flex items-center justify-center text-white"
            style={{
              backgroundImage: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              borderImage: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              borderImageSlice: "1",
            }}
          >
            Get Started <span aria-hidden="true">&nbsp;→</span>
          </button>
        </div>
      </div>
      <div className="inline-flex flex-col items-center justify-center gap-[32px] relative sm:w-screen">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Libre_Franklin',Helvetica] font-medium text-[#8359e8a3] text-[16px] text-center tracking-[0.27px] leading-[22.4px]  ml-10">
          Powering Tolls And Colaboration For Cripto Curency
        </p>
        <div className="flex flex-row  w-full sm:w-screen items-center justify-center gap-[32px] pt-0 pb-[32px] px-[4%] ">
          <div className="relative w-[102px] h-[21px] top-[5px] left-[25px]">
         
              <img
                className="absolute  h-[30px] top-0 right-[180px] sm:right-[250px]"
                src="./bitcoin-btc-logo-full.png"
              ></img>

              <img
                className="absolute  h-[21px] top-2 right-[100px]"
                src="./xrp-xrp-logo-textmark.png"
              />
              <img
                className="absolute  h-[21px] top-2 left-[20px] sm:left-[50px]"
                src="./ethereum-eth-logo-full-horizontal 1.png"
              />
              <img
                className="absolute  h-[21px] top-2 left-[150px] sm:left-[200px]"
                src="neo-neo-logo-full.png"
              />
            </div>
          </div>
     
      </div>
    </div>
  );
}
