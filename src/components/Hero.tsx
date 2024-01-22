import defaultBcg from "../files/images/defaultBcg.jpeg";

type HeroProps = {
  children: React.ReactNode;
  hero?: string;
  style: React.CSSProperties
}

const Hero = ({ children, hero, style }: HeroProps) => {
  return (
    <header style={ style } className={hero}>
      {children}
    </header>
  );
};
export default Hero;

Hero.defaultProps = {
  hero: `bg-center bg-cover min-h-[calc(100vh)]
    bg-no-repeat flex items-center
    justify-center`,
  style: { backgroundImage: `url(${defaultBcg})` },
  // backggroundImage: defaultBcg,
};
