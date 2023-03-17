import { useEffect, useState } from "react";

export default function VideosPagination({ setPosts, searchResult, totalPosts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPerPage ] = useState(10);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / videosPerPage); i++) {
    pageNumbers.push(i);
  }

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    //get current page's videos
    const indexOfLastPost = currentPage * videosPerPage;
    const indexOfFirstPost = indexOfLastPost - videosPerPage;
    const currentPosts = searchResult.slice(indexOfFirstPost, indexOfLastPost);
    setPosts(currentPosts);
  }, [currentPage])

  return (
    <>
      {pageNumbers.map(number => {
        return (
          <button
            key={number}
            className="page-number"
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        )
      })}
    </>
  );
}
