

const WEBSITE_HOST_URL = 'https://modernmannerism.com';

export default async function sitemap() {
 
    
    const changeFrequency = 'daily';

   

    const routes = ['', '/about', '/contact', '/blog'].map((route) => ({
        url: `${WEBSITE_HOST_URL}${route}`,
        lastModified: new Date().toISOString(), // Convert current date to ISO 8601 format
        changeFrequency,
    }));

    return [
        ...routes
    ];
}
