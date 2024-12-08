const Folder = () => {
  return (
    <div className="relative group/folder w-[200px] h-[200px] rounded-md overflow-hidden">
      {/* -- back-cover -- */}
      <svg
        width="200"
        height="136"
        viewBox="0 0 200 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[17px] left-0"
      >
        <mask id="path-1-inside-1_2811_4597" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.883 0C33.1613 0 31.6328 1.10172 31.0883 2.73509L29.8234 6.52982C28.7345 9.79656 25.6774 12 22.2339 12H8C3.58172 12 0 15.5817 0 20V128C0 132.418 3.58173 136 8 136H192C196.418 136 200 132.418 200 128V20C200 15.5817 196.418 12 192 12H89.7661C86.3226 12 83.2655 9.79656 82.1766 6.52982L80.9117 2.73509C80.3672 1.10172 78.8387 0 77.117 0H34.883Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.883 0C33.1613 0 31.6328 1.10172 31.0883 2.73509L29.8234 6.52982C28.7345 9.79656 25.6774 12 22.2339 12H8C3.58172 12 0 15.5817 0 20V128C0 132.418 3.58173 136 8 136H192C196.418 136 200 132.418 200 128V20C200 15.5817 196.418 12 192 12H89.7661C86.3226 12 83.2655 9.79656 82.1766 6.52982L80.9117 2.73509C80.3672 1.10172 78.8387 0 77.117 0H34.883Z"
          fill="#CFB979"
        />
        <path
          d="M31.0883 2.73509L30.8986 2.67184L30.8986 2.67184L31.0883 2.73509ZM80.9117 2.73509L81.1014 2.67184L81.1014 2.67184L80.9117 2.73509ZM82.1766 6.52982L81.9869 6.59307L82.1766 6.52982ZM31.278 2.79833C31.7953 1.24663 33.2474 0.2 34.883 0.2V-0.2C33.0752 -0.2 31.4702 0.956807 30.8986 2.67184L31.278 2.79833ZM30.0131 6.59307L31.278 2.79833L30.8986 2.67184L29.6337 6.46658L30.0131 6.59307ZM8 12.2H22.2339V11.8H8V12.2ZM0.2 20C0.2 15.6922 3.69218 12.2 8 12.2V11.8C3.47127 11.8 -0.2 15.4713 -0.2 20H0.2ZM0.2 128V20H-0.2V128H0.2ZM8 135.8C3.69218 135.8 0.2 132.308 0.2 128H-0.2C-0.2 132.529 3.47127 136.2 8 136.2V135.8ZM192 135.8H8V136.2H192V135.8ZM199.8 128C199.8 132.308 196.308 135.8 192 135.8V136.2C196.529 136.2 200.2 132.529 200.2 128H199.8ZM199.8 20V128H200.2V20H199.8ZM192 12.2C196.308 12.2 199.8 15.6922 199.8 20H200.2C200.2 15.4713 196.529 11.8 192 11.8V12.2ZM89.7661 12.2H192V11.8H89.7661V12.2ZM80.722 2.79833L81.9869 6.59307L82.3663 6.46658L81.1014 2.67184L80.722 2.79833ZM77.117 0.2C78.7526 0.2 80.2047 1.24663 80.722 2.79833L81.1014 2.67184C80.5298 0.956806 78.9248 -0.2 77.117 -0.2V0.2ZM34.883 0.2H77.117V-0.2H34.883V0.2ZM89.7661 11.8C86.4087 11.8 83.428 9.65164 82.3663 6.46658L81.9869 6.59307C83.103 9.94147 86.2365 12.2 89.7661 12.2V11.8ZM29.6337 6.46658C28.572 9.65164 25.5913 11.8 22.2339 11.8V12.2C25.7635 12.2 28.897 9.94147 30.0131 6.59307L29.6337 6.46658Z"
          fill="#E6D192"
          mask="url(#path-1-inside-1_2811_4597)"
        />
      </svg>

      {/* -- back-file -- */}
      <div
        className="absolute left-[5px] bottom-[40.5px] w-40 h-[100px] rounded-xl -rotate-[3deg] bg-white border-[0.2px] border-black border-opacity-20
          group-hover/folder:-translate-y-4 group-hover/folder:-translate-x-0.5 group-hover/folder:-rotate-[5deg] group-hover/folder:transition-transform group-hover/folder:delay-[35ms] group-hover/folder:duration-300 group-hover/folder:ease-out
          transition-transform duration-200 ease-in-out
      "
      ></div>

      {/* -- front-file -- */}
      <div
        className="absolute right-[8px] bottom-[40.5px] w-40 h-[100px] rounded-xl rotate-[4deg] bg-white border-[0.2px] border-black border-opacity-20
          group-hover/folder:-translate-y-5 group-hover/folder:translate-x-0.5 group-hover/folder:rotate-[8deg] group-hover/folder:transition-transform group-hover/folder:delay-75 group-hover/folder:duration-300 group-hover/folder:ease-out
          transition-transform duration-200 ease-in-out
      "
      ></div>

      {/* -- front-cover -- */}
      <svg
        width="200"
        height="124"
        viewBox="0 0 200 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0
              group-hover/folder:translate-y-[30px] group-hover/folder:transition-transform group-hover/folder:duration-300 group-hover/folder:ease-out
              transition-transform duration-200 ease-[cubic-bezier(.45,1.45,.8,1)]
        "
      >
        <mask id="path-1-inside-1_2811_4598" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.8234 5.47018C28.7345 2.20344 25.6774 0 22.2339 0H6C2.68629 0 0 2.68629 0 6V118C0 121.314 2.68629 124 5.99999 124H194C197.314 124 200 121.314 200 118V6C200 2.68629 197.314 0 194 0H89.7661C86.3226 0 83.2655 2.20344 82.1766 5.47018L80.9117 9.26491C80.3672 10.8983 78.8387 12 77.117 12H34.883C33.1613 12 31.6328 10.8983 31.0883 9.26491L29.8234 5.47018Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.8234 5.47018C28.7345 2.20344 25.6774 0 22.2339 0H6C2.68629 0 0 2.68629 0 6V118C0 121.314 2.68629 124 5.99999 124H194C197.314 124 200 121.314 200 118V6C200 2.68629 197.314 0 194 0H89.7661C86.3226 0 83.2655 2.20344 82.1766 5.47018L80.9117 9.26491C80.3672 10.8983 78.8387 12 77.117 12H34.883C33.1613 12 31.6328 10.8983 31.0883 9.26491L29.8234 5.47018Z"
          fill="#E6D192"
        />
        <path
          d="M80.9117 9.26491L81.1014 9.32816L81.1014 9.32816L80.9117 9.26491ZM31.0883 9.26491L31.278 9.20167L31.278 9.20167L31.0883 9.26491ZM82.1766 5.47018L82.3663 5.53342L82.1766 5.47018ZM29.8234 5.47018L30.0131 5.40693L29.8234 5.47018ZM6 0.2H22.2339V-0.2H6V0.2ZM0.2 6C0.2 2.79675 2.79675 0.2 6 0.2V-0.2C2.57583 -0.2 -0.2 2.57584 -0.2 6H0.2ZM0.2 118V6H-0.2V118H0.2ZM5.99999 123.8C2.79674 123.8 0.2 121.203 0.2 118H-0.2C-0.2 121.424 2.57583 124.2 5.99999 124.2V123.8ZM194 123.8H5.99999V124.2H194V123.8ZM199.8 118C199.8 121.203 197.203 123.8 194 123.8V124.2C197.424 124.2 200.2 121.424 200.2 118H199.8ZM199.8 6V118H200.2V6H199.8ZM194 0.2C197.203 0.2 199.8 2.79675 199.8 6H200.2C200.2 2.57583 197.424 -0.2 194 -0.2V0.2ZM89.7661 0.2H194V-0.2H89.7661V0.2ZM81.9869 5.40693L80.722 9.20167L81.1014 9.32816L82.3663 5.53342L81.9869 5.40693ZM80.722 9.20167C80.2047 10.7534 78.7526 11.8 77.117 11.8V12.2C78.9248 12.2 80.5298 11.0432 81.1014 9.32816L80.722 9.20167ZM77.117 11.8H34.883V12.2H77.117V11.8ZM34.883 11.8C33.2474 11.8 31.7953 10.7534 31.278 9.20167L30.8986 9.32816C31.4702 11.0432 33.0752 12.2 34.883 12.2V11.8ZM31.278 9.20167L30.0131 5.40693L29.6337 5.53342L30.8986 9.32816L31.278 9.20167ZM89.7661 -0.2C86.2365 -0.2 83.103 2.05853 81.9869 5.40693L82.3663 5.53342C83.428 2.34836 86.4087 0.2 89.7661 0.2V-0.2ZM22.2339 0.2C25.5913 0.2 28.572 2.34836 29.6337 5.53342L30.0131 5.40693C28.897 2.05853 25.7635 -0.2 22.2339 -0.2V0.2Z"
          fill="white"
          fillOpacity="0.4"
          mask="url(#path-1-inside-1_2811_4598)"
        />
      </svg>

      {/* -- info -- */}
      <div className="absolute bottom-0 left-0 w-full h-fit px-4 py-3">
        <ul className="flex gap-1.5 text-xs font-mono text-black/30 transition-all duration-150 ease-out group-hover/folder:text-black/15">
          <li>tag</li>
          <div className="w-0.5 h-0.5 self-center bg-black/30 transition-all duration-150 ease-out group-hover/folder:bg-black/15"></div>
          <li>tag</li>
        </ul>
        <h3 className="font-medium">Folder name</h3>
      </div>
    </div>
  );
};
export default Folder;
