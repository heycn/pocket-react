// 导航栏图标组件

// 引入一个目录
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

const Icon = (props: {name: string}) => {
  return (
    <svg className='icon'>
      <use xlinkHref={'#' + props.name} />
    </svg>
  );
};

export default Icon;
