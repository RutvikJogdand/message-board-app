import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_messages_feed } from '../../redux/message-feed-redux/actions';

function MessageBoard() {
  const initialDisplayCount = 3;
  const itemsPerPage = 3; // Load 3 items at a time
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const messagesData = useSelector(state => state.messagesRoot.messages_feed);
  // From Post Message:
  const postedMessage = useSelector(state => state.postMessageRoot.posted_message);
  // 
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(get_messages_feed());
  }, [dispatch]);

  useEffect(() => {
    setData(messagesData);
  }, [messagesData]);

  useEffect(() => {
    if (messagesData && messagesData.length > 0) {
      setData((prevData) => [...prevData, postedMessage]);
    } else {
      setData([postedMessage]);
    }
  }, [postedMessage, messagesData]);

  const handleLoadMore = () => {
    const newDisplayCount = displayCount + itemsPerPage;
    setDisplayCount(newDisplayCount);
    setPage(page + 1);
  };

  const handleShowLess = () => {
    const newDisplayCount = displayCount - itemsPerPage;
    setDisplayCount(newDisplayCount);
  };

  const getPaginatedData = () => {
    const startIndex = 0; // Always start from the beginning
    const endIndex = displayCount;
    return data.slice(startIndex, endIndex);
  };

  const handleDelete = (id) => {
    console.log('id', id)
    const filteredData = data.filter(item => item.id !== id)
    setData([...filteredData]);
  }

  return (
    <div>
      <ul>
        {getPaginatedData().map((item, index) => (
          <li key={index}>
            <div>
              {item.source}
              <span> {new Date(item.timestamp).toLocaleString()} </span>
              <button onClick={() => handleDelete(item.id)}> Delete </button>
            </div>
            <div> {item.text} </div>
          </li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More</button>
      <button onClick={handleShowLess}>Show Less</button>
      {/* {displayCount < data.length ? (
      ) : (
      )} */}
    </div>
  );
}

export default MessageBoard;
