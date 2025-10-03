'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface NewsItem {
  date: string;
  link: string;
  title: {
    rendered: string;
  };
}

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      date: '2025-10-04T00:00:00',
      link: '#',
      title: { rendered: 'Minerva Website init' }
    },
    {
      date: '2025-10-03T00:00:00',
      link: '#',
      title: { rendered: 'First Tech Challenge 30 Hour Challenge Complete' }
    },
    {
      date: '2025-09-20T00:00:00',
      link: '#',
      title: { rendered: 'Minerva System Begin!' }
    }
  ]);

  useEffect(() => {
    // Static news items, no fetching needed
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return {
      year,
      md: `${month}.${day}`,
    };
  };

  return (
    <section className="index-News">
      <div className="index-News-Container">
        <div className="ttl-container">
          <h2 className="sw-Ttl js-Animation ttl-Slide">
            <span>S</span>
            <span>Y</span>
            <span>S</span>
            <span>T</span>
            <span>E</span>
            <span>M</span>
            <span> </span>
            <span>L</span>
            <span>O</span>
            <span>G</span>
          </h2>
          <Link className="sw-All-Btn" href="#">
            <span>ALL LOGS</span>
          </Link>
        </div>
        <ul className="news_List">
          {newsItems.map((item, index) => {
            const { year, md } = formatDate(item.date);
            return (
              <li key={index} className="news-Item js-Animation">
                <a href={item.link}>
                  <dl>
                    <dt className="date">
                      <span className="year">{year}</span>
                      <span className="md">{md}</span>
                    </dt>
                    <dd
                      className="news-ttl"
                      dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                    />
                  </dl>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
