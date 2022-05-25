/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [datas, setDatas] = useState([]);
  const [searchResult, setSearchResult] = useState('');

  const [page, setPage] = useState(5);

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=${page}`).then((res) => {
        /* 
        * search result exist then, if conditon will invoke
        */
      if (res?.data?.results && searchResult) {
        let array = [];
        const serachArray = [];
        datas?.forEach((data) => {
          const name = `${data?.name?.title} ${data?.name?.first}  ${data?.name?.last}`;
          const address = `${data?.location?.city} , ${data?.location?.state} , ${data?.location?.country}`;
          const post = data?.location?.postCode;
          array.push(name, address, post);
          if (name.includes(searchResult)) {
            serachArray.push(data);
          }
          array = [];
        });
        setDatas(serachArray);
      } else {
        setDatas(res?.data?.results);
      }
    });
  }, [page, searchResult]);

  return (
    <div>
      <input
        type="search"
        name="search"
        value={searchResult}
        onChange={(e) => {
          setSearchResult(e.target.value);
        }}
      />
      <br />

      <div>
          PAGINATION    : 
        <button
          onClick={() => {
            setPage(page + 5);
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            if (page > 5) {
              setPage(page - 5);
            }
          }}
        >
          SUBTRACT
        </button>
        <hr />
      </div>

      {datas.length &&
        datas.map((data, index) => (
          <div>
            <div>
              Name : {data?.name?.title} {data?.name?.first} {data?.name?.last}
            </div>
            <div>
              Address : {data?.location?.city} , {data?.location?.state} ,{' '}
              {data?.location?.country}{' '}
            </div>

            <div>Email : {data?.email}</div>

            <div>Phone : {data?.phone}</div>
            <div>
              Image : <img src={data?.picture?.medium} alt={`image ${index}`} />
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Table;
