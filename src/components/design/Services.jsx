import { enigmaticsWhiteSymbol, gradient, play } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = () => {
  const [text] = useTypewriter({
    words: [
      "are you excited to continue your backend journey?",
      "do you also want to be a part of world of top tier developers?",
    ],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 70,
  });
  return (
    <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
      {/* Hey explorer, are you excited to continue your backend journey? */}
      <h4>
        Hey explorer, <span>{text}</span>
        <span>
          <Cursor />
        </span>
      </h4>
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

export const VideoChatMessage = () => {
  const [text] = useTypewriter({
    words: ["now lets get you some hands on expereince"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 70,
  });
  return (
    <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
      <h4>
        All set soldier! <span>{text}</span>
        <span>
          <Cursor />
        </span>
      </h4>
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]">
        <img
          src={enigmaticsWhiteSymbol}
          width={26}
          height={26}
          alt="Enigmatics"
        />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        just now
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-n-6"
      />
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <img
        src={play}
        width={24}
        height={24}
        alt="Play"
        className="object-contain mr-3"
      />

      <div className="flex-1 bg-[#D9D9D9]">
        <div className="w-1/2 h-0.5 bg-color-1"></div>
      </div>
    </div>
  );
};
