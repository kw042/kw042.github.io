import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
      title: 'page rss',
      description: 'rss feed for pages',
      site: context.site,
      items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
      customData: `<language>ja-jp</language>`,
    });
  }