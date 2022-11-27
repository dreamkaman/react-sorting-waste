import sprite from '../../../images/swg/sprite.svg';

const GetSvg = ({ name, className }) => {
  return (
    <svg className={className}>
      <use href={sprite + `#${name}`} />
    </svg>
  );
};

// Usage: <GetIcon name="svgName" width={svgWidth} height={svgHeight} classname={svgClassName}/>
export default GetSvg;
