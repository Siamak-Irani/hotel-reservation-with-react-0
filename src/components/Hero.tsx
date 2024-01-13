import defaultBcg from "../files/images/defaultBcg.jpeg";

type HeroProps = {
  children: React.ReactNode;
  hero?: string;
};

const Hero = ({ children, hero }: HeroProps) => {
  return (
    <header style={{ backgroundImage: "url(" + defaultBcg + ")" }} className={hero}>
      {children}
    </header>
  );
};
export default Hero;

Hero.defaultProps = {
  hero: `min-h-calc(100vh-66px)
    bg-center bg-cover
    bg-no-repeat flex items-center
    justify-center`,
};
