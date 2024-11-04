import useHome from "./Home/Home.hook";
import { Style as S } from "./Home/Home.style";

const Home = () => {
  useHome();

  return <S.Container>NEXTJS FE STARTER</S.Container>;
};

export default Home;
