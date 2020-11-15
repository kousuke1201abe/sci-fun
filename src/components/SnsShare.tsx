import * as React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';

const SnsShare = ({ url }) => {
  return (
    <div className="sns-share">
      <FacebookShareButton
        url={url}
        style={{ margin: '5px' }}
      >
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        style={{ margin: '5px' }}
      >
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <LineShareButton url={url} style={{ margin: '5px' }}>
        <LineIcon size={40} round />
      </LineShareButton>
    </div>
  );
};

export default SnsShare;
