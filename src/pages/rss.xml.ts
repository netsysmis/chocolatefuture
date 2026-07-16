// The Chocolate Future - Simple static site (no blog/RSS)
export const GET = async () => {
  return new Response('<rss xmlns:atom="http://www.w3.org/2005/Atom"><atom:title>The Chocolate Future</atom:title><description>Ghana\'s Cocoa Value Chain Initiative</description></rss>');
};
