import {useBestPosts} from '../../../hooks/useBestPosts';
import {Preloader} from '../../Header/Auth/AuthLoader/AuthLoader';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const [posts, loading] = useBestPosts();
  return (
    <>
      {loading ? (
        <Preloader color='#000' size='400px' />
      ) : (
        <ul className={style.list}>
          {posts.map((postData) => (
            <Post key={postData.id} postData={postData} />
          ))}
        </ul>
      )}
    </>
  );
};
