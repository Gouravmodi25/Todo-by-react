import style from "./Series.module.css";
import styled, { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

const H3 = styled.h3({
  textTransform: "capitalize",
  fontSize: "1.7rem",
  fontWeight: "500",
});

const NewButton = styled.button`
  background-color: ${(props) =>
    props.rating >= 8.5 ? "#29c90abd" : "rgb(242, 231, 114)"};
`;
const Series = ({ currElem }) => {
  const { name, img_url, rating, description, cast, genre, watch_url } =
    currElem;
  console.log(currElem);
  // console.log(currElem);
  return (
    <section>
      <div>
        <li className={style.list}>
          <div>
            <div>
              <img src={img_url} alt="image1.jpeg" />
            </div>
            <div className={style.content}>
              <h2>Name: {name}</h2>
              <H3>
                Rating:{" "}
                <span
                  className={
                    rating >= 8.5 ? `${style.superhit}` : `${style.average}`
                  }>
                  {rating}
                </span>
              </H3>
              <p>Summary: {description}</p>
              <p>Cast: {cast.join(",")}</p>
              <p>Genre: {genre.join(",")}</p>
              <a href={watch_url} target="_blank">
                {/* <button
                  className={
                    rating >= 8.5 ? `${style.superhit}` : `${style.average}`
                  }>
                  Watch Now
                </button> */}
                <StyleSheetManager shouldForwardProp={isPropValid}>
                  <NewButton rating={rating}>Watch Now</NewButton>
                </StyleSheetManager>
              </a>
            </div>
          </div>
        </li>
      </div>
    </section>
  );
};

export default Series;
