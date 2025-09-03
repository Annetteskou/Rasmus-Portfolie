import AnimatedText from "./AnimatedText";
import SocialIcons from "./SocialIcons";

export default function Header() {
  return (
    <header className="header">
      <article className="vertical-center">
        <h1>
          <AnimatedText
            initialText="I'm"
            animatedTextArray={[
              "Annette Skou.",
              "a Senior Lecturer.",
              "a Web App Developer.",
              "a Dad."
            ]}
          />
        </h1>
        <p>Web App Developer | Senior Lecturer</p>
        <SocialIcons />
      </article>
    </header>
  );
}
