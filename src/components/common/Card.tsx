import React, { ReactElement } from 'react';

interface CardProps {
  title?: string;
  children: ReactElement;
}

const Card = (props: CardProps) => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{props.title || ''}</h1>
        </div>
      </header>
      <div className="mt-4 px-4 py-6 sm:px-0 bg-white h-full shadow">{props.children}</div>
    </>
  );
};

export default Card;
