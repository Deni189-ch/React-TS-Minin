import React from "react";
import { useHistory } from "react-router-dom"

export const AboutPage: React.FC = () => {
  const history = useHistory()

  const returnHandler = (): void => { history.push('/') }
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        laudantium reprehenderit animi velit rerum delectus officiis labore
        ipsum praesentium eius?
      </p>
      <button className="btn" onClick={returnHandler}>Обратно к списку дел</button>
    </>
  );
};
