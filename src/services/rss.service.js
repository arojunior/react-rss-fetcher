import axios from 'axios';
import parser from 'xml-js';
import htmlParser from 'html-react-parser';

const parseProperty = prop => {
  const content = prop._text || prop._cdata;
  const isHtml = /^/.test(content);
  return isHtml ? htmlParser(content) : content;
}

const mapItems = items => items.map(({ title, link, pubDate, description }) => ({
  title: parseProperty(title),
  link: parseProperty(link),
  pubDate: parseProperty(pubDate),
  description: parseProperty(description),
}));

export const getRSSContent = (url) => {
  return axios
    .get(`https://cors-anywhere.herokuapp.com/${url}`)
    .then(({ data }) => {
      const xmlParsed = parser.xml2json(data, {
        compact: true,
        ignoreComment: true,
      });

      const { rss: { channel: { item } } } = JSON.parse(xmlParsed);
      
      return mapItems(item);
    });
};
