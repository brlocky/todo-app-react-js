import React from 'react';
import { useQuery } from 'react-query';
import { Todo } from '../types/Todo';
import List from '../components/common/List';
import TodoListItem from '../components/common/list-items/TodoListItem';

const TodoPage = () => {
  const { data, error, isFetching } = useQuery<Array<Todo>, Error>(`/todo`, {});

  if (isFetching) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  const renderItem = (data: Todo) => {
    return <TodoListItem data={data} />;
  };

  // We can assume by this point that `isSuccess === true`
  return (
    <>
      <p>Todo List</p>
      <List data={data || []} renderItem={renderItem}></List>
    </>
  );
};

export default TodoPage;
