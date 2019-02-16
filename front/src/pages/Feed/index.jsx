import React from 'react';
import PropsTypes from 'prop-types';
import DocumentService from '../../services/Document';
import { withStyles } from '@material-ui/core';
import Root from '../../components/Root';
import CircularProgress from '@material-ui/core/CircularProgress';

import DocumentCard from '../../components/DocumentCard';

class Feed extends React.Component {
  state = {
    isLoading: true,
    documents: [],
  };

  componentDidMount() {
    DocumentService.getDocuments()
      .then(data => data.json())
      .then(documents =>
        this.setState({
          isLoading: false,
          documents: documents,
        }),
      )
      .catch(err =>
        this.setState({ isLoading: false, documents: [] }, () =>
          this.handleError(err),
        ),
      );
  }

  handleError = err => {};

  render() {
    const { classes } = this.props;
    const { isLoading, documents } = this.state;

    return (
      <Root>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress color="secondary" />
            </div>
          ) : (
            documents.map((document, i) => (
              <DocumentCard key={i} index={i} {...document} />
            ))
          )}
        </div>
      </Root>
    );
  }
}

const styles = theme => ({});

Feed.PropsTypes = {
  classes: PropsTypes.object.isRequired,
};

export default withStyles(styles)(Feed);
