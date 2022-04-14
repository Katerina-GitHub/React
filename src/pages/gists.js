import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGists } from "../store/gists";

export function Gists() {
  const dispatch = useDispatch();
  const { gists, error, pending } = useSelector((state) => state.gists);

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists(1));
    }
  }, [dispatch, gists]);

  if (error) {
    return <h1>error</h1>;
  }

  return (
    <>
      <h1>gists</h1>
      {Array.from({ length: 10 }).map((_, i) => (
        <button onClick={() => dispatch(getGists(i + 1))} key={i}>
          {i + 1}
        </button>
      ))}

      {pending ? (
        <h1>pending ...</h1>
      ) : (
        gists?.map((gist, index) => <h1 key={index}>{gist.commits_url}</h1>)
      )}
    </>
  );
}
