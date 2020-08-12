import React from 'react';
import './Result.css';

type ResultProps = {
  url: string;
  slug: string;
};

function Result({ url, slug }: ResultProps) {
  return (
    <div className="Result">
      <span>{url}</span>
      <span>{`${window.location.protocol}//${window.location.host}/${slug}`}</span>
    </div>
  );
}

export default Result;
