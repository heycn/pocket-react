import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = props => {
  const {children, ...rest} = props;
  return (
    <label>
      <input {...rest} />
    </label>
  );
};

export {Input};
