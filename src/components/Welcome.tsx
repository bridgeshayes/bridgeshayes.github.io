import { cn } from "../lib/utils";
import AnimatedGridPattern from "./magicui/animated-grid-pattern";
import TypingAnimation from "./magicui/typing-animation";

function Welcome() {
  return (
    <div className="z-5 relative h-dvh flex w-full items-center justify-center overflow-hidden  border bg-gray-200 p-20 ">
      <p className="z-10 whitespace-pre-wrap text-center font-medium tracking-tighter text-black dark:text-white">
        <TypingAnimation
          className="text-8xl font-bold text-slate-950 dark:text-white"
          text="WELCOME"
        />
      </p>
      <AnimatedGridPattern
        height={200}
        width={200}
        numSquares={10}
        maxOpacity={0.3}
        duration={2}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}

export default Welcome;
