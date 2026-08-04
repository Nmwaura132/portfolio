import { Head } from 'vite-react-ssg';

// og:image must be absolute, so every route resolves against this. Moving to a
// custom domain is a one-line change here rather than an edit in six files.
const SITE = 'https://portfolio-e16.pages.dev';

export function Seo({ title, description, path, image, imageAlt, type = 'website' }) {
  const url = `${SITE}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Nelson Mwaura" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE}/media/${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
