import { NextSeo } from 'next-seo';

type SeoProps = {
  title: string;
  description?: string;
};

const Seo = ({ title, description }: SeoProps) => {
  return (
    <NextSeo
      title={`${title} | shomai`}
      description={description}
      openGraph={{
        description
      }}
    />
  );
};

export default Seo;
