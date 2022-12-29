import React from 'react';

export interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
}

export function List<T>(props: ListProps<T>) {
  return (
    <div>
      <ul>{props.items?.map(props.renderItem)}</ul>
    </div>
  );
}
