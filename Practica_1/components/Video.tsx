import { FunctionComponent, JSX } from "preact";

type videoParams = {
  tittle: string;
  source: string;
};

const Video: FunctionComponent<videoParams> = (props) => {
  const { source, tittle } = props;
  if (source === undefined || source === null) {
    return <text>VIDEO NOT FOUND</text>;
  }
  return (
    <div class="video-width">
      <h3>{tittle}</h3>
      <iframe
        width="100%"
        height="315"
        src={source}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay;"
      >
      </iframe>
    </div>
  );
};

export default Video;
