import { ThreeCircles } from 'react-loader-spinner';

const Loader = ({ height = '100', width = '100', color = '#4fa94d' }) => {
  return (
    <ThreeCircles
      height={height}
      width={width}
      color={color}
      wrapperStyle={{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
};

export default Loader;
