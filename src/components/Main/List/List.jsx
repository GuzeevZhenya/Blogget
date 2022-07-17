import React from 'react';
import style from './List.module.css';
import Post from './Post';

export const List = (props) => {
  const postData = [
    {
      thimbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 31,
      date: '2022-02-24T09:45:00.00Z',
      id: 1,
    },
    {
      thimbnail: '',
      title: 'Title2',
      author: 'Nickname3',
      ups: 2,
      date: '2022-02-24T09:45:00.00Z',
      id: 2,
    },
    {
      thimbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 24,
      date: '2022-02-24T09:45:00.00Z',
      id: 3,
    },
    {
      thimbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 32,
      date: '2022-02-24T09:45:00.00Z',
      id: 4,
    },
    {
      thimbnail: '',
      title: 'Title5',
      author: 'Nickname5',
      ups: 14,
      date: '2022-02-24T09:45:00.00Z',
      id: 5,
    },
  ];
  return (
    <ul className={style.list}>
      {postData.map((post, index) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};
