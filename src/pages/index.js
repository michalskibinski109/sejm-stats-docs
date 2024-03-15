import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import logo from "@site/static/img/logo.png";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import ReactPlayer from "react-player";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--8", styles.heroText)}>
            <Heading as="h1" className={clsx("hero__title", styles.center)}>
              <img src={logo} className={styles.logo} alt="Sejm Stats" />
              Sejm Stats{" "}
            </Heading>
            <p className="hero__subtitle">
              Dane, statystyki i analizy sejmowe w zasięgu ręki
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--secondary button--lg",
                  styles.heroButton
                )}
                to="/docs/intro"
              >
                O projekcie
              </Link>
            </div>
          </div>
          <div className={clsx("col col--4", styles.heroVideo)}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=YPKBta1VSA0"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Witaj w ${siteConfig.title}`}
      description="Sejm Stats - transparentność danych sejmowych w zasięgu ręki"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
