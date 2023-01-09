import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Todo } from '../types/todo';
import TodoListItem from '../components/common/list-items/TodoListItem';
import { List } from '../components/common/List';
import { AxiosResponse } from 'axios';
import { createTodo } from '../services/api-service';
import Card from '../components/common/Card';

const TodoPage = () => {
  const { data, error, isFetching, refetch } = useQuery<Array<Todo>, Error>(`/todo`, { retry: 0 });
  const [message, setMessage] = useState('');

  const mutation = useMutation(createTodo, {
    onSuccess: (response: AxiosResponse) => {
      setMessage('');
      refetch();
    },
    onError: ({ response }) => {
      console.log('Error creating Todo');
      console.log(response.error.message);
      setMessage(response.error.message);
    }
  });

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  if (isFetching) {
    return <span>Loading...</span>;
  }

  const submitForm = () => {
    mutation.mutate({ message });
  };

  const messageChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const renderItem = (item: Todo) => {
    return <TodoListItem item={item} />;
  };

  // We can assume by this point that `isSuccess === true`
  return (
    <>
      <Card title="Todo List">
        <>
          <List<Todo> items={data || []} renderItem={renderItem}></List>
          <div>
            <input type="text" name="message" value={message} onChange={messageChanged} />
            <input type="button" value="Submit" onClick={submitForm} />
          </div>
        </>
      </Card>
    </>
  );
};

export default TodoPage;
