import Section from "./Section";
import Heading from "./Heading";
import snippets from "../constants/index";
import { GradientLight } from "./design/Benefits";
import "./snippet.css";

function Snippets() {
  return (
    <Section crosses>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Complete thsi stack and become a top tier developer at Enigmatics"
          title="MERN Stack, become a full stack developer"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {snippets.map((snippet) => {
            const AnimationComponent = snippet.animation;

            return (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${snippet.backgroundUrl})`,
                }}
                key={snippet.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <div className="h5 mb-5 flex justify-center items-center">
                    {AnimationComponent && <AnimationComponent />}
                  </div>
                  <h5 className="h5 mb-5 ">{snippet.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{snippet.text}</p>
                  <div className="mockup-code">
                    {snippet.code.map((line) => (
                      <pre
                        key={line.prefix}
                        data-prefix={line.prefix}
                        className={line.className}
                      >
                        <code>{line.content}</code>
                      </pre>
                    ))}
                  </div>
                </div>
                {snippet.light && <GradientLight />}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Snippets;
