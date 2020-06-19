export const ELLIPSIS = `...`;

const getPageNumbers = ({ items, pageSize, currentPage }) => {
  if (!items) return [];

  const lastPage = Math.ceil(items / pageSize);
  const delta = 2;

  const range = Array(lastPage)
    .fill()
    .map((_, index) => index + 1);

  return range.reduce((pages, page) => {
    if (page === 1 || page === lastPage) {
      return [...pages, page];
    }

    if (page - delta <= currentPage && page + delta >= currentPage) {
      return [...pages, page];
    }

    if (pages[pages.length - 1] !== ELLIPSIS) {
      return [...pages, ELLIPSIS];
    }

    return pages;
  }, []);
};

const getItemsByPage = ({ items, pageSize, currentPage }) => {
  if (!items.length) return [];
  
  return items.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}

export const usePagination = ({ items, currentPage, pageSize }) => {
  const pageNumbers = getPageNumbers({ items: items.length, pageSize, currentPage });
  const pageItems = getItemsByPage({ items, pageSize, currentPage });
  
  return { pageNumbers, pageItems };
};