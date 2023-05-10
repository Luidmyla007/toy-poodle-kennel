import { StyledLoader, GifLoader } from "./Loader.styled";

export const Loader = () => {
  return (
    <StyledLoader>
       <GifLoader  src="https://media.giphy.com/media/5VXc3ELd2VvZKQG9PX/giphy.gif"
        alt="dog in love"></GifLoader>
    </StyledLoader>
  );
};