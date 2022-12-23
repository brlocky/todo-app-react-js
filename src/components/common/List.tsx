import React from 'react';

const List: React.FC<{ data: Array<any>; renderItem: (item: any) => JSX.Element; }> = ({
  renderItem,
  data
}) => {
  return (
    <div>
      <ul>{data?.map((item) => renderItem(item))}</ul>
    </div>
  );
};

export default List;
