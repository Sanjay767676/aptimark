import App from '../App';
import JsonLd from '../components/JsonLd';
import { breadcrumbJsonLd, SITE_DESCRIPTION, webPageJsonLd } from '../seo';

export default function HomePage() {
  const breadcrumbItems = [{ name: 'Home', path: '/' }];

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: 'Aptimark Solutions',
            description: SITE_DESCRIPTION,
            path: '/',
          }),
          breadcrumbJsonLd(breadcrumbItems),
        ]}
      />
      <App />
    </>
  );
}
