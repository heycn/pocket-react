// 导航栏图标组件

require('icons/tags.svg');
require('icons/money.svg');
require('icons/chart.svg');

const Icon = (props: {name: string}) => {
  return (
    <svg className='icon'>
      <use xlinkHref={'#' + props.name} />
    </svg>
  );
};

export default Icon;
