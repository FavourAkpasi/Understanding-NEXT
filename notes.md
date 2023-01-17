## Notes

getStaticProps:
getStaticProps is executed at build time and the returned data is passed to the component as props, this means that the data is the same for all requests and can be fetched at build time.

getServerSideProps:
The main use case for getServerSideProps is when you need to fetch data that depends on the request context, such as the current URL, user's session, or other request-specific information.

SWR (stale-while-revalidate) is used for handling data-fetching Clinet side. It's a combination of two other caching strategies: stale-while-revalidate and cache-first. SWR first returns the cached data and then "revalidates" it by fetching the latest data from the server.
