import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';
import moment from 'moment';

const ArticlePreview = ({
  entry,
  widgetsFor,
  widgetFor,
}) => {
  const categories = entry
    .getIn(['data', 'categories'])
    .map((element) => element);
  let tags = [];
  if (
    typeof entry.getIn(['data', 'tags']) !== 'undefined'
  ) {
    tags = entry
      .getIn(['data', 'tags'])
      .map((element) => element);
  }
  const issuedAt =
    widgetFor('issuedAt') &&
    moment(widgetFor('issuedAt').props.value).format(
      'YYYY.MM.DD HH:hh',
    );
  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      categories={categories}
      tags={tags}
      title={entry.getIn(['data', 'title'])}
      issuedAt={issuedAt}
      featuredimage={entry.getIn(['data', 'featuredimage'])}
    />
  );
};

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ArticlePreview;
