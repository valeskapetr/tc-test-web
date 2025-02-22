import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./App.css";

export default function App() {
  return (
    <>
      <SkeletonTheme baseColor="#080808" highlightColor="#444">
        <p>
          <Skeleton count={3} />
        </p>
      </SkeletonTheme>

      AHOJ!
    </>
  )
}