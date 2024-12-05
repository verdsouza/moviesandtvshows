import React from "react";
import Head from "next/head";
import Script from "next/script";

const Privacy = () => {
  const rankMathSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://gravatar.com/drtrailer2022",
        name: "Dr Trailer",
        url: "https://gravatar.com/drtrailer2022",
        image: {
          "@type": "ImageObject",
          "@id": "https://gravatar.com/drtrailer2022",
          url: "https://gravatar.com/drtrailer2022",
          caption: "Dr Trailer",
          inLanguage: "en-US",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://moviesntvshows.netlify.app/#organization",
        name: "Movies & Tv Shows™ - Explore. Discover. Online.",
        url: "https://moviesntvshows.netlify.app",
      },
      {
        "@type": "WebSite",
        "@id": "https://moviesntvshows.netlify.app/#website",
        url: "https://moviesntvshows.netlify.app",
        name: "Movies & Tv Shows™ - Explore. Discover. Online.",
        publisher: {
          "@type": "Organization",
          "@id": "https://moviesntvshows.netlify.app/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://moviesntvshows.netlify.app/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://moviesntvshows.netlify.app/#webpage",
        url: "https://moviesntvshows.netlify.app/",
        name: "Movie",
        datePublished: "2024-01-13T13:00:00+00:00",
        dateModified: "2024-01-13T13:13:00+00:00",
        about: {
          "@type": "Person",
          "@id": "https://gravatar.com/drtrailer2022",
          name: "Dr Trailer",
          url: "https://gravatar.com/drtrailer2022",
          image: {
            "@type": "ImageObject",
            "@id": "https://gravatar.com/drtrailer2022",
            url: "https://gravatar.com/drtrailer2022",
            caption: "Dr Trailer",
            inLanguage: "en-US",
          },
        },
        isPartOf: {
          "@id": "https://moviesntvshows.netlify.app/#website",
        },
        inLanguage: "en-US",
        mainEntity: [
          {
            "@type": "Article",
            "@id": "https://moviesntvshows.netlify.app/",
            url: "https://moviesntvshows.netlify.app/",
            headline: "Movie",
            datePublished: "2024-01-13T13:00:00+00:00",
            dateModified: "2024-01-13T13:13:00+00:00",
            author: {
              "@type": "Person",
              "@id": "https://gravatar.com/drtrailer2022",
              name: "Dr Trailer",
              url: "https://gravatar.com/drtrailer2022",
              image: {
                "@type": "ImageObject",
                "@id": "https://gravatar.com/drtrailer2022",
                url: "https://gravatar.com/drtrailer2022",
                caption: "Dr Trailer",
                inLanguage: "en-US",
              },
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://moviesntvshows.netlify.app/#organization",
              name: "Movies & Tv Shows™ - Explore. Discover. Online.",
              url: "https://moviesntvshows.netlify.app",
            },
          },
          {
            "@type": "Article",
            "@id": "https://moviesntvshows.netlify.app/",
            url: "https://moviesntvshows.netlify.app/",
            headline: "Tvshow",
            datePublished: "2024-01-13T13:00:00+00:00",
            dateModified: "2024-01-13T13:13:00+00:00",
            author: {
              "@type": "Person",
              "@id": "https://gravatar.com/drtrailer2022",
              name: "Dr Trailer",
              url: "https://gravatar.com/drtrailer2022",
              image: {
                "@type": "ImageObject",
                "@id": "https://gravatar.com/drtrailer2022",
                url: "https://gravatar.com/drtrailer2022",
                caption: "Dr Trailer",
                inLanguage: "en-US",
              },
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://moviesntvshows.netlify.app/#organization",
              name: "Movies & Tv Shows™ - Explore. Discover. Online.",
              url: "https://moviesntvshows.netlify.app",
            },
          },
          {
            "@type": "Article",
            "@id": "https://moviesntvshows.netlify.app/",
            url: "https://moviesntvshows.netlify.app/",
            headline: "Adult",
            datePublished: "2024-01-13T13:00:00+00:00",
            dateModified: "2024-01-13T13:13:00+00:00",
            author: {
              "@type": "Person",
              "@id": "https://gravatar.com/drtrailer2022",
              name: "Dr Trailer",
              url: "https://gravatar.com/drtrailer2022",
              image: {
                "@type": "ImageObject",
                "@id": "https://gravatar.com/drtrailer2022",
                url: "https://gravatar.com/drtrailer2022",
                caption: "Dr Trailer",
                inLanguage: "en-US",
              },
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://moviesntvshows.netlify.app/#organization",
              name: "Movies & Tv Shows™ - Explore. Discover. Online.",
              url: "https://moviesntvshows.netlify.app",
            },
          },
        ],
      },
    ],
  });

  return (
    <div>
      <Head>
        <title>Movies & Tv Shows™ | Privacy Policy</title>

        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="https://moviesntvshows.netlify.app/sitemap.xml"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="googlebot" content="index,follow" />
        <meta name="revisit-after" content="1 days" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="movies, tvshow, free movies, free tvshows, watch movie online, watch tvshow online, free movie streaming, free tvshow streaming"
        />
        <meta
          property="description"
          content="Stream HD movies and TV Shows for free Explore. Discover. Online. explore top titles, discover new releases, and start streaming now!"
        />

        <link
          rel="canonical"
          href="https://moviesntvshows.netlify.app/intro/privacy"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Movies & Tv Shows™ " />
        <meta
          property="og:description"
          content="Stream HD movies and TV Shows for free Explore. Discover. Online. explore top titles, discover new releases, and start streaming now!"
        />
        <meta
          property="og:url"
          content="https://moviesntvshows.netlify.app/intro/privacy/"
        />
        <meta property="og:site_name" content="Movies & Tv Shows™ " />
        <meta
          property="og:image"
          content="https://moviesntvshows.netlify.app/og_image.jpg"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="application-name" content="Movies & Tv Shows™ " />
        <meta
          property="article:modified_time"
          content="2024-01-01T13:13:13+00:00"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="https://moviesntvshows.netlify.app/sitemap.xml"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="google-site-verification"
          content="RNN2teFhD-lV1TQ9qcLQiSO5BLBB4DmztyYJS6QLqDg"
        />
        <meta
          name="facebook-domain-verification"
          content="du918bycikmo1jw78wcl9ih6ziphd7"
        />
        <meta
          name="dailymotion-domain-verification"
          content="dmdzuqt3p027t2adn"
        />
        <meta name="monetag" content="35a75bbdeae678c82776e64fb78cdac5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
      </Head>

      <div className="container my-24 px-6 mx-auto">
        <a
          href="https://t.me/watchmovietvshow/"
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-link"
        >
          <h3>
            For Request or Demand Movies & TV Series Join Telegram
            <i className="fab fa-telegram telegram-icon"></i>
          </h3>
        </a>

        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full  px-3 lg:px-6">
              <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
              <p className="font-bold mb-2">Movies & Tv Shows™ </p>
              <p className="text-gray-500 mb-6">
                Movies & Tv Shows™ International(Movies & Tv Shows™) is
                committed to protecting your privacy. This Privacy Policy
                applies only to the Web Sites and applications published by
                Movies & Tv Shows™ International.
              </p>
              <p className="font-bold mb-2">Note: Use of Information</p>
              <p className="text-gray-500 mb-6">Information that we collect </p>
              <p className="text-gray-500 mb-6">
                Movies & Tv Shows™ may collect information from its users in
                three different ways: directly from the user, from traffic
                references of hostingservers and from cookies.
              </p>
              <p className="font-bold mb-2">
                We use the information we collect to:
              </p>
              <p className="text-gray-500 mb-6">
                1. Provide the services you request.{" "}
              </p>
              <p className="text-gray-500 mb-6">
                2. As otherwise described to you at the point of collection or
                with your consent.
              </p>
              <p className="font-bold mb-2">Changes to This Privacy Policy</p>
              <p className="text-gray-500 mb-6">
                We may update this Privacy Policy to reflect changes in our
                practices and service offerings. If we modify our Privacy
                Policy, we will update the "Effective Date" and such changes
                will be effective upon posting.
              </p>

              <p className="text-gray-500">
                We do not make warranties that this site will operate error
                free. If you see an error, please contact the{" "}
                <a
                  className="font-bold text-blue-500 mb-6"
                  href="mailto:drtrailer2022@gmail.com "
                >
                  webmaster
                </a>
                . By entering this site you agree to hold the owners, employees,
                advertisers of Movies & Tv Shows™ free from any and all
                liability.This site (Movies & Tv Shows™ ) do not offer any
                membership.If you have any questions please feel free to{" "}
                <a
                  className="font-bold text-blue-500 mb-6"
                  href="mailto:drtrailer2022@gmail.com.com"
                >
                  contact us
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
