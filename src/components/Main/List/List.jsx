import {useRef, useEffect} from 'react';
import {useBestPosts} from '../../../hooks/useBestPosts';
import {Preloader} from '../../Header/Auth/AuthLoader/AuthLoader';
import style from './List.module.css';
import Post from './Post';
import {useDispatch} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {useParams} from 'react-router-dom';
import {Outlet} from 'react-router-dom';

export const List = () => {
  const [posts, loading] = useBestPosts();
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  console.log(page);

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (!posts.length) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });
    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve();
      }
    };
  }, [endList.current]);

  return (
    <>
      {loading ? (
        <Preloader color='#000' size='400px' />
      ) : (
        <ul className={style.list}>
          {posts.map((postData) => (
            <Post key={postData.id} postData={postData} />
          ))}
          <li ref={endList} className={style.end} />
        </ul>
      )}
      <Outlet/>
    </>
  );
};
