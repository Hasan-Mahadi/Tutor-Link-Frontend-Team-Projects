/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  FiSearch,
  FiCalendar,
  FiUser,
  FiBookOpen,
  FiArrowRight,
  FiChevronDown,
} from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Article = {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  readable_publish_date: string;
  user: {
    name: string;
  };
  tag_list: string[];
};

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'all', name: 'All Articles', tag: '' },
    { id: 'education', name: 'Education Tips', tag: 'education' },
    { id: 'platform', name: 'Platform Updates', tag: 'platform' },
    { id: 'industry', name: 'Industry News', tag: 'news' },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const activeTag =
          categories.find((cat) => cat.id === activeCategory)?.tag || '';
        const url = activeTag
          ? `https://dev.to/api/articles?per_page=30&tag=${activeTag}`
          : 'https://dev.to/api/articles?per_page=30';

        const response = await fetch(url);
        const data = await response.json();

        const formattedArticles = data.map((article: any) => ({
          id: article.id,
          title: article.title,
          description: article.description,
          cover_image:
            article.cover_image ||
            'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
          url: article.url,
          readable_publish_date: article.readable_publish_date,
          user: { name: article.user.name },
          tag_list: article.tag_list,
        }));

        setArticles(formattedArticles);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [activeCategory]);

  useEffect(() => {
    let results = articles;

    if (searchTerm) {
      results = results.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          article.tag_list.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    setFilteredArticles(results);
    setDisplayedArticles(showAll ? results : results.slice(0, 8));
  }, [searchTerm, articles, showAll]);

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <>
      <Head>
        <title>Blog & News | TutorConnect</title>
        <meta
          name="description"
          content="Educational tips, platform updates, and industry news from TutorConnect."
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section
          className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20"
          data-aos="fade-down"
        >
          <div className="container mx-auto px-6 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Blog & News
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Educational tips, platform updates, and the latest in tutoring
              industry news
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div
              className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8"
              data-aos="fade-up"
            >
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setShowAll(false);
                      setSearchTerm('');
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    data-aos="zoom-in"
                    data-aos-delay={categories.indexOf(category) * 100}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-12">
          <div className="container mx-auto px-6 max-w-7xl">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-200 rounded mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredArticles.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {displayedArticles.map((article, index) => (
                    <article
                      key={article.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      data-aos="fade-up"
                      data-aos-delay={(index % 4) * 100}
                    >
                      {article.cover_image && (
                        <img
                          src={article.cover_image}
                          alt={article.title}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {article.tag_list.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center">
                            <FiUser className="mr-1" />
                            <span>{article.user.name}</span>
                          </div>
                          <div className="flex items-center">
                            <FiCalendar className="mr-1" />
                            <span>{article.readable_publish_date}</span>
                          </div>
                        </div>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                          Read more <FiArrowRight className="ml-1" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
                {filteredArticles.length > 8 && (
                  <div className="text-center mt-10" data-aos="fade-up">
                    <button
                      onClick={toggleShowAll}
                      className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                    >
                      {showAll ? 'Show Less' : 'See More'}
                      <FiChevronDown
                        className={`ml-2 transition-transform ${showAll ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12" data-aos="fade-in">
                <FiBookOpen className="mx-auto text-4xl text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-indigo-50">
          <div
            className="container mx-auto px-6 max-w-4xl text-center"
            data-aos="zoom-in"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest educational tips and
              platform updates
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
